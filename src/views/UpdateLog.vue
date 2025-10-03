<template>
  <div class="update-log-container">
    <!-- 顶部导航栏 -->
    <HeaderNav />
    
    <!-- 页面标题 -->
    <section class="page-title-section gradient-flow">
      <div class="container">
        <h1 class="text-gradient">更新日志 📝</h1>
        <p>记录网站的每一次成长与变化 ✨</p>
      </div>
    </section>

    <!-- 更新日志内容区域 -->
    <section class="update-log-content">
      <div class="container">
        <!-- 最新更新 -->
        <div class="update-card latest-update">
          <div class="update-header">
            <h2 class="update-version">版本 1.3.0 🚀</h2>
            <span class="update-date">2024年9月20日 🔔</span>
          </div>
          <div class="update-body">
            <div class="update-section">
              <h3>✨ 新增功能</h3>
              <ul class="update-list">
                <li>✅ 添加了全新的博客功能，支持Markdown格式文章展示 📚</li>
                <li>✅ 实现了博客文章自动更新机制，方便内容管理 🤖</li>
                <li>✅ 新增网易云音乐排行榜歌曲下载工具页面 🎵</li>
                <li>✅ 增加了更新日志页面，记录网站成长历程 📝</li>
              </ul>
            </div>
            <div class="update-section">
              <h3>🎨 界面优化</h3>
              <ul class="update-list">
                <li>🎭 为各个页面添加了精美的动画效果和过渡效果 ✨</li>
                <li>🎪 优化了响应式设计，提升移动端用户体验 📱</li>
                <li>🌈 增加了渐变色和交互反馈，提升视觉效果 🎨</li>
              </ul>
            </div>
            <div class="update-section">
              <h3>⚡ 性能提升</h3>
              <ul class="update-list">
                <li>🚄 优化了图片加载逻辑，提升页面加载速度 ⚡</li>
                <li>🛠️ 修复了部分已知的bug和兼容性问题 🐛</li>
                <li>🔧 重构了部分代码，提高可维护性 🔨</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 历史更新 -->
        <div class="update-card">
          <div class="update-header">
            <h2 class="update-version">版本 1.2.0 🌟</h2>
            <span class="update-date">2024年8月15日 📅</span>
          </div>
          <div class="update-body">
            <div class="update-section">
              <h3>✨ 新增功能</h3>
              <ul class="update-list">
                <li>✅ 增加了随机图片展示功能，提供多个图片源 📷</li>
                <li>✅ 添加了随机视频页面，丰富网站内容 🎬</li>
                <li>✅ 实现了作品展示页面，展示个人项目 🏆</li>
              </ul>
            </div>
            <div class="update-section">
              <h3>🎨 界面优化</h3>
              <ul class="update-list">
                <li>🎭 更新了网站整体风格，提升视觉体验 🎨</li>
                <li>🎪 添加了页面滚动动画效果 ✨</li>
                <li>🌈 优化了导航栏和页脚的设计 🚀</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="update-card">
          <div class="update-header">
            <h2 class="update-version">版本 1.1.0 🎉</h2>
            <span class="update-date">2024年7月10日 🗓️</span>
          </div>
          <div class="update-body">
            <div class="update-section">
              <h3>✨ 新增功能</h3>
              <ul class="update-list">
                <li>✅ 添加了关于我页面，展示个人信息 👨‍💻</li>
                <li>✅ 增加了联系页面，方便访客沟通 📧</li>
                <li>✅ 实现了隐私政策、服务条款等法律页面 📄</li>
              </ul>
            </div>
            <div class="update-section">
              <h3>🎨 界面优化</h3>
              <ul class="update-list">
                <li>🎭 优化了首页布局，提升用户体验 🌟</li>
                <li>🎪 添加了网站图标和品牌元素 🎯</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="update-card">
          <div class="update-header">
            <h2 class="update-version">版本 1.0.0 🎊</h2>
            <span class="update-date">2024年6月1日 🎉</span>
          </div>
          <div class="update-body">
            <div class="update-section">
              <h3>🚀 网站上线</h3>
              <ul class="update-list">
                <li>✅ 网站正式上线！🎊</li>
                <li>✅ 实现了基本的首页功能 🏠</li>
                <li>✅ 添加了导航栏和页脚 🔧</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 回到顶部按钮 -->
        <div class="back-to-top" @click="scrollToTop" v-show="showBackToTop">
          <i class="el-icon-arrow-up"></i>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'UpdateLog',
  components: {
    HeaderNav,
    Footer
  },
  data() {
    return {
      showBackToTop: false
    };
  },
  mounted() {
    // 监听滚动事件，控制回到顶部按钮的显示
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // 移除滚动事件监听
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // 处理滚动事件
    handleScroll() {
      this.showBackToTop = window.scrollY > 300;
    },
    // 滚动到顶部
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
/* 确保动画效果能应用到所有子元素 */
.page-title-section.gradient-flow {
  position: relative;
  overflow: visible;
}

.page-title-section.gradient-flow h1.text-gradient {
  display: inline-block;
  /* 增加文本清晰度 */
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  opacity: 1;
  font-weight: bold;
  background: none;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: white;
}

.page-title-section.gradient-flow p {
  color: white;
  opacity: 1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background: none;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: white;
}

.update-log-container {
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f7fa;
}

/* 页面标题部分 */
.page-title-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-title-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.page-title-section h1 {
  font-size: 42px;
  margin-bottom: 15px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 1s ease-out;
}

.page-title-section p {
  font-size: 18px;
  opacity: 1;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 1s ease-out 0.2s both;
}

/* 背景装饰 */
.page-title-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%);
  z-index: 1;
}

/* 更新日志内容区域 */
.update-log-content {
  flex: 1;
  padding: 40px 0;
  position: relative;
}

.update-log-content .container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 更新卡片 */
.update-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 30px;
  margin-bottom: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.update-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.update-card.latest-update {
  border-left: 4px solid #667eea;
  position: relative;
}

.update-card.latest-update::after {
  content: '最新';
  position: absolute;
  top: 20px;
  right: -30px;
  background: #667eea;
  color: white;
  padding: 5px 40px;
  transform: rotate(45deg);
  font-size: 12px;
  font-weight: bold;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

/* 更新头部 */
.update-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
}

.update-version {
  font-size: 24px;
  font-weight: bold;
  color: #303133;
  margin: 0;
}

.update-date {
  font-size: 14px;
  color: #909399;
  background: #f5f7fa;
  padding: 5px 12px;
  border-radius: 20px;
}

/* 更新内容 */
.update-body {
  color: #606266;
}

.update-section {
  margin-bottom: 20px;
}

.update-section:last-child {
  margin-bottom: 0;
}

.update-section h3 {
  font-size: 18px;
  font-weight: bold;
  color: #303133;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.update-section h3::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #667eea;
  border-radius: 50%;
  margin-right: 8px;
}

/* 更新列表 */
.update-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.update-list li {
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
  line-height: 1.6;
  transition: all 0.2s ease;
}

.update-list li:hover {
  color: #667eea;
  padding-left: 25px;
}

.update-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 10px;
  height: 10px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23667eea"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>') no-repeat center;
  background-size: contain;
}

/* 回到顶部按钮 */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: #667eea;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
}

.back-to-top.v-show {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  background: #5a67d8;
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);
}

.back-to-top i {
  font-size: 20px;
}

/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title-section h1 {
    font-size: 28px;
  }
  
  .page-title-section p {
    font-size: 16px;
  }
  
  .update-card {
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .update-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .update-version {
    font-size: 20px;
  }
  
  .update-card.latest-update::after {
    right: -40px;
    padding: 3px 40px;
    font-size: 10px;
  }
  
  .back-to-top {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
  
  .back-to-top i {
    font-size: 16px;
  }
}
</style>