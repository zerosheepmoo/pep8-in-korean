const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'PEP8 한국어 번역',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/pep8-in-korean/',
  dest: 'build',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#59a1de' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Guide',
        link: '/docguide/',
      },
      {
        text: 'Document',
        link: '/doc/'
      },
      {
        text: 'Github',
        link: 'https://github.com/zerosheepmoo/pep8-in-korean'
      }
    ],
    sidebar: {
      '/docguide/': [
        {
          title: '번역가이드',
          collapsable: false,
          children: [
            '',
            'contribute.md',
            'style.md',
            'trans-philosophy.md'
          ]
        }
      ],
      '/doc/': [
        {
          title: 'PEP8',
          collapsable: false,
          children: [
            'introduction.md',
            'a-foolish-consistency-is-the-hobgoblin-of-little-minds.md',
            'code-lay-out.md',
            'string-quotes.md',
            'whitespace-in-expressions-and-statements.md',
            'references.md',
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-footnote'))
    }
  }

}
