/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  i18n: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig; 