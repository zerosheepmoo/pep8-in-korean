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
  dest: './public',

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
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'zerosheepmoo/pep8-in-korean',
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
        text: 'Hello',
        link: '/hello/'
      }
    ],
    sidebar: {
      '/docguide/': [
        {
          title: '번역가이드',
          collapsable: false,
          children: [
            'contribute.md',
            'style.md',
            'trans-philosophy.md',
            'guide-video',
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
            'when-to-use-trailing-commas.md',
            'naming-conventions.md',
            'comments.md',
            'references.md',
          ]
        }
      ],
      '/hello/': [
        {
          title: '인삿말',
          collapsable: false,
          children: [
            'hello-zerosheepmoo',
            'hello-xodnr8925',
            'hello-Ohjiwoo-lab',
            'hello-Sumin0916'
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
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          let dateString = new Date(timestamp).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }) + " [KST]"
          return dateString;
        }
      }
    ],
    [
      '@vuepress/plugin-google-analytics',
      {
        'ga': 'G-YT6KMEGETX',
      }
    ]
  ],
  markdown: {
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-footnote'));
    }
  }

}

