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

/* --- New Profile Card Styles (for _includes/new-profile-card.html) --- */
/* Mimics the provided image */
/* ==================================================================== */

.new-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Important for banner and rounded corners */
  max-width: 600px; /* Adjust max-width as needed */
  margin: 2rem auto; /* Center the card with margin */
  position: relative;
  font-family: $font-family-sans-serif; /* Inherit font */
}

.new-card-banner {
  height: 100px; /* Adjust height */
  background-image: linear-gradient(to bottom, #69a8a2, #3a7f7f); /* Gradient from image */
}

.new-card-main {
  display: flex;
  padding: 0 20px 20px 20px; /* Padding around main content, no top padding here */
  position: relative; /* Needed for avatar positioning context */
  margin-top: -50px; /* Pull main content up to overlap banner */
}

.new-card-avatar-wrapper {
  width: 100px; /* Avatar size */
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  overflow: hidden;
  flex-shrink: 0; /* Prevent avatar from shrinking */
  margin-right: 20px;
  z-index: 2; /* Ensure avatar is above banner */
  background-color: #f0f0f0; /* Fallback bg */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.new-card-avatar {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.new-card-info {
  flex-grow: 1;
  padding-top: 50px; /* Push info content down below the banner area */
  min-width: 0; /* Prevent flex item overflow */
}

.new-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align items to the top */
  margin-bottom: 15px;
}

.new-card-titles {
  flex-grow: 1;
  margin-right: 15px; /* Space between titles and button */
}

.new-card-name {
  font-size: 1.4em; /* Adjust size */
  font-weight: 600;
  color: #333;
  margin: 0 0 5px 0;
  line-height: 1.2;
}

.new-card-subtitle {
  font-size: 0.9em;
  color: #777;
  margin: 0;
  line-height: 1.2;
}

.new-card-follow-btn {
  display: inline-flex;
  align-items: center;
  background-color: #65a38f; /* Green from image */
  color: #ffffff;
  padding: 8px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9em;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0; /* Prevent button shrinking */
}

.new-card-follow-btn:hover {
  background-color: #528a78; /* Darker green */
}

.new-card-follow-btn svg {
  margin-right: 5px;
}

.new-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.new-card-tag {
  display: inline-flex;
  align-items: center;
  background-color: #e3f2ee; /* Light green from image */
  color: #3a7f7f; /* Dark green text */
  padding: 5px 10px;
  border-radius: 15px; /* Pill shape */
  font-size: 0.8em;
  font-weight: 500;
}

.new-card-tag svg {
  margin-right: 5px;
  width: 14px;
  height: 14px;
}

.new-card-divider {
  border: none;
  border-top: 1px solid #eee;
  margin: 0 20px; /* Margin matching padding */
}

.new-card-details {
  padding: 20px;
}

.new-card-section {
  margin-bottom: 20px;
}
.new-card-section:last-child {
  margin-bottom: 0;
}

.new-card-section-title {
  font-size: 1.1em;
  font-weight: 600;
  color: #3a7f7f; /* Green from image */
  margin: 0 0 15px 0;
  position: relative;
  padding-left: 12px; /* Space for the bar */
  line-height: 1; /* Align bar better */
}

.new-card-title-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0; /* Adjust if line height changes */
  width: 4px;
  background-color: #3a7f7f; /* Green from image */
  border-radius: 2px;
}

.new-card-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
  color: #555;
  font-size: 0.95em;
}

.new-card-list li {
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
}

.new-card-list-bullet {
  color: #3a7f7f; /* Green bullet */
  margin-right: 8px;
  font-weight: 600;
  line-height: 1.6; /* Match text line-height */
}

.new-card-contact p {
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
  color: #333;
  font-size: 0.95em;
}
.new-card-contact p:last-child {
  margin-bottom: 0;
}

.new-card-contact svg {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: #3a7f7f; /* Green icons */
  flex-shrink: 0;
}

.new-card-contact a {
  color: #007bff; /* Standard link blue, or match theme */
  text-decoration: none;
  word-break: break-all; /* Allow long URLs/emails to wrap */
}

.new-card-contact a:hover {
  text-decoration: underline;
}

/* Basic responsiveness */
@media screen and (max-width: 600px) {
  .new-card {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .new-card-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .new-card-follow-btn {
    margin-top: 10px;
  }
  .new-card-main {
    margin-top: -40px; /* Adjust overlap */
  }
  .new-card-avatar-wrapper {
    width: 80px;
    height: 80px;
  }
   .new-card-info {
    padding-top: 40px; /* Adjust info push down */
  }
}
@media screen and (max-width: 480px) {
   .new-card-main {
     flex-direction: column;
     align-items: center;
     text-align: center;
     margin-top: -40px;
   }
   .new-card-avatar-wrapper {
     margin-right: 0;
     margin-bottom: 15px; /* Space below avatar */
   }
   .new-card-info {
     padding-top: 0; /* No need to push down anymore */
     width: 100%;
   }
    .new-card-header {
     align-items: center; /* Center items when stacked */
     margin-bottom: 20px;
   }
   .new-card-titles {
     margin-right: 0;
     margin-bottom: 10px;
   }
   .new-card-tags {
     justify-content: center; /* Center tags */
   }
   .new-card-section-title {
     padding-left: 0; /* Remove padding for bar */
     text-align: left; /* Keep section title left aligned */
   }
   .new-card-title-bar {
     display: none; /* Hide bar on very small screens */
   }
   .new-card-contact p {
     flex-direction: column;
     align-items: flex-start;
     text-align: left;
   }
   .new-card-contact svg {
     margin-bottom: 5px;
   }
}


/* ==================================================================== */
/* --- End New Profile Card Styles --- */

/* --- 自定义样式结束 --- */
