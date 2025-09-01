<template>
  <div class="cookie-policy-page">
    <!-- 顶部导航栏 -->
    <HeaderNav />
    
    <!-- 页面内容 -->
    <div class="container">
      <div class="page-header">
        <h1>Cookie政策</h1>
        <div class="breadcrumb">
          <router-link to="/">首页</router-link> &gt; Cookie政策
        </div>
      </div>
      
      <div class="cookie-content">
        <div class="cookie-section">
          <h2>1. 什么是Cookie？</h2>
          <p>Cookie是一种小型文本文件，当您访问网站时，网站会存储在您的计算机或移动设备上。它们被广泛用于使网站正常运行，或更高效地运行，并提供信息给网站的所有者。</p>
        </div>
        
        <div class="cookie-section">
          <h2>2. 我们如何使用Cookie？</h2>
          <p>我们使用Cookie出于以下目的：</p>
          <ul>
            <li>确保网站正常运行</li>
            <li>分析网站使用情况，以改进我们的服务</li>
            <li>记住您的偏好设置</li>
            <li>提供个性化内容和广告</li>
          </ul>
        </div>
        
        <div class="cookie-section">
          <h2>3. Cookie类型</h2>
          <p>我们使用以下类型的Cookie：</p>
          <ul>
            <li><strong>必要Cookie</strong>：这些Cookie是网站正常运行所必需的，无法在我们的系统中关闭。通常只在您做出相当于服务请求的操作时设置，如设置隐私偏好、登录或填写表格。</li>
            <li><strong>性能Cookie</strong>：这些Cookie允许我们计算访问量和流量来源，以便衡量和改进网站的性能。它们帮助我们了解哪些页面最受欢迎和最不受欢迎，并了解访问者如何在网站上移动。</li>
            <li><strong>功能Cookie</strong>：这些Cookie使网站能够提供增强功能和个性化。它们可能由我们或我们放入页面的第三方提供商设置。</li>
            <li><strong>营销Cookie</strong>：这些Cookie可能由我们的广告合作伙伴通过我们的网站设置。它们可能被这些公司用来建立您的兴趣档案，并向您展示相关广告。</li>
          </ul>
        </div>
        
        <div class="cookie-section">
          <h2>4. 管理Cookie</h2>
          <p>您可以通过浏览器设置控制Cookie的使用。大多数网络浏览器默认接受Cookie，但您通常可以修改浏览器设置以拒绝Cookie。请注意，如果您选择拒绝Cookie，您可能无法使用我们网站的所有功能。</p>
          <p>以下是主流浏览器管理Cookie的方法：</p>
          <ul>
            <li><strong>Chrome</strong>：设置 &gt; 隐私和安全 &gt; Cookie和其他网站数据</li>
            <li><strong>Firefox</strong>：选项 &gt; 隐私与安全 &gt; Cookie和站点数据</li>
            <li><strong>Safari</strong>：偏好设置 &gt; 隐私 &gt; Cookie和网站数据</li>
            <li><strong>Edge</strong>：设置 &gt; 隐私、搜索和服务 &gt; Cookie和站点权限</li>
          </ul>
        </div>
        
        <div class="cookie-section">
          <h2>5. Cookie政策更新</h2>
          <p>我们可能会不时更新本Cookie政策。更新后的政策将在网站上公布，建议您定期查看。</p>
        </div>
        
        <div class="cookie-section">
          <h2>6. 联系我们</h2>
          <p>如果您对本Cookie政策有任何问题或建议，请联系我们：</p>
          <p>电子邮件：contact@zhishihunzi.com</p>
        </div>
      </div>
    </div>
    
    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'CookiePolicy',
  components: {
    HeaderNav,
    Footer
  },
  metaInfo: {
    title: 'Cookie政策 - 知识混子'
  }
};
</script>

<style scoped>
.cookie-policy-page {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-header {
  margin-bottom: 40px;
  text-align: center;
}

.page-header h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 15px;
}

.breadcrumb {
  font-size: 14px;
  color: #666;
}

.breadcrumb a {
  color: #667eea;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.cookie-content {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.cookie-section {
  margin-bottom: 30px;
}

.cookie-section:last-child {
  margin-bottom: 0;
}

.cookie-section h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #667eea;
}

.cookie-section p {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 15px;
}

.cookie-section ul {
  margin-left: 20px;
  margin-bottom: 15px;
}

.cookie-section li {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .cookie-policy-page {
    padding: 40px 0;
  }
  
  .page-header h1 {
    font-size: 28px;
  }
  
  .cookie-content {
    padding: 20px;
  }
  
  .cookie-section h2 {
    font-size: 20px;
  }
}
</style>