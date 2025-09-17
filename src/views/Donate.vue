<template>
  <div class="donate-container">
    <!-- 顶部导航栏 -->
    <HeaderNav />
    
    <!-- 页面标题 -->
    <section class="page-title-section gradient-flow">
      <div class="container">
        <div class="title-content">
          <div class="donation-icon">
            <i class="el-icon-heart"></i>
          </div>
          <h1 class="text-gradient">支持我的创作</h1>
          <p>您的捐赠将帮助我继续创作优质内容</p>
          <div class="progress-bar">
            <div class="progress" :style="{ width: progress + '%' }"></div>
            <span class="progress-text">已完成 {{ progress }}%</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 捐赠说明 -->
    <section class="donate-info-section">
      <div class="container">
        <div class="donate-info-content centered">
          <div class="donate-description text-center">
            <p class="lead-text">
              感谢您访问我的网站！我致力于创作优质的内容和工具，帮助更多人学习和成长。
              您的每一份捐赠都将用于：
            </p>
            <ul class="benefits-list centered">
              <li class="benefit-item">
                <span class="benefit-icon"><i class="el-icon-edit"></i></span>
                继续开发和维护免费的学习资源
              </li>
              <li class="benefit-item">
                <span class="benefit-icon"><i class="el-icon-video-camera"></i></span>
                创建更多高质量的教程和案例
              </li>
              <li class="benefit-item">
                <span class="benefit-icon"><i class="el-icon-s-tools"></i></span>
                改进网站功能和用户体验
              </li>
              <li class="benefit-item">
                <span class="benefit-icon"><i class="el-icon-education"></i></span>
                支持持续学习和技能提升
              </li>
            </ul>
            <p class="thank-you">再次感谢您的支持！您的每一份鼓励都是我前进的动力。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 捐赠方式 -->
    <section class="donate-methods-section">
      <div class="container">
        <h2 class="section-title text-center">选择您喜欢的捐赠方式</h2>
        <p class="section-subtitle text-center">所有捐赠将用于支持优质内容的持续创作</p>
        
        <div class="donate-methods-grid">
          <!-- 微信支付 -->
          <div class="donate-method-item card-hover">
            <div class="donate-method-header">
              <div class="payment-icon wechat-icon">
                <i class="el-icon-mobile-phone"></i>
              </div>
              <h3>微信支付</h3>
            </div>
            <div class="donate-method-content">
              <div class="qr-code">
                <div class="qr-code-frame" @click="showQrCode(require('../assets/images/wechat-qr.jpg'), '微信支付二维码')">
                  <img :src="require('../assets/images/wechat-qr.jpg')" alt="微信支付二维码" @error="handleImageError" />
                  <div class="qr-code-overlay">
                    <i class="el-icon-camera"></i>
                  </div>
                </div>
              </div>
              <p>扫描上方二维码进行微信支付</p>
              <p class="click-hint">点击二维码可放大查看</p>
            </div>
          </div>
          
          <!-- 支付宝 -->
          <div class="donate-method-item card-hover">
            <div class="donate-method-header">
              <div class="payment-icon alipay-icon">
                <i class="el-icon-credit-card"></i>
              </div>
              <h3>支付宝</h3>
            </div>
            <div class="donate-method-content">
              <div class="qr-code">
                <div class="qr-code-frame" @click="showQrCode(require('../assets/images/alipay-qr.jpg'), '支付宝二维码')">
                  <img :src="require('../assets/images/alipay-qr.jpg')" alt="支付宝二维码" @error="handleImageError" />
                  <div class="qr-code-overlay">
                    <i class="el-icon-camera"></i>
                  </div>
                </div>
              </div>
              <p>扫描上方二维码进行支付宝支付</p>
              <p class="click-hint">点击二维码可放大查看</p>
            </div>
          </div>
          
          <!-- 其他方式 -->
          <div class="donate-method-item card-hover">
            <div class="donate-method-header">
              <div class="payment-icon other-icon">
                <i class="el-icon-more"></i>
              </div>
              <h3>其他方式</h3>
            </div>
            <div class="donate-method-content">
              <p>如果您有其他捐赠方式的需求，请通过以下方式联系我：</p>
              <p class="contact-email">zhishihunziqqcom@qq.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 捐赠金额选项 -->
    <section class="donation-amount-section" v-if="false">
      <div class="container">
        <h2 class="section-title text-center">选择捐赠金额</h2>
        <p class="section-subtitle text-center">您可以选择预设金额或输入自定义金额</p>
        
        <div class="amount-options">
          <button class="amount-btn" :class="{ active: selectedAmount === 10 }" @click="selectAmount(10)">¥10</button>
          <button class="amount-btn" :class="{ active: selectedAmount === 20 }" @click="selectAmount(20)">¥20</button>
          <button class="amount-btn" :class="{ active: selectedAmount === 50 }" @click="selectAmount(50)">¥50</button>
          <button class="amount-btn" :class="{ active: selectedAmount === 100 }" @click="selectAmount(100)">¥100</button>
          <button class="amount-btn custom-amount" @click="toggleCustomAmount">自定义</button>
        </div>
        
        <div class="custom-amount-input" v-if="showCustomAmount">
          <div class="input-group">
            <span class="currency-symbol">¥</span>
            <input type="number" v-model="customAmount" placeholder="输入自定义金额" min="1" />
            <button class="confirm-btn" @click="confirmCustomAmount">确认</button>
          </div>
        </div>
        
        <div class="donation-summary" v-if="selectedAmount > 0">
          <p class="summary-text">您选择的捐赠金额：<span class="amount-highlight">¥{{ selectedAmount }}</span></p>
          <button class="donate-now-btn">立即捐赠</button>
        </div>
      </div>
    </section>
    
    <!-- 捐赠者名单 -->
    <section class="donors-section" v-if="false">
      <div class="container">
        <h2 class="section-title text-center">感谢以下支持者</h2>
        
        <div class="donors-grid">
          <div class="donor-item" v-for="donor in donors" :key="donor.id">
            <div class="donor-avatar">
              <span class="avatar-text">{{ donor.name.substring(0, 2) }}</span>
            </div>
            <div class="donor-info">
              <h4 class="donor-name">{{ donor.name }}</h4>
              <p class="donor-amount">¥{{ donor.amount }}</p>
              <p class="donor-message">{{ donor.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <Footer />
    
    <!-- 自定义二维码放大模态框 -->
    <div v-if="showQrCodeDialog" class="qr-modal-overlay" @click="closeQrModal">
      <div class="qr-modal-content" @click.stop>
        <div class="qr-modal-header">
          <h3>{{ qrCodeTitle }}</h3>
          <button class="qr-modal-close" @click="closeQrModal">&times;</button>
        </div>
        <div class="qr-modal-body">
          <img :src="qrCodeImage" alt="二维码" class="qr-modal-image" />
        </div>
        <div class="qr-modal-footer">
          <button class="qr-modal-btn" @click="closeQrModal">关闭</button>
        </div>
      </div>
    </div>
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
      showCustomAmount: false,
      selectedAmount: 0,
      customAmount: 0,
      progress: 65,
      donors: [
        { id: 1, name: '知识爱好者', amount: 100, message: '支持优质内容创作！' },
        { id: 2, name: '学习达人', amount: 50, message: '很棒的网站，继续加油！' },
        { id: 3, name: '开发者小王', amount: 20, message: '学到了很多，感谢分享！' },
        { id: 4, name: '技术粉丝', amount: 10, message: '期待更多精彩内容！' }
      ],
      showQrCodeDialog: false,
      qrCodeImage: '',
      qrCodeTitle: ''
    };
  },
  // 组件销毁时移除事件监听
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleEscKey);
  },
  methods: {
    toggleCustomAmount() {
      this.showCustomAmount = !this.showCustomAmount;
    },
    selectAmount(amount) {
      this.selectedAmount = amount;
      this.showCustomAmount = false;
    },
    confirmCustomAmount() {
      if (this.customAmount > 0) {
        this.selectedAmount = this.customAmount;
        this.showCustomAmount = false;
      }
    },
    showQrCode(image, title) {
      console.log('QR code click event triggered');
      this.qrCodeImage = image;
      this.qrCodeTitle = title;
      this.showQrCodeDialog = true;
      // 添加键盘事件监听
      document.addEventListener('keydown', this.handleEscKey);
    },
    closeQrModal() {
      this.showQrCodeDialog = false;
      // 移除键盘事件监听
      document.removeEventListener('keydown', this.handleEscKey);
    },
    handleEscKey(event) {
      // 按下ESC键关闭模态框
      if (event.key === 'Escape' && this.showQrCodeDialog) {
        this.closeQrModal();
      }
    },
    handleImageError(event) {
      // 图片加载失败时显示默认图片或占位符
      event.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160e0a7a575%20text%20%7B%20fill%3A%23CCCCCC%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160e0a7a575%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2264.65234375%22%20y%3D%22104.9609375%22%3E二维码加载失败%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    }
  }
};
</script>

<style scoped>
.donate-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
}

/* 确保动画效果能应用到所有子元素，并实现垂直居中 */
.page-title-section.gradient-flow {
  position: relative;
  overflow: hidden;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.page-title-section.gradient-flow h1.text-gradient {
  display: inline-block;
  /* 增加文本清晰度 */
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  opacity: 1;
  font-weight: bold;
}

.page-title-section.gradient-flow p {
  color: white;
  opacity: 1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.page-title-section.gradient-flow .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* 页面标题部分 */
.page-title-section {
  padding: 80px 0 60px;
  position: relative;
  overflow: hidden;
  color: white;
}

.page-title-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(24, 144, 255, 0.1) 0%, rgba(24, 144, 255, 0) 70%);
  z-index: -1;
}

.page-title-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.title-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.page-title-section h1 {
  font-size: 48px;
  margin-bottom: 10px;
  font-weight: bold;
}

.page-title-section p {
  font-size: 18px;
  opacity: 0.9;
}

.donation-icon {
  font-size: 48px;
  color: #ff4d4f;
  margin-bottom: 20px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.progress-bar {
  width: 100%;
  max-width: 400px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  margin: 30px auto 0;
  overflow: hidden;
  position: relative;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #1890ff 0%, #36cfc9 100%);
  border-radius: 4px;
  transition: width 1s ease;
}

.progress-text {
  position: absolute;
  top: 12px;
  right: 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
}

/* 捐赠说明部分 */
.donate-info-section {
  padding: 80px 0;
  background-color: #fff;
  position: relative;
}

.donate-info-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: linear-gradient(135deg, #f9f9f9 25%, transparent 25%) -10px 0, 
              linear-gradient(225deg, #f9f9f9 25%, transparent 25%) -10px 0, 
              linear-gradient(315deg, #f9f9f9 25%, transparent 25%), 
              linear-gradient(45deg, #f9f9f9 25%, transparent 25%);
  background-size: 20px 20px;
}

.donate-info-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 60px;
}

.donate-description {
  flex: 1;
  min-width: 300px;
}

.section-title {
  font-size: 32px;
  color: #333;
  margin-bottom: 24px;
  font-weight: bold;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #1890ff 0%, #36cfc9 100%);
  border-radius: 2px;
}

.section-title.text-center::after {
  left: 50%;
  transform: translateX(-50%);
}

.section-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
}

.lead-text {
  font-size: 18px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
}

.benefits-list {
  margin: 30px 0;
  padding: 0;
}

.benefit-item {
  list-style: none;
  margin-bottom: 20px;
  font-size: 16px;
  color: #666;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  transition: all 0.3s ease;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.benefit-item:hover {
  transform: translateX(5px);
  background-color: #f0f9ff;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.1);
}

.benefit-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #1890ff 0%, #36cfc9 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  margin-top: 2px;
}

.thank-you {
  font-weight: bold;
  color: #333;
  margin-top: 40px;
  font-size: 18px;
  background-color: #fffbe6;
  padding: 16px 24px;
  border-radius: 8px;
  border-left: 4px solid #faad14;
}

.image-frame {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;
}

.image-frame:hover {
  transform: translateY(-5px);
}

.featured-image {
  width: 100%;
  height: auto;
  display: block;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(24, 144, 255, 0.1) 0%, rgba(24, 144, 255, 0) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 24px;
}

.image-tag {
  background-color: #1890ff;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
}

.donate-image {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
}

.donate-image img {
  width: 100%;
  height: auto;
}

/* 捐赠方式部分 */
.donate-methods-section {
  padding: 80px 0;
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;
}

.donate-methods-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: -10%;
  width: 120%;
  height: 4px;
  background: linear-gradient(90deg, transparent 0%, #1890ff 50%, transparent 100%);
}

.donate-methods-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

.donate-method-item {
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card-hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.card-hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #1890ff 0%, #36cfc9 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.card-hover:hover::before {
  transform: scaleX(1);
}

.donate-method-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 25px;
}

.payment-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
}

.payment-icon::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
}

.wechat-icon {
  background: linear-gradient(135deg, #07c160 0%, #06ad56 100%);
  box-shadow: 0 6px 16px rgba(7, 193, 96, 0.3);
}

.alipay-icon {
  background: linear-gradient(135deg, #1677ff 0%, #0958d9 100%);
  box-shadow: 0 6px 16px rgba(22, 119, 255, 0.3);
}

.other-icon {
  background: linear-gradient(135deg, #faad14 0%, #d48806 100%);
  box-shadow: 0 6px 16px rgba(250, 173, 20, 0.3);
}

.donate-method-header h3 {
  font-size: 22px;
  color: #333;
  font-weight: bold;
  margin: 0;
}

.qr-code {
  margin: 25px 0;
  position: relative;
}

.qr-code-frame {
  position: relative;
  display: inline-block;
  border: 2px solid #f0f0f0;
  border-radius: 8px;
  padding: 10px;
  background: white;
  transition: all 0.3s ease;
}

.card-hover:hover .qr-code-frame {
  transform: scale(1.05);
  border-color: #1890ff;
}

.qr-code img {
  width: 180px;
  height: 180px;
  border-radius: 4px;
  display: block;
}

.qr-code-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #1890ff;
  opacity: 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.qr-code-frame:hover .qr-code-overlay {
  opacity: 1;
}

.contact-email {
  font-weight: bold;
  color: #1890ff;
  margin-top: 20px;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

/* 自定义二维码模态框样式 */
.qr-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.qr-modal-content {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 450px;
  overflow: hidden;
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.qr-modal-header {
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.qr-modal-header h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.qr-modal-close {
  background: none;
  border: none;
  font-size: 24px;
  color: #999;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.qr-modal-close:hover {
  background-color: #f5f5f5;
  color: #666;
}

.qr-modal-body {
  padding: 20px;
  text-align: center;
}

.qr-modal-image {
  max-width: 100%;
  height: auto;
  border: 1px solid #eee;
  border-radius: 8px;
}

.qr-modal-footer {
  padding: 16px 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
}

.qr-modal-btn {
  background-color: #1890ff;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.qr-modal-btn:hover {
  background-color: #40a9ff;
}

.click-hint {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
  font-style: italic;
}

.qr-code-large-container {
  text-align: center;
  padding: 20px;
}

.qr-code-large {
  width: 300px;
  height: 300px;
  border: 1px solid #eee;
  border-radius: 8px;
}

.donate-info-content.centered {
  justify-content: center;
}

.donate-description.text-center {
  text-align: center;
}

.benefits-list.centered {
  display: inline-block;
  text-align: left;
}

.contact-email:hover {
  color: #40a9ff;
  transform: scale(1.05);
}

/* 捐赠金额部分 */
.donation-amount-section {
  padding: 80px 0;
  background-color: #fff;
  position: relative;
}

.donation-amount-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: linear-gradient(135deg, #f9f9f9 25%, transparent 25%) -10px 0, 
              linear-gradient(225deg, #f9f9f9 25%, transparent 25%) -10px 0, 
              linear-gradient(315deg, #f9f9f9 25%, transparent 25%), 
              linear-gradient(45deg, #f9f9f9 25%, transparent 25%);
  background-size: 20px 20px;
}

.amount-options {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
}

.amount-btn {
  padding: 16px 32px;
  font-size: 20px;
  border: 3px solid #e6f7ff;
  background: #fff;
  color: #1890ff;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  z-index: 1;
  min-width: 120px;
}

.amount-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(24, 144, 255, 0.1) 100%);
  transition: all 0.3s ease;
  z-index: -1;
}

.amount-btn:hover::before {
  left: 100%;
}

.amount-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(24, 144, 255, 0.2);
  border-color: #91d5ff;
}

.amount-btn.active {
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  color: white;
  border-color: #1890ff;
  box-shadow: 0 6px 16px rgba(24, 144, 255, 0.3);
}

.amount-btn.active:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(24, 144, 255, 0.4);
}

.custom-amount {
  border: 3px dashed #d9d9d9;
  color: #666;
  background: #fafafa;
}

.custom-amount:hover {
  border-style: solid;
  border-color: #faad14;
  color: #faad14;
  background: #fff7e6;
  box-shadow: 0 6px 16px rgba(250, 173, 20, 0.2);
}

.input-group {
  display: flex;
  align-items: center;
  gap: 0;
  max-width: 300px;
  margin: 0 auto;
  background: white;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.currency-symbol {
  padding: 0 16px 0 24px;
  font-size: 20px;
  font-weight: bold;
  color: #666;
}

.custom-amount-input input {
  padding: 16px 12px;
  font-size: 20px;
  border: none;
  outline: none;
  flex: 1;
  color: #333;
  background: transparent;
}

.custom-amount-input input::placeholder {
  color: #bfbfbf;
}

.confirm-btn {
  padding: 16px 32px;
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  color: #fff;
  border: none;
  border-radius: 0 50px 50px 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  min-width: 100px;
}

.confirm-btn:hover {
  background: linear-gradient(135deg, #40a9ff 0%, #69c0ff 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
}

.donation-summary {
  text-align: center;
  margin-top: 40px;
  padding: 24px;
  background: #f0f9ff;
  border-radius: 12px;
  border: 2px solid #bae7ff;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease;
}

.donation-summary:hover {
  box-shadow: 0 6px 16px rgba(24, 144, 255, 0.15);
  transform: translateY(-2px);
}

.summary-text {
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
}

.amount-highlight {
  font-size: 24px;
  font-weight: bold;
  color: #1890ff;
}

.donate-now-btn {
  padding: 16px 48px;
  background: linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.donate-now-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ff7875 0%, #ff4d4f 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.donate-now-btn:hover::before {
  opacity: 1;
}

.donate-now-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 77, 79, 0.4);
}

.donate-now-btn:active {
  transform: translateY(-1px);
}

/* 捐赠者名单部分 */
.donors-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #fff 0%, #f5f5f5 100%);
  position: relative;
}

.donors-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(90deg, #1890ff, #52c41a, #faad14, #ff4d4f, #722ed1);
}

.section-title {
  font-size: 36px;
  color: #333;
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #1890ff, #52c41a);
  border-radius: 2px;
}

.donors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.donor-item {
  display: flex;
  align-items: center;
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid #f0f0f0;
}

.donor-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #1890ff, #52c41a);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease;
}

.donor-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  border-color: #e6f7ff;
}

.donor-item:hover::before {
  transform: scaleY(1);
}

.donor-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  position: relative;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.2);
}

.donor-avatar::after {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.avatar-text {
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.donor-info {
  flex: 1;
}

.donor-name {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  position: relative;
}

.donor-amount {
  font-size: 18px;
  font-weight: bold;
  color: #1890ff;
  margin-bottom: 12px;
  display: inline-block;
  padding: 6px 16px;
  background: #e6f7ff;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
}

.donor-amount::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 100%);
  transition: all 0.5s ease;
}

.donor-item:hover .donor-amount::before {
  left: 100%;
}

.donor-message {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  padding: 12px 16px;
  background: #fafafa;
  border-radius: 8px;
  position: relative;
  font-style: italic;
  margin-top: 8px;
}

.donor-message::before {
  content: '"';
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 36px;
  color: rgba(24, 144, 255, 0.1);
  font-style: normal;
  line-height: 1;
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
  
  .donors-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .donor-item {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
  
  .donor-avatar {
    margin-right: 0;
    margin-bottom: 20px;
  }
  
  .donor-amount {
    margin-bottom: 16px;
  }
}
</style>