import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja-JP',
  title: 'SOLO/LIVE DESIGN LAB',
  description: 'ホロライブのソロライブ特設サイトから学ぶ、非公式のWebデザイン研究室。',
  base: '/Sololive-Design/',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'SOLO/LIVE LAB',
    search: { provider: 'local' },
    nav: [
      { text: 'Showcase', link: '/' },
      { text: '事例研究', link: '/research/sites' },
      { text: '技術と証拠', link: '/research/evidence' },
      { text: 'GitHub', link: 'https://github.com/Hoshock/Sololive-Design' }
    ],
    sidebar: {
      '/research/': [
        { text: 'Research', items: [
          { text: '事例カタログ', link: '/research/sites' },
          { text: 'エビデンス台帳', link: '/research/evidence' }
        ] },
        { text: 'Related', items: [
          { text: 'デザイン原則', link: '/design/principles' },
          { text: '技術選定', link: '/engineering/techniques' }
        ] }
      ],
      '/design/': [
        { text: 'Design', items: [{ text: 'デザイン原則', link: '/design/principles' }] }
      ],
      '/engineering/': [
        { text: 'Engineering', items: [
          { text: 'CSSとライブラリ', link: '/engineering/techniques' },
          { text: 'DevToolsでの調査', link: '/engineering/inspection' }
        ] }
      ],
      '/': [
        { text: 'Research', items: [
          { text: '事例カタログ', link: '/research/sites' },
          { text: 'エビデンス', link: '/research/evidence' }
        ] },
        { text: 'Design', items: [{ text: 'デザイン原則', link: '/design/principles' }] },
        { text: 'Engineering', items: [
          { text: '技術選定', link: '/engineering/techniques' },
          { text: '調査手順', link: '/engineering/inspection' }
        ] }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Hoshock/Sololive-Design' }],
    footer: {
      message: 'Unofficial design study. Not affiliated with hololive production.',
      copyright: '© 2026 Sololive-Design'
    },
    editLink: {
      pattern: 'https://github.com/Hoshock/Sololive-Design/edit/main/docs/:path',
      text: 'このページを編集'
    }
  }
})
