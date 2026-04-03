---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 星籁浮屿
titleTemplate: 这是一句slogan……

hero:
  name: 星籁浮屿
  text: </dev>
  tagline: 这是一句slogan……
  image:
    src: https://cdn.jsdelivr.net/gh/ilyichbc/cdn/luminoa-site-CDN/img/logo.png
    alt: logo
  actions:
    - theme: brand
      text: 了解我们
      link: ./aboutus/
#    - theme: alt
#      text: 在 Github 上查看
#      link: https://github.com/luminoa/luminoa.github.io
      
features:
  - icon: ✨
    title: 所有产品
    details: 这里倾注了我们的心血
    link: ./product/
  - icon: 🚀
    title: 关于我们
    details: 你可以在这里了解我们
    link: ./aboutus/
---
<div style="position: relative; width: auto; margin: 2rem 0; font-family: -apple-system, BlinkMacSystemFont, 'Microsoft Yahei', sans-serif;">
  <!-- 标题文字（青蓝渐变） -->
  <h1 style="margin: 0; font-size: 2rem; font-weight: 600; 
             background: linear-gradient(90deg, #00c3ffcc, #0089f2cc );
             -webkit-background-clip: text;
             background-clip: text;
             color: transparent;
             position: relative;
             display: inline-block;">
    游戏产品
    <!-- 与文字等长的青蓝渐变下划线 -->
    <span style="position: absolute; bottom: -8px; left: 0; 
                 width: 100%; height: 3px;
                 background: linear-gradient(90deg, #00c3ffcc, #0089f2cc );
                 border-radius: 1.5px;"></span>
  </h1>
</div>

<div style="max-width: 1200px; margin: 2rem auto; border-radius: 16px; overflow: hidden; background: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.08); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <!-- 顶部横幅区域 -->
  <div style="position: relative; height: 300px; background: linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%); overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(200,225,255,0.1) 35px, rgba(200,225,255,0.1) 70px);"></div>
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; z-index: 2;">
      <img src="https://cdn.jsdelivr.net/gh/ilyichbc/cdn/luminoa-site-CDN/img/sxwg_logo.webp" alt="霜星挽歌" style="height: 160px; filter: drop-shadow(0 0 10px rgba(135, 206, 250, 0.5));" />
    </div>
  </div>

  <!-- 底部信息区域（已添加跳转功能） -->
  <div style="padding: 2.5rem; background: #ffffff;">
    <h2 style="margin: 0 0 1.5rem 0; font-size: 2rem; font-weight: 600; color: #00c3ffcc;">霜星挽歌</h2>
    <p style="margin: 0 0 2rem 0; font-size: 1.1rem; color: #666666;">游戏描述正在编写中……</p>
    <!-- 替换为a标签实现跳转，保留原按钮样式 -->
    <a href="./product/sxwg" style="padding: 0.8rem 2rem; border: 2px solid #00c3ffcc; border-radius: 12px; background: transparent; color: #00c3ffcc; font-size: 1.1rem; font-weight: 500; cursor: pointer; transition: all 0.3s ease; text-decoration: none; display: inline-block;"
      onmouseover="this.style.background='#00c3ffcc'; this.style.color='#ffffff';"
      onmouseout="this.style.background='transparent'; this.style.color='#00c3ffcc';">
      访问官网
    </a>
  </div>
</div>

<div style="position: relative; width: auto; margin: 2rem 0; font-family: -apple-system, BlinkMacSystemFont, 'Microsoft Yahei', sans-serif;">
  <!-- 标题文字（青蓝渐变） -->
  <h1 style="margin: 0; font-size: 2rem; font-weight: 600; 
             background: linear-gradient(90deg, #00c3ffcc, #0089f2cc );
             -webkit-background-clip: text;
             background-clip: text;
             color: transparent;
             position: relative;
             display: inline-block;">
    获取信息
    <!-- 与文字等长的青蓝渐变下划线 -->
    <span style="position: absolute; bottom: -8px; left: 0; 
                 width: 100%; height: 3px;
                 background: linear-gradient(90deg, #00c3ffcc, #0089f2cc );
                 border-radius: 1.5px;"></span>
  </h1>
</div>

<!-- 引入Font Awesome图标库（必须先引入才能使用图标） -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  .custom-cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    margin: 20px 0;
  }
  .custom-card {
    flex: 1;
    min-width: 300px;
    max-width: 1200px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border: 1px solid #f5f5f5;
    padding: 40px 24px;
    text-align: center;
    box-sizing: border-box;
  }
  .custom-icon-circle {
    width: 64px;
    height: 64px;
    background-color: #3fa9f5;
    color: #ffffff;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    margin-bottom: 16px;
  }
  .custom-card-title {
    color: #3fa9f5;
    font-size: 22px;
    font-weight: 600;
    margin: 0 0 16px 0;
  }
  .custom-card-desc {
    color: #666666;
    font-size: 14px;
    line-height: 1.6;
    margin: 0 0 28px 0;
    min-height: 44px; /* 保持两边对齐 */
  }
  .custom-btn {
    display: inline-block;
    background-color: #3fa9f5;
    color: #ffffff !important; /* 覆盖md默认链接颜色 */
    text-decoration: none !important;
    padding: 10px 32px;
    border-radius: 6px;
    font-size: 15px;
    transition: opacity 0.2s;
  }
  .custom-btn:hover {
    opacity: 0.9;
  }
  .custom-action-group {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 8px;
  }
  .custom-email-box {
    background-color: #f0f8ff;
    color: #3fa9f5;
    padding: 10px 16px;
    border-radius: 6px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .custom-action-group .custom-btn {
    padding: 10px 20px;
  }
</style>

<div class="custom-cards-wrapper">
  
  <div class="custom-card">
    <div class="custom-icon-circle">
      <i class="fa-brands fa-bilibili"></i>
    </div>
    <h3 class="custom-card-title">官方B站</h3>
    <p class="custom-card-desc">关注我们的B站官方账号，获取最新游戏资讯、开发日志和独家内容</p>
    <a href="https://space.bilibili.com/18224825" target="_blank" class="custom-btn">访问主页</a>
  </div>

  <div class="custom-card">
    <div class="custom-icon-circle">
      <i class="fa-solid fa-envelope"></i>
    </div>
    <h3 class="custom-card-title">官方邮箱</h3>
    <p class="custom-card-desc">有任何合作意向、反馈或咨询，请通过以下邮箱联系我们</p>
    <div class="custom-action-group">
      <div class="custom-email-box">xinglaifuyu@outlook.com</div>
      <a href="mailto:xinglaifuyu@outlook.com" class="custom-btn">发送邮件</a>
    </div>
  </div>

</div>