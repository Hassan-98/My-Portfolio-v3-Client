/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://hassanali.tk',
  generateRobotsTxt: true, // (optional)
  outDir: './public'
}