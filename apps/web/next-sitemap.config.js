const siteUrl = 'https://gedged.co'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/dashboard-old/' },
      { userAgent: '*', disallow: '/register/' },
      { userAgent: '*', disallow: '/login/' },
      { userAgent: '*', disallow: '/projects/' },
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/dashboard-old/*', '/register-old', '/login-old', '/projects/*'],
}
