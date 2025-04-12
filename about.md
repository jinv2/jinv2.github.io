---
# Import theme styles
---
@import "{{ site.theme }}";

/* --- 自定义样式开始 --- */

/* -- Google Fonts -- */
$font-family-serif: 'Lora', Georgia, 'Times New Roman', Times, serif;
$font-family-sans-serif: 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

/* 整体页面背景和文字颜色 */
body {
  background-color: #dfe2f1; /* 后备色 */
  color: #333;
  font-family: $font-family-sans-serif;
  line-height: 1.6;
  background-image: url('{{ "/assets/images/iii.jpg" | relative_url }}'); /* body 背景 */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  position: relative;
  z-index: 1;
}
body::before {
    content: "";
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    backdrop-filter: blur(12px); /* body 背景模糊 */
    -webkit-backdrop-filter: blur(12px);
    background-color: rgba(223, 226, 241, 0.92); /* body 背景蒙版 */
    z-index: -1;
}

/* --- Header Styles --- */
.page-header {
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), /* Header 蒙版 */
              url('{{ "/assets/images/lll.jpg" | relative_url }}') no-repeat center top; /* Header 背景图 lll.jpg, 定位 top */
  background-size: cover; background-color: #1a237e; color: #ffffff;
  padding-left: 100px; /* 匹配 80px LOGO */
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 1rem;
  min-height: auto;
  border-bottom: 3px solid rgba(0, 121, 107, 0.7);
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 15px;
}
.header-logo {
  position: static;
  width: 80px; /* 确认 LOGO 尺寸 */
  height: auto;
  margin-right: 20px;
  mask-image: none;
  -webkit-mask-image: none;
}
.project-name {
  font-family: $font-family-serif;
  margin: 0;
  font-size: 1.9em;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  text-align: center;
}

/* --- 导航容器样式 --- */
.nav-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;   /* <--- 确认：强制不换行 */
  margin-top: 15px;
  width: 95%;
  max-width: 1100px;
  overflow-x: auto;   /* 允许水平滚动 */
  -webkit-overflow-scrolling: touch;
}
.nav-left, .nav-right {
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.nav-left { justify-content: center; margin-right: 6px; }
.nav-right { justify-content: center; margin-left: 6px; }

/* 导航按钮通用样式 */
.page-header nav .btn {
  font-family: $font-family-sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
  background-color: rgba(0, 0, 0, 0.4);
  background-size: cover;
  background-position: center center;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 0.8rem;
  margin: 0 1px; /* 确认：极小的按钮左右间距 */
  display: inline-block;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 4px;
  white-space: nowrap;
  min-width: auto;
  text-align: center;
}

/* --- 按钮背景图规则 (保持弱蒙版) --- */
/* !!! 最终确认文件名和顺序 !!! */
.nav-left a.btn:nth-of-type(1) { background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url('{{ "/assets/images/aaa.jpg" | relative_url }}'); }
.nav-left a.btn:nth-of-type(2) { background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url('{{ "/assets/images/bbb.png" | relative_url }}'); }
.nav-left a.btn:nth-of-type(3) { background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url('{{ "/assets/images/fff.jpg" | relative_url }}'); }
.nav-left a.btn:nth-of-type(4) { background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url('{{ "/assets/images/eee.jpg" | relative_url }}'); }
.nav-right a.btn:nth-of-type(1) { background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url('{{ "/assets/images/hhh.jpg" | relative_url }}'); }
.nav-right a.btn:nth-of-type(2) { background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url('{{ "/assets/images/ggg.jpg" | relative_url }}'); }
.nav-right a.btn:nth-of-type(3) { background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url('{{ "/assets/images/ccc.png" | relative_url }}'); }
.nav-right a.btn:nth-of-type(4) { background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url('{{ "/assets/images/iii.jpg" | relative_url }}'); }

/* 按钮悬停效果 */
.page-header nav .btn:hover {
  border-color: #ffffff;
  color: #ffffff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
  box-shadow: 0 0 8px rgba(255,255,255,0.2);
}
/* --- Navigation Separator Style --- */
.nav-separator {
  display: inline-block;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 5px; /* 确认：减小分隔符左右间距 */
  font-size: 1em;
  vertical-align: baseline;
}

/* --- Main Content Styles --- */
/* 这里省略了 .main-content 的具体样式，假设它们是默认主题提供的或你之前已有的 */
.main-content {
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.85); /* 内容区域背景 */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: 960px; /* 限制内容最大宽度 */
  margin: 2rem auto; /* 上下边距，左右自动居中 */
  position: relative;
  z-index: 2;
}
/* 可以根据需要添加或修改 .main-content 的其他样式 */


/* --- Footer Styles - 确认背景 --- */
.site-footer {
  margin-top: 4rem;
  padding: 2.5rem 1rem;
  color: rgba(255, 255, 255, 0.75);
  /* V V V 确认 Footer 背景设置 V V V */
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), /* 深色蒙版 */
              url('{{ "/assets/images/lll.jpg" | relative_url }}') no-repeat center center; /* 背景图 */
  background-size: cover; /* 覆盖 */
  background-color: #1a1d24; /* 后备色 */
  /* ^ ^ ^ 结束确认 ^ ^ ^ */
  text-align: center;
  font-family: $font-family-sans-serif;
  position: relative;
  z-index: 2;
}
.site-footer a {
  color: #ffffff; /* Footer 链接颜色 */
  text-decoration: none;
  transition: color 0.2s ease;
}
.site-footer a:hover {
  color: #00bcd4; /* Footer 链接悬停颜色 - 示例 */
  text-decoration: underline;
}

/* --- Responsive Styles --- */
@media screen and (max-width: 960px) {
    /* 中等屏幕恢复换行 */
    .nav-container { flex-wrap: wrap; justify-content: center; overflow-x: hidden; }
    .nav-left { margin-right: 0; margin-bottom: 8px; }
    .nav-right { margin-left: 0; }
    .page-header { padding-left: 1rem; } /* 调整 Header 内边距 */
    .main-content { max-width: 90%; } /* 调整内容宽度 */
}
@media screen and (max-width: 768px) {
    /* 小屏幕强制垂直 */
    .nav-container { flex-direction: column; }
    .nav-left, .nav-right { margin-bottom: 10px; }
    .header-main { flex-direction: column; text-align: center; } /* Logo和标题垂直排列 */
    .header-logo { margin-right: 0; margin-bottom: 10px; } /* Logo下方加间距 */
    .project-name { font-size: 1.6em; } /* 调整标题大小 */
    .page-header { padding-left: 1rem; padding-right: 1rem; }
    .main-content { padding: 1.5rem; } /* 调整内容内边距 */
}

/* --- Final Profile Card Styles (for _includes/final-profile-card.html) --- */
/* Mimics the provided image, using standard CSS */
/* ========================================================================= */

.final-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Needed for banner clipping */
  max-width: 600px; /* Or adjust */
  margin: 2rem auto;
  position: relative;
  font-family: $font-family-sans-serif; /* Use site font */
}

.final-card-banner {
  height: 100px; /* Height of the top green banner */
  background-image: linear-gradient(to bottom, #6ab3a8, #4a8c85); /* Approximate gradient from image */
  border-top-left-radius: 8px; /* Match card rounding */
  border-top-right-radius: 8px;
}

.final-card-content {
  padding: 0 24px 24px 24px; /* Padding for content below banner */
}

.final-card-header {
  display: flex;
  align-items: flex-start; /* Align items to the top */
  position: relative; /* Needed for avatar overlap */
  margin-top: -50px; /* Pulls the header up (half of avatar height approx) */
  margin-bottom: 20px;
}

.final-card-avatar-wrapper {
  width: 100px; /* Avatar diameter */
  height: 100px;
  border-radius: 50%; /* Make it round */
  border: 4px solid #ffffff; /* White border */
  overflow: hidden; /* Clip the image */
  flex-shrink: 0; /* Don't shrink avatar */
  margin-right: 20px;
  z-index: 2; /* Avatar above banner */
  background-color: #f0f0f0; /* Fallback bg color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.final-card-avatar {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the area, might crop rectangular logo */
}

.final-card-info-wrapper {
  flex-grow: 1;
  padding-top: 50px; /* Push content down to align below avatar baseline */
  min-width: 0; /* Prevent overflow */
}

.final-card-header-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align title and button */
  margin-bottom: 12px; /* Space before tags */
}

.final-card-titles {
  margin-right: 16px; /* Space between title and button */
}

.final-card-name {
  font-size: 1.3em; /* Adjust size */
  font-weight: 600;
  color: #333;
  margin-top: 0;
  margin-bottom: 4px;
  line-height: 1.3;
}

.final-card-subtitle {
  font-size: 0.9em;
  color: #666;
  margin: 0;
  line-height: 1.3;
}

.final-card-follow-btn {
  display: inline-flex;
  align-items: center;
  background-color: #65a38f; /* Button green */
  color: #ffffff;
  padding: 7px 14px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.85em;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}

.final-card-follow-btn:hover {
  background-color: #528a78; /* Darker green */
}

.final-card-follow-btn svg {
  width: 14px; /* Adjust icon size */
  height: 14px;
  margin-right: 6px;
}

.final-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* Space between tags */
}

.final-card-tag {
  display: inline-flex;
  align-items: center;
  background-color: #e0f2ef; /* Light green tag background */
  color: #3f837e; /* Darker green text */
  padding: 4px 10px;
  border-radius: 15px; /* Pill shape */
  font-size: 0.8em;
  font-weight: 500;
  line-height: 1.4;
}

.final-card-tag svg {
  width: 13px; /* Adjust icon size */
  height: 13px;
  margin-right: 5px;
}

.final-card-divider {
  border: none;
  border-top: 1px solid #eeeeee;
  margin-top: 20px;
  margin-bottom: 20px;
}

.final-card-details {
  /* padding is already applied to final-card-content */
}

.final-card-section {
  margin-bottom: 24px;
}
.final-card-section:last-child {
  margin-bottom: 0;
}

.final-card-section-title {
  font-size: 1.05em; /* Smaller section title */
  font-weight: 600;
  color: #4a8c85; /* Section title green */
  margin: 0 0 12px 0;
  position: relative;
  padding-left: 12px; /* Space for the bar */
  line-height: 1.3;
}

.final-card-title-bar {
  position: absolute;
  left: 0;
  top: 2px; /* Adjust vertical alignment */
  bottom: 2px;
  width: 4px;
  background-color: #4a8c85; /* Bar color */
  border-radius: 2px;
}

.final-card-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
  color: #555;
  font-size: 0.9em;
}

.final-card-list li {
  margin-bottom: 6px;
  display: flex;
  align-items: baseline; /* Align text baseline */
}
.final-card-list li:last-child {
  margin-bottom: 0;
}

.final-card-list-bullet {
  color: #4a8c85; /* Bullet color */
  margin-right: 8px;
  font-weight: 600;
  line-height: inherit; /* Inherit line height */
}

.final-card-contact {
  /* No specific styles needed for wrapper */
}

.final-card-contact p {
  display: flex;
  align-items: center;
  margin: 0 0 8px 0;
  color: #333;
  font-size: 0.9em;
  line-height: 1.5;
}
.final-card-contact p:last-child {
  margin-bottom: 0;
}

.final-card-contact svg {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: #4a8c85; /* Icon color */
  flex-shrink: 0;
}

.final-card-contact a {
  color: #0066cc; /* Link color */
  text-decoration: none;
  word-break: break-all;
}

.final-card-contact a:hover {
  text-decoration: underline;
}

/* Responsive adjustments */
@media screen and (max-width: 640px) {
  .final-card {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .final-card-header-top {
     flex-direction: column;
     align-items: flex-start;
  }
  .final-card-follow-btn {
      margin-top: 10px; /* Space when button wraps below title */
  }
}

@media screen and (max-width: 480px) {
  .final-card-header {
    flex-direction: column; /* Stack avatar and info */
    align-items: center; /* Center items when stacked */
    margin-top: -40px; /* Adjust overlap */
    text-align: center;
  }
  .final-card-avatar-wrapper {
    margin-right: 0;
    margin-bottom: 15px; /* Space below avatar */
    width: 80px; /* Smaller avatar */
    height: 80px;
  }
  .final-card-info-wrapper {
    padding-top: 0; /* Reset padding */
    width: 100%; /* Take full width */
  }
  .final-card-header-top {
    flex-direction: column;
    align-items: center; /* Center title and button */
  }
  .final-card-titles {
    margin-right: 0;
    margin-bottom: 10px;
  }
  .final-card-tags {
    justify-content: center; /* Center tags */
  }
  .final-card-section-title {
    padding-left: 0; /* Remove space for bar */
  }
  .final-card-title-bar {
    display: none; /* Hide bar */
  }
  .final-card-contact p {
    align-items: flex-start; /* Align icon and text top */
  }
  .final-card-contact a {
    /* Improve wrapping/readability */
  }
}

/* ========================================================================= */
/* --- End Final Profile Card Styles --- */


/* --- 自定义样式结束 --- */
