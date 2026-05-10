/**
 * POST /api/inquiry
 * Server endpoint for booking inquiry and contact form submissions.
 * Validates fields, formats the data, and sends notification email.
 *
 * Email delivery: Uses the SMTP/email service configured via environment variables.
 * For production, set EMAIL_TO and optionally a transactional email service.
 * Falls back to storing submissions if no email service is configured.
 */
import type { APIRoute } from 'astro';
// Phase 11a: Astro 6 + @astrojs/cloudflare exposes runtime env via the
// virtual `cloudflare:workers` module (the previous `Astro.locals.runtime.env`
// pattern was removed in Astro v6). Bindings are populated from
// `wrangler.toml [vars]` for local dev (.dev.vars file) and from the
// Cloudflare Pages dashboard secrets in production.
import { env } from 'cloudflare:workers';

export const prerender = false;

interface InquiryData {
  name: string;
  email: string;
  suite?: string;
  checkin?: string;
  checkout?: string;
  message?: string;
  form: 'booking' | 'contact';
}

function validate(data: InquiryData): string[] {
  const errors: string[] = [];
  if (!data.name || data.name.trim().length < 2) errors.push('Name is required');
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Valid email is required');
  if (data.form === 'booking' && !data.checkin) errors.push('Arrival date is required');
  return errors;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const data: InquiryData = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      suite: formData.get('suite')?.toString() || '',
      checkin: formData.get('checkin')?.toString() || '',
      checkout: formData.get('checkout')?.toString() || '',
      message: formData.get('message')?.toString() || '',
      form: (formData.get('form')?.toString() as 'booking' | 'contact') || 'booking',
    };

    // Validate
    const errors = validate(data);
    if (errors.length > 0) {
      return new Response(JSON.stringify({ ok: false, errors }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Format notification
    const subject = data.form === 'booking'
      ? `Booking Inquiry: ${data.name}${data.suite ? ` — ${data.suite}` : ''}`
      : `Contact Message: ${data.name}`;

    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.suite ? `Suite: ${data.suite}` : null,
      data.checkin ? `Check-in: ${data.checkin}` : null,
      data.checkout ? `Check-out: ${data.checkout}` : null,
      data.message ? `Message: ${data.message}` : null,
      `---`,
      `Submitted: ${new Date().toISOString()}`,
      `Form: ${data.form}`,
    ].filter(Boolean).join('\n');

    // Phase 11a: env vars come from the Cloudflare Workers runtime binding
    // (see `cloudflare:workers` import at the top). The cast lets us read
    // optional secrets without TS complaining when no `Env` interface is
    // declared. `import.meta.env` is no longer used here — it's replaced at
    // build time and would bake secrets into the bundle.
    const cfEnv = env as { RESEND_API_KEY?: string; EMAIL_TO?: string };
    const emailTo = cfEnv.EMAIL_TO || 'info@rabagas-suites.gr';
    const resendKey = cfEnv.RESEND_API_KEY;

    if (resendKey) {
      // Production: send via Resend
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Rabagas Website <noreply@rabagas-suites.com>',
          to: emailTo,
          reply_to: data.email,
          subject,
          text: body,
        }),
      });

      if (!res.ok) {
        console.error('Resend error:', await res.text());
        return new Response(JSON.stringify({ ok: false, errors: ['Failed to send. Please try again.'] }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } else {
      // Development/staging: log to console
      console.log('=== INQUIRY RECEIVED (no email service configured) ===');
      console.log(`Subject: ${subject}`);
      console.log(body);
      console.log('=== Set RESEND_API_KEY env var for production email delivery ===');
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Inquiry endpoint error:', err);
    return new Response(JSON.stringify({ ok: false, errors: ['Server error. Please try again.'] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
