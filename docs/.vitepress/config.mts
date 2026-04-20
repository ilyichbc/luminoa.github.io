import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'
import timeline from "vitepress-markdown-timeline"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite:{
    plugins:[
      // add plugin
      AutoSidebar({deletePrefix:'index',ignoreIndexItem:true})
    ]
  },
   base: '/',
  title: "星籁浮屿",
  description: "这是一句slogan……",
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/ilyichbc/cdn/luminoa-site-CDN/img/logo.png' }],
  ],
  markdown: {
    //行号显示
    lineNumbers: true,

    //时间线
    config: (md) => {
      md.use(timeline);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://cdn.jsdelivr.net/gh/ilyichbc/cdn/luminoa-site-CDN/img/logo.png", // 页面上显示的logo
    // 全局关闭左侧侧边栏
    sidebar: false,
    lastUpdated: {
      text: '最后更新于'
    },
    nav: [ // 页面右上角的导航
      { text: "主页", link: "/" },
      { text: "最新资讯", link: "https://news.luminoa.ilyich.top/" },
      { text: "所有产品", link: "/product/" },
      { text: "关于我们", link: "/aboutus/" },
    ],
    footer: {
      message: '',
      copyright: 'Copyright © 2026 luminoa'
    },
    //editLink: {
    //  pattern: 'https://github.com/luminoa/luminoa.github.io/edit/main/docs/:path',
    //  text: '在 GitHub 上编辑此页'
    //},
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
//    darkModeSwitchLabel:'亮/暗模式',
//    lightModeSwitchTitle:'调整为亮色模式',
//    darkModeSwitchTitle:'调整为暗色模式',
    sidebarMenuLabel:'菜单',
    returnToTopLabel:'回到顶部',
  }
})
