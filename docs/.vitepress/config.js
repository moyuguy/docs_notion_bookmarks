export default {
  title: "Notion Bookmarks",
  description: "一个优雅的 Notion 个人导航站",
  lang: 'zh-CN',
  
  // 指定自定义主题
  theme: './theme',
  
  locales: {
    '/': {
      label: '简体中文',
      lang: 'zh-CN'
    },
    '/en/': {
      label: 'English',
      lang: 'en-US',
      title: "Notion Bookmarks",
      description: "An elegant personal navigation site powered by Notion"
    }
  },
  
  themeConfig: {
    logo: '/logo.svg',
    
    localeLinks: {
      text: '语言',
      items: [
        { text: '简体中文', link: '/' },
        { text: 'English', link: '/en/' }
      ]
    },
    
    locales: {
      '/': {
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
                { text: '数据迁移', link: '/guide/migrating-data' },
                { text: '分类与标签', link: '/guide/categories-and-tags' }
              ]
            }
          ]
        }
      },
      '/en/': {
         nav: [
           { text: 'Home', link: '/en/' },
           { text: 'Guide', link: '/en/guide/getting-started' },
           { text: 'Changelog', link: '/en/changelog' },
           { text: 'GitHub', link: 'https://github.com/moyuguy/notion_bookmarks' }
         ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Getting Started', link: '/en/guide/getting-started' },
                { text: 'Collecting Sites', link: '/en/guide/collecting-sites' },
                { text: 'Data Migration', link: '/en/guide/migrating-data' },
                { text: 'Categories & Tags', link: '/en/guide/categories-and-tags' }
              ]
            }
          ]
        }
      }
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