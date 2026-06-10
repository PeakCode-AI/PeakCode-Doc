import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Peak Code',
  description: 'Peak Code 用户文档 — AI 编程代理的图形界面',
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Peak Code 文档',
    nav: [
      { text: '指南', link: '/guide/quick-start' },
      { text: '功能', link: '/features/multi-agent' },
      { text: '配置', link: '/config/provider-setup' },
      { text: 'FAQ', link: '/faq/' }
    ],
    sidebar: [
      {
        text: '开始',
        collapsed: false,
        items: [
          { text: '快速开始', link: '/guide/quick-start' },
          { text: '安装与部署', link: '/guide/installation' },
          { text: '从源码构建', link: '/guide/build-from-source' }
        ]
      },
      {
        text: '功能介绍',
        collapsed: false,
        items: [
          { text: '多代理统一界面', link: '/features/multi-agent' },
          { text: '实时流式输出', link: '/features/streaming' },
          { text: 'Git 集成', link: '/features/git-integration' },
          { text: '会话持久化', link: '/features/sessions' },
          { text: '终端与编辑器', link: '/features/terminal-editor' }
        ]
      },
      {
        text: '配置',
        collapsed: false,
        items: [
          { text: 'Provider 配置', link: '/config/provider-setup' },
          { text: 'DeepSeek 配置指南', link: '/config/deepseek' },
          { text: 'Claude Code 配置', link: '/config/claude-code' },
          { text: '高级配置', link: '/config/advanced' }
        ]
      },
      {
        text: '常见问题',
        link: '/faq/'
      }
    ],
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/PeakCode-AI/PeakCode' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '跳转'
            }
          }
        }
      }
    },
    lastUpdated: {
      text: '最后更新于'
    }
  }
})
