<template>
  <div class="terms-of-service-page">
    <!-- 顶部导航栏 -->
    <HeaderNav />
    
    <!-- 页面内容 -->
    <div class="container">
      <div class="page-header">
        <h1>服务条款</h1>
        <div class="breadcrumb">
          <router-link to="/">首页</router-link> &gt; 服务条款
        </div>
      </div>
      
      <div class="terms-content">
        <div class="terms-section">
          <h2>1. 接受条款</h2>
          <p>使用我们的网站和服务，即表示您同意遵守本服务条款。如果您不同意本条款，请不要使用我们的网站和服务。</p>
        </div>
        
        <div class="terms-section">
          <h2>2. 服务描述</h2>
          <p>我们提供的服务包括但不限于网站设计、开发、维护以及相关的技术支持。我们有权随时修改、暂停或终止部分或全部服务。</p>
        </div>
        
        <div class="terms-section">
          <h2>3. 用户责任</h2>
          <p>作为用户，您同意：</p>
          <ul>
            <li>遵守所有适用的法律法规</li>
            <li>不干扰或破坏我们的服务</li>
            <li>不传播非法、骚扰、诽谤、侵犯隐私或其他不当内容</li>
            <li>保护您的账号安全</li>
          </ul>
        </div>
        
        <div class="terms-section">
          <h2>4. 知识产权</h2>
          <p>我们网站上的所有内容，包括但不限于文本、图像、音频、视频、软件、代码、设计和标志，均受知识产权法保护。未经我们的明确许可，您不得复制、修改、分发或展示这些内容。</p>
        </div>
        
        <div class="terms-section">
          <h2>5. 免责声明</h2>
          <p>我们的服务按"现状"和"可用"的基础提供，不提供任何明示或暗示的保证。在法律允许的最大范围内，我们不承担因使用或无法使用我们的服务而导致的任何直接、间接、偶然、特殊或后果性损害。</p>
        </div>
        
        <div class="terms-section">
          <h2>6. 责任限制</h2>
          <p>在任何情况下，我们对您的总责任不超过您为相关服务支付的金额，或者如果您未支付任何费用，则不超过人民币100元。</p>
        </div>
        
        <div class="terms-section">
          <h2>7. 条款修改</h2>
          <p>我们有权随时修改本服务条款。修改后的条款将在网站上公布，您继续使用我们的服务将视为接受修改后的条款。</p>
        </div>
        
        <div class="terms-section">
          <h2>8. 法律适用</h2>
          <p>本服务条款受中华人民共和国法律管辖，任何争议应提交至有管辖权的法院解决。</p>
        </div>
        
        <div class="terms-section">
          <h2>9. 联系我们</h2>
          <p>如果您对本服务条款有任何问题或建议，请联系我们：</p>
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
  name: 'TermsOfService',
  components: {
    HeaderNav,
    Footer
  },
  metaInfo: {
    title: '服务条款 - 知识混子'
  }
};
</script>

<style scoped>
.terms-of-service-page {
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

.terms-content {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.terms-section {
  margin-bottom: 30px;
}

.terms-section:last-child {
  margin-bottom: 0;
}

.terms-section h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #667eea;
}

.terms-section p {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 15px;
}

.terms-section ul {
  margin-left: 20px;
  margin-bottom: 15px;
}

.terms-section li {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .terms-of-service-page {
    padding: 40px 0;
  }
  
  .page-header h1 {
    font-size: 28px;
  }
  
  .terms-content {
    padding: 20px;
  }
  
  .terms-section h2 {
    font-size: 20px;
  }
}
</style>