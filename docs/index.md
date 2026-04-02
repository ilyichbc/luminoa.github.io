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
    src: /img/logo.png
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
      <img src="./img/sxwg_logo.webp" alt="霜星挽歌" style="height: 160px; filter: drop-shadow(0 0 10px rgba(135, 206, 250, 0.5));" />
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

<!-- 双卡片容器：横向排列，响应式适配 -->
<div style="max-width: 1200px; margin: 2rem auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 1.5rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <!-- 左侧B站卡片（纯白背景+Font Awesome B站图标） -->
  <div style="background: #ffffff; border-radius: 16px; padding: 2.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.08); text-align: center; position: relative; overflow: hidden;">
    <!-- 移除渐变装饰背景，改为纯空白 -->
    <!-- B站图标（Font Awesome fab fa-bilibili） -->
    <div style="width: 80px; height: 80px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, #00c3ffcc, #0089f2cc); border-radius: 50%; display: flex; align-items: center; justify-content: center; position: relative; z-index: 1;">
      <i class="fab fa-bilibili" style="font-size: 48px; color: #ffffff;"></i>
    </div>
    <!-- 标题 -->
    <h3 style="margin: 0 0 1rem 0; font-size: 1.8rem; font-weight: 600; color: #0089f2cc; position: relative; z-index: 1;">官方B站</h3>
    <!-- 描述 -->
    <p style="margin: 0 0 2rem 0; font-size: 1rem; color: #666666; line-height: 1.6; position: relative; z-index: 1;">
      关注我们的B站官方账号，获取最新游戏资讯、开发日志和独家内容
    </p>
    <!-- 按钮（跳转指定B站地址） -->
    <a href="https://space.bilibili.com/18224825" target="_blank" style="padding: 0.8rem 2.5rem; background: linear-gradient(135deg, #00c3ffcc, #0089f2cc); border-radius: 12px; color: #ffffff; font-size: 1.1rem; font-weight: 500; text-decoration: none; display: inline-block; transition: all 0.3s ease; position: relative; z-index: 1;"
       onmouseover="this.style.opacity='0.9';"
       onmouseout="this.style.opacity='1';">
      访问主页
    </a>
  </div>

  <!-- 右侧邮箱卡片（纯白背景+Font Awesome 邮箱图标） -->
  <div style="background: #ffffff; border-radius: 16px; padding: 2.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.08); text-align: center; position: relative; overflow: hidden; display: flex; flex-direction: column; height: 100%;">
    <!-- 邮箱图标 -->
    <div style="width: 80px; height: 80px; margin: 0 auto 1.5rem; background: linear-gradient(135deg, #00c3ffcc, #0089f2cc); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; color: #ffffff; position: relative; z-index: 1;">
      <i class="fas fa-envelope" style="font-size: 48px; color: #ffffff;"></i>
    </div>
    <!-- 标题 -->
    <h3 style="margin: 0 0 1rem 0; font-size: 1.8rem; font-weight: 600; color: #0089f2cc; position: relative; z-index: 1;">官方邮箱</h3>
    <!-- 描述 -->
    <p style="margin: 0 0 auto 0; font-size: 1rem; color: #666666; line-height: 1.6; position: relative; z-index: 1;">
      有任何合作意向、反馈或咨询，请通过以下邮箱联系我们
    </p>
    <!-- 邮箱+按钮容器：水平并排，居中对齐 -->
    <div style="display: flex; align-items: center; justify-content: center; gap: 0.8rem; flex-wrap: wrap;">
      <!-- 邮箱地址展示 -->
      <div style="padding: 0.8rem 1.5rem; background: rgba(0, 137, 242, 0.08); border-radius: 8px; color: #0089f2cc; font-size: 1.1rem; font-weight: 500; position: relative; z-index: 1;">
        xinglaifuyu@outlook.com
      </div>
      <!-- 按钮 -->
      <a href="mailto:xinglaifuyu@outlook.com" style="padding: 0.8rem 2.5rem; background: linear-gradient(135deg, #00c3ffcc, #0089f2cc); border-radius: 12px; color: #ffffff; font-size: 1.1rem; font-weight: 500; text-decoration: none; transition: all 0.3s ease; position: relative; z-index: 1;"
         onmouseover="this.style.opacity='0.9';"
         onmouseout="this.style.opacity='1';">
        发送邮件
      </a>
    </div>
  </div>
</div>
