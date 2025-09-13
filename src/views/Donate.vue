<template>
  <div class="donate-container">
    <!-- 顶部导航栏 -->
    <HeaderNav />
    
    <!-- 页面标题 -->
    <section class="page-title-section gradient-flow">
      <div class="container">
        <h1 class="text-gradient">支持我的创作</h1>
        <p>您的捐赠将帮助我继续创作优质内容</p>
      </div>
    </section>

    <!-- 捐赠说明 -->
    <section class="donate-info-section">
      <div class="container">
        <div class="donate-info-content">
          <div class="donate-description">
            <h2>为什么需要您的支持？</h2>
            <p>
              感谢您访问我的网站！我致力于创作优质的内容和工具，帮助更多人学习和成长。
              您的每一份捐赠都将用于：
            </p>
            <ul>
              <li>继续开发和维护免费的学习资源</li>
              <li>创建更多高质量的教程和案例</li>
              <li>改进网站功能和用户体验</li>
              <li>支持持续学习和技能提升</li>
            </ul>
            <p class="thank-you">再次感谢您的支持！您的每一份鼓励都是我前进的动力。</p>
          </div>
          
          <div class="donate-image">
            <img src="../assets/images/donate.jpg" alt="支持创作" />
          </div>
        </div>
      </div>
    </section>

    <!-- 捐赠方式 -->
    <section class="donate-methods-section">
      <div class="container">
        <h2>捐赠方式</h2>
        
        <div class="donate-methods-grid">
          <!-- 微信支付 -->
          <div class="donate-method-item">
            <div class="donate-method-header">
              <i class="el-icon-mobile-phone"></i>
              <h3>微信支付</h3>
            </div>
            <div class="donate-method-content">
              <div class="qr-code">
                <img src="../assets/images/wechat-qr.jpg" alt="微信支付二维码" />
              </div>
              <p>扫描上方二维码进行微信支付</p>
            </div>
          </div>
          
          <!-- 支付宝 -->
          <div class="donate-method-item">
            <div class="donate-method-header">
              <i class="el-icon-credit-card"></i>
              <h3>支付宝</h3>
            </div>
            <div class="donate-method-content">
              <div class="qr-code">
                <img src="../assets/images/alipay-qr.jpg" alt="支付宝二维码" />
              </div>
              <p>扫描上方二维码进行支付宝支付</p>
            </div>
          </div>
          
          <!-- 其他方式 -->
          <div class="donate-method-item">
            <div class="donate-method-header">
              <i class="el-icon-more"></i>
              <h3>其他方式</h3>
            </div>
            <div class="donate-method-content">
              <p>如果您有其他捐赠方式的需求，请通过以下方式联系我：</p>
              <p class="contact-email">contact@zhishihunzi.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 捐赠金额选项 -->
    <section class="donation-amount-section">
      <div class="container">
        <h2>选择捐赠金额</h2>
        <div class="amount-options">
          <button class="amount-btn">¥10</button>
          <button class="amount-btn">¥20</button>
          <button class="amount-btn">¥50</button>
          <button class="amount-btn">¥100</button>
          <button class="amount-btn custom-amount">自定义</button>
        </div>
        <div class="custom-amount-input" v-if="showCustomAmount">
          <input type="number" placeholder="输入自定义金额" min="1" />
          <button class="confirm-btn">确认</button>
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
  name: 'Donate',
  components: {
    HeaderNav,
    Footer
  },
  data() {
    return {
      showCustomAmount: false
    };
  },
  methods: {
    toggleCustomAmount() {
      this.showCustomAmount = !this.showCustomAmount;
    }
  }
};
</script>

<style scoped>
.donate-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 捐赠说明部分 */
.donate-info-section {
  padding: 60px 0;
  background-color: #f9f9f9;
}

.donate-info-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
}

.donate-description {
  flex: 1;
  min-width: 300px;
}

.donate-description h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.donate-description p {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 15px;
}

.donate-description ul {
  margin: 20px 0;
  padding-left: 20px;
}

.donate-description li {
  margin-bottom: 10px;
  font-size: 16px;
  color: #666;
  list-style-type: disc;
}

.thank-you {
  font-weight: bold;
  color: #333;
  margin-top: 30px;
}

.donate-image {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
}

.donate-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 捐赠方式部分 */
.donate-methods-section {
  padding: 60px 0;
}

.donate-methods-section h2 {
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
}

.donate-methods-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.donate-method-item {
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  background: #fff;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.donate-method-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.donate-method-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.donate-method-header i {
  font-size: 24px;
  color: #1890ff;
}

.donate-method-header h3 {
  font-size: 20px;
  color: #333;
}

.qr-code {
  margin: 20px 0;
}

.qr-code img {
  width: 160px;
  height: 160px;
  border-radius: 4px;
}

.contact-email {
  font-weight: bold;
  color: #1890ff;
  margin-top: 10px;
}

/* 捐赠金额部分 */
.donation-amount-section {
  padding: 60px 0;
  background-color: #f9f9f9;
}

.donation-amount-section h2 {
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
}

.amount-options {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;
}

.amount-btn {
  padding: 12px 24px;
  font-size: 18px;
  border: 2px solid #1890ff;
  background: #fff;
  color: #1890ff;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.amount-btn:hover {
  background: #1890ff;
  color: #fff;
}

.custom-amount {
  border: 2px dashed #999;
  color: #666;
}

.custom-amount:hover {
  border-style: solid;
  background: #666;
}

.custom-amount-input {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.custom-amount-input input {
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #d9d9d9;
  border-radius: 4px;
  width: 200px;
}

.confirm-btn {
  padding: 10px 20px;
  background: #1890ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;
}

.confirm-btn:hover {
  background: #40a9ff;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .donate-info-content {
    flex-direction: column;
  }
  
  .amount-options {
    flex-direction: column;
    align-items: center;
  }
  
  .amount-btn {
    width: 200px;
  }
  
  .custom-amount-input {
    flex-direction: column;
    align-items: center;
  }
  
  .custom-amount-input input {
    width: 200px;
  }
}
</style>