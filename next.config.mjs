// next.config.js
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // your existing env:
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  // make sure you’re using the App Router
  experimental: {
    appDir: true,
  },
  // any other Next.js settings you already have…
};

// wrap with next-intl
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
