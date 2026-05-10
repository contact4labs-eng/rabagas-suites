/**
 * Phase 11a: TypeScript declarations for the Cloudflare Workers virtual
 * module `cloudflare:workers`. The Astro adapter doesn't auto-publish
 * these into .astro/types.d.ts on Astro 6.1.x, so we declare the surface
 * we use (the request-scoped `env` object) here.
 *
 * The full `@cloudflare/workers-types` package is installed as a devDep
 * for any future deeper Workers API usage; this file exposes the minimal
 * shape `/api/inquiry` reads from.
 */
declare module 'cloudflare:workers' {
  interface RuntimeEnv {
    RESEND_API_KEY?: string;
    EMAIL_TO?: string;
    [key: string]: unknown;
  }
  export const env: RuntimeEnv;
}
