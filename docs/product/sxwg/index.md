---
layout: page
---
<!-- Banner -->
<div style="max-width: 1200px; margin: 2rem auto; border-radius: 16px; overflow: hidden; background: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.08); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <div style="position: relative; width: 100%; height: 320px; overflow: hidden;">
    <!-- 背景图片（模糊效果） -->
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; filter: blur(3px) brightness(0.9); overflow: hidden;">
      <img src="../../img/sxwg_bg.jpg" alt="卡片背景" style="width: 100%; height: 100%; object-fit: cover; object-position: center;">
    </div>
    <!-- 背景遮罩层 -->
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.25); z-index: 1;"></div>
    <!-- 内容区域（Logo+标题+副标题） -->
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; text-align: center; z-index: 2; color: #ffffff; padding: 1.5rem; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <img src="../../img/sxwg_logo.webp" alt="霜星挽歌" style="max-width: 60%; max-height: 120px; object-fit: contain; margin: 0 auto 1rem;">
      <h2 style="font-size: 2rem; line-height: 1.2; font-weight: 700; letter-spacing: 0.03em; margin: 0; text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);">霜星挽歌</h2>
      <p style="font-size: 1.1rem; line-height: 1.5; opacity: 0.85; letter-spacing: 0.05em; margin: 0.5rem 0 0; font-weight: 500;">A Frosty Star Elegy</p>
    </div>
  </div>
</div>
<!-- Banner -->



<!-- 游戏描述 -->
<style>
.context-card {
  max-width: 1000px;
  margin: 40px auto;
  padding: 60px 80px;
  position: relative;
  text-align: center;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}
.context-card::before {
  content: "『";
  position: absolute;
  left: 0;
  top: 20px;
  font-size: 40px;
  color: #333;
  line-height: 1;
}
.context-card::after {
  content: "』";
  position: absolute;
  right: 0;
  bottom: 20px;
  font-size: 40px;
  color: #333;
  line-height: 1;
}
.context-content {
  font-size: 42px;
  line-height: 1.6;
  color: #333;
  font-weight: 500;
  margin-bottom: 30px;
}
.context-source {
  font-size: 20px;
  color: #666;
}
@media (max-width: 768px) {
  .context-card {
    padding: 50px 40px;
    margin: 20px auto;
  }
  .context-content {
    font-size: 26px;
  }
  .context-card::before,
  .context-card::after {
    font-size: 30px;
  }
  .context-source {
    font-size: 16px;
  }
}
</style>

<div class="context-card">
  <div class="context-content">用游戏描述正在编写。。。</div>
  <!-- <div class="context-source">二级文本</div> -->
</div>
<!-- 游戏描述 -->

<br>

<!-- 角色卡片 -->
<div style="position: relative; width: 100%; text-align: center; margin: 2rem 0; font-family: -apple-system, BlinkMacSystemFont, 'Microsoft Yahei', sans-serif;">
  <h1 style="
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
    background: linear-gradient(90deg, #00c3ffcc, #0089f2cc);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent !important;
    position: relative;
    display: inline-block;
  ">
    角色介绍
    <span style="
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #00c3ffcc, #0089f2cc);
      border-radius: 1.5px;
    "></span>
  </h1>
</div>

<style>
/* 响应式角色卡片 - 缩小全文字号 + 永久不遮挡 */
.vp-character-wrapper {
  font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin: 30px 0;
  padding: 0 15px;
}
.vp-character-card {
  width: 100%;
  max-width: 480px;
  background: #ffffff !important;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}
.vp-character-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}
.vp-character-img {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.vp-character-img img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}
/* 文字区域：超大内边距 + 自动高度 */
.vp-character-info {
  padding: 30px 25px 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
/*  核心：全局缩小字号 */
.vp-character-info h3 {
  background: linear-gradient(135deg, #00c3ffcc, #0089f2cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.4rem; /* 缩小标题 */
  margin: 0;
}
.vp-character-info h4 {
  color: #555;
  font-size: 0.95rem; /* 缩小标签 */
  margin: 0;
}
.vp-character-info p {
  color: #333;
  line-height: 1.6;
  font-size: 0.9rem; /* 缩小描述 */
  margin: 0;
}
/* 移动端适配 */
@media (max-width: 768px) {
  .vp-character-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .vp-character-img {
    height: 330px;
  }
}
</style>
<div class="vp-character-wrapper">

  <div class="vp-character-card">
    <div class="vp-character-img">
      <img src="../../img/sxwg_logo.webp" alt="星霁">
    </div>
    <div class="vp-character-info">
      <h3>星霁</h3>
      <h4>标签正在编写中……</h4>
      <p>描述正在编写中……</p>
    </div>
  </div>

  <div class="vp-character-card">
    <div class="vp-character-img">
      <img src="../../img/sxwg_logo.webp" alt="星霰">
    </div>
    <div class="vp-character-info">
      <h3>星霰</h3>
      <h4>标签正在编写中……</h4>
      <p>描述正在编写中……</p>
    </div>
  </div>
</div>
<!-- 角色卡片 -->

<br>

<!-- 下载卡片 -->
<div style="position: relative; width: 100%; text-align: center; margin: 2rem 0; font-family: -apple-system, BlinkMacSystemFont, 'Microsoft Yahei', sans-serif;">
  <h1 style="
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
    background: linear-gradient(90deg, #00c3ffcc, #0089f2cc);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent !important;
    position: relative;
    display: inline-block;
  ">
    下载游戏
    <span style="
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #00c3ffcc, #0089f2cc);
      border-radius: 1.5px;
    "></span>
  </h1>
</div>

<style scoped>
/* 霜星挽歌下载卡片 - 彻底移除外层白色圆角背景框 */
.game-download-card {
    background: transparent !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    padding: 2rem 2rem; /* 减小顶部间距（已删除标题） */
    max-width: 1000px;
    margin: 3rem auto;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.download-content {
    margin-top: 0;
}

.platform-desc {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #212121;
    margin: 0 0 1.2rem;
}

/* 标签：纯文字，无背景框 */
.platform-tag {
    font-weight: 600;
    padding: 0 !important;
    margin: 0 0.2rem;
    font-size: 1.1rem;
    background: transparent !important;
    border: none !important;
    color: #0089f2cc;
}

.download-tip {
    font-size: 0.95rem;
    color: #757575;
    margin: 0 0 2rem;
    line-height: 1.6;
}

.platform-buttons {
    display: flex;
    gap: 3.5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
}

.platform-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.5rem 2rem;
    border-radius: 16px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    /* ✅ 修复闪烁核心：默认添加透明边框，保持边框宽度不变 */
    border: 2px solid transparent;
    background: #f8f9fa;
    width: 190px;
    height: 210px;
}

/* ✅ 悬停仅修改边框+阴影颜色，无闪烁 */
.platform-btn:hover {
    transform: translateY(-3px);
    border: 2px solid #66dbff;
    box-shadow: 0 4px 20px rgba(102, 219, 255, 0.3);
    background: #ffffff;
}

.platform-btn span {
    color: #212121;
    font-size: 1rem;
    transition: color 0.3s ease;
}

.platform-btn:hover span {
    color: #0089f2;
}

/* 图标：大尺寸不裁剪 */
.platform-icon {
    width: 110px;
    height: 110px;
    object-fit: contain;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .game-download-card {
        margin: 2rem 1rem;
        padding: 1.5rem 1rem;
        max-width: 100%;
    }
    .platform-buttons {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
}
</style>

<div class="game-download-card">
    <!-- ✅ 已彻底删除：下载游戏标题 + 渐变线段 -->
    <div class="download-content">
        <p class="platform-desc">
            PC端现已登陆<span class="platform-tag steam-tag">Steam</span><br/>
            移动端现已登陆<span class="platform-tag taptap-tag">TapTap</span>
        </p>
        <p class="download-tip">点击下方图标立即下载，体验那个冰雪世界中的动人故事</p>
        <div class="platform-buttons">
            <a href="https://store.steampowered.com/" target="_blank" class="platform-btn steam-btn">
                <img src="../../icon/Steam_logo.webp" class="platform-icon" alt="Steam图标">
                <span>Steam 下载</span>
            </a>
            <a href="https://www.taptap.cn/" target="_blank" class="platform-btn taptap-btn">
                <img src="../../icon/Taptap_logo.webp" class="platform-icon" alt="TapTap图标">
                <span>TapTap 下载</span>
            </a>
        </div>
    </div>
</div>
<!-- 下载卡片 -->

<br>
<br>
<br>

<!-- 制作人员 -->
<style>
/* 制作人员栏目 - 无卡片一体化简约排版 */
.credits-section .credits-title {
  text-align: center;
  color: #64c6ff;
  font-size: 26px;
  font-weight: 600;
  margin: 52px 0 40px;
  padding-bottom: 10px;
  border-bottom: 2px solid #64c6ff;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}

/* 核心容器：两侧15%留白，整体一体化布局 */
.credits-section .credits-container {
  padding: 0 15%;
  max-width: 100%;
  margin: 0 auto 64px;
}

/* 分组模块：无卡片，简约分隔，干净整洁 */
.credits-section .credit-group {
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(64, 184, 255, 0.15);
}
.credits-section .credit-group:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

/* 分组标题：简约精致 */
.credits-section .credit-group h3 {
  color: #64c6ff;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px;
  padding-left: 14px;
  border-left: 4px solid #64c6ff;
}

/* 列表样式：极简排版 */
.credits-section .credit-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 2;
}

.credits-section .credit-group li {
  color: #333;
  font-size: 15px;
}

.credits-section .credit-group li .role {
  color: #666;
  font-size: 13px;
  margin-left: 8px;
}

/* 配音演员行内适配 */
.credits-section .credit-group li .role.inline {
  margin-left: 6px;
}
</style>

<div class="credits-section">
  <h2 class="credits-title">制作人员</h2>

  <div class="credits-container">
    <!-- 项目总负责 -->
    <div class="credit-group">
      <h3>项目总负责</h3>
      <ul>
        <li>XXX <span class="role">制作人 / 总策划</span></li>
      </ul>
    </div>
    <!-- 策划团队 -->
    <div class="credit-group">
      <h3>策划团队</h3>
      <ul>
        <li>XXX <span class="role">系统策划</span></li>
        <li>XXX <span class="role">剧情策划</span></li>
        <li>XXX <span class="role">关卡策划</span></li>
      </ul>
    </div>
    <!-- 美术设计 -->
    <div class="credit-group">
      <h3>美术设计</h3>
      <ul>
        <li>XXX <span class="role">角色原画 / UI设计</span></li>
        <li>XXX <span class="role">场景原画 / 概念设计</span></li>
        <li>XXX <span class="role">立绘 / 插画</span></li>
      </ul>
    </div>
    <!-- 程序开发 -->
    <div class="credit-group">
      <h3>程序开发</h3>
      <ul>
        <li>XXX <span class="role">客户端主程</span></li>
        <li>XXX <span class="role">服务器主程</span></li>
        <li>XXX <span class="role">工具开发 / 运维</span></li>
      </ul>
    </div>
    <!-- 音乐音效 -->
    <div class="credit-group">
      <h3>音乐音效</h3>
      <ul>
        <li>XXX <span class="role">原创音乐 / 配乐</span></li>
        <li>XXX <span class="role">音效设计 / 混音</span></li>
      </ul>
    </div>
    <!-- 配音演员 -->
    <div class="credit-group">
      <h3>配音演员</h3>
      <ul>
        <li>XXX：<span class="role inline">XXX</span></li>
        <li>XXX：<span class="role inline">XXX</span></li>
        <li>其他角色：<span class="role inline">XXX</span></li>
      </ul>
    </div>
    <!-- 特别鸣谢 -->
    <div class="credit-group">
      <h3>特别鸣谢</h3>
      <ul>
        <li>所有参与测试的玩家</li>
        <li>Steam / TapTap 平台</li>
        <li>每一位支持《霜星挽歌》的朋友</li>
      </ul>
    </div>
  </div>
</div>
<!-- 制作人员 -->