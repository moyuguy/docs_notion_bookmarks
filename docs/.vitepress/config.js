export default {
  title: "Notion Bookmarks",
  description: "一个优雅的 Notion 个人导航站",
  lang: 'zh-CN',
  
  // 指定自定义主题
  theme: './theme',
  
  // 配置 favicon
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }]
  ],
  
  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/getting-started' },
      { text: '更新日志', link: '/changelog' },
      { text: 'GitHub', link: 'https://github.com/moyuguy/notion_bookmarks' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速上手', link: '/guide/getting-started' },
            { text: '收集网站', link: '/guide/collecting-sites' },
            { text: '分类与标签', link: '/guide/categories-and-tags' },
            { text: '数据迁移', link: '/guide/migrating-data' },
            { text: '网站配置', link: '/guide/website-configuration' }
          ]
        },
        {
          text: '其他',
          items: [
            { text: '常见问题', link: '/guide/faq' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moyuguy/notion_bookmarks' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present moyuguy'
    }
  }
}