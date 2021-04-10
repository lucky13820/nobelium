const BLOG = {
  title: 'Ryan Yao Blog',
  author: 'Ryan Yao',
  email: 'hello@ryanyao.design',
  link: 'https://ryanyao.me',
  description: 'This is my new blog home',
  lang: 'en-US',
  appearance: 'dark', // ['light', 'dark', 'auto'],
  lightBackground: '#f3f3f3', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#1D1C23', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // if leave this empty, current year will be used.
  postsPerPage: 8,
  showAbout: true, // WIP
  showArchive: true, // WIP
  socialLink: 'https://twitter.com/ryanqyao',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk
    provider: '', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    }
  }
}
// export default BLOG
module.exports = BLOG
