import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
const { description } = require('../../package')

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'ko-KR',
    title: 'PEP8 한국어 번역',
    description: description,
    base: '/pep8-in-korean/',
    dest: './public',
    head: [
        ['meta', { name: 'theme-color', content: '#59a1de' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    themeConfig: {
        repo: 'zerosheepmoo/pep8-in-korean',
        editLink: false,
        contributors: false,
        navbar: [
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
                    text: '번역가이드',
                    isGroup: true,
                    children: [
                        'contribute.md',
                        'style.md',
                        'trans-philosophy.md',
                        'guide-video.md',
                    ],
                }
            ],
            '/doc/': [
                {
                    text: 'PEP8',
                    isGroup: true,
                    children: [
                        'introduction.md',
                        {
                            text: '각선구검',
                            link: 'a-foolish-consistency-is-the-hobgoblin-of-little-minds.md',
                        },
                        'code-lay-out.md',
                        'string-quotes.md',
                        'whitespace-in-expressions-and-statements.md',
                        'when-to-use-trailing-commas.md',
                        'comments.md',
                        'naming-conventions.md',
                        'programming-recommendations.md',
                        'copyright.md'
                    ]
                }
            ],
            '/hello/': [
                {
                    text: '인삿말',
                    isGroup: true,
                    children: [
                        'hello-zerosheepmoo.md',
                        'hello-xodnr8925.md',
                        'hello-Ohjiwoo-lab.md',
                        'hello-Sumin0916.md',
                        'hello-hajun_m.md'
                    ]
                }
            ]
        }
    },
    plugins: [
        [
            '@vuepress/plugin-google-analytics',
            {
                id: 'G-YT6KMEGETX',
            },
        ],
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                },
                isSearchable: (page) => !page.path.includes('/docguide/') && !page.path.includes('/hello/'),
            },
        ],
    ],
    extendsMarkdown: md => {
        md.use(require('markdown-it-footnote'));
    }
});
