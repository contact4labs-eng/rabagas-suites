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
    //
    // Phase 12.3 production-safety rule:
    // - If RESEND_API_KEY is set, send the email and surface its outcome.
    // - If RESEND_API_KEY is MISSING and ALLOW_INQUIRY_FALLBACK !== 'true',
    //   fail closed with a 500 — never return ok:true and silently drop
    //   inquiries. Cloudflare production secrets must include
    //   RESEND_API_KEY; this guard catches misconfigured deploys.
    // - If RESEND_API_KEY is missing AND ALLOW_INQUIRY_FALLBACK === 'true'
    //   (set in .dev.vars for local development only), log the inquiry to
    //   stdout and return ok:true so local UX iteration still works.
    const cfEnv = env as {
      RESEND_API_KEY?: string;
      EMAIL_TO?: string;
      ALLOW_INQUIRY_FALLBACK?: string;
    };
    const emailTo = cfEnv.EMAIL_TO || 'info@rabagas-suites.gr';
    const resendKey = cfEnv.RESEND_API_KEY;
    const devFallbackEnabled = cfEnv.ALLOW_INQUIRY_FALLBACK === 'true';

    if (resendKey) {
      // Production path: send via Resend, propagate failures honestly.
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
        // Log Resend's response server-side, but never leak it to the
        // browser response (could contain account/quota detail).
        console.error('Resend error:', await res.text());
        return new Response(JSON.stringify({ ok: false, errors: ['delivery_failed'] }), {
          status: 502,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } else if (devFallbackEnabled) {
      // Local dev path: log to stdout. Only reachable when the operator
      // explicitly opts in via ALLOW_INQUIRY_FALLBACK=true (see .dev.vars).
      console.log('=== INQUIRY RECEIVED (dev fallback — no email service) ===');
      console.log(`Subject: ${subject}`);
      console.log(body);
      console.log('=== Set RESEND_API_KEY in Cloudflare dashboard for production delivery ===');
    } else {
      // Production deploy is missing RESEND_API_KEY. Fail closed so the
      // visitor sees the error UI and tries phone/email instead of
      // believing George & Didi will reply.
      console.error(
        'Inquiry endpoint: RESEND_API_KEY is not configured. ' +
        'Set it in the Cloudflare Workers dashboard, or set ' +
        'ALLOW_INQUIRY_FALLBACK=true in .dev.vars for local development.',
      );
      return new Response(JSON.stringify({ ok: false, errors: ['service_unconfigured'] }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
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
