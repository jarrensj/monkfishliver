// Vercel sets VERCEL_PROJECT_PRODUCTION_URL (the production domain, no
// protocol) at build time for every deployment, previews included.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
