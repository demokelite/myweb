<template>
  <div class="privacy-policy-page">
    <!-- 顶部导航栏 -->
    <HeaderNav />
    
    <!-- 页面内容 -->
    <div class="container">
      <div class="page-header">
        <h1>隐私政策</h1>
        <div class="breadcrumb">
          <router-link to="/">首页</router-link> &gt; 隐私政策
        </div>
      </div>
      
      <div class="policy-content">
        <div class="policy-section">
          <h2>1. 政策概述</h2>
          <p>本隐私政策旨在向您说明我们如何收集、使用、存储和保护您的个人信息。请您仔细阅读本政策，了解我们的隐私保护实践。</p>
        </div>
        
        <div class="policy-section">
          <h2>2. 信息收集</h2>
          <p>我们可能会收集以下类型的信息：</p>
          <ul>
            <li>个人身份信息（如姓名、电子邮件地址、电话号码等）</li>
            <li>使用信息（如浏览历史、访问页面等）</li>
            <li>设备信息（如IP地址、浏览器类型、操作系统等）</li>
          </ul>
        </div>
        
        <div class="policy-section">
          <h2>3. 信息使用</h2>
          <p>我们使用收集的信息用于以下目的：</p>
          <ul>
            <li>提供、维护和改进我们的服务</li>
            <li>与您沟通和回应您的请求</li>
            <li>分析使用模式以优化用户体验</li>
            <li>确保服务的安全性</li>
          </ul>
        </div>
        
        <div class="policy-section">
          <h2>4. 信息共享</h2>
          <p>我们不会出售、交易或以其他方式转让您的个人信息给第三方，除非获得您的明确同意或法律要求。</p>
        </div>
        
        <div class="policy-section">
          <h2>5. 信息保护</h2>
          <p>我们采取各种安全措施保护您的个人信息，防止未经授权的访问、使用或披露。</p>
        </div>
        
        <div class="policy-section">
          <h2>6. Cookie使用</h2>
          <p>我们使用Cookie来改善您的浏览体验。您可以通过浏览器设置拒绝或管理Cookie。</p>
        </div>
        
        <div class="policy-section">
          <h2>7. 政策更新</h2>
          <p>我们可能会不时更新本隐私政策。更新后的政策将在网站上公布，建议您定期查看。</p>
        </div>
        
        <div class="policy-section">
          <h2>8. 联系我们</h2>
          <p>如果您对本隐私政策有任何问题或建议，请联系我们：</p>
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
  name: 'PrivacyPolicy',
  components: {
    HeaderNav,
    Footer
  },
  metaInfo: {
    title: '隐私政策 - 知识混子'
  }
};
</script>

<style scoped>
.privacy-policy-page {
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

.policy-content {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.policy-section {
  margin-bottom: 30px;
}

.policy-section:last-child {
  margin-bottom: 0;
}

.policy-section h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #667eea;
}

.policy-section p {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 15px;
}

.policy-section ul {
  margin-left: 20px;
  margin-bottom: 15px;
}

.policy-section li {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .privacy-policy-page {
    padding: 40px 0;
  }
  
  .page-header h1 {
    font-size: 28px;
  }
  
  .policy-content {
    padding: 20px;
  }
  
  .policy-section h2 {
    font-size: 20px;
  }
}
</style>