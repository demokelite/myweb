<template>
  <footer class="footer">
    <!-- 页脚内容 -->
    <div class="footer-content">
      <div class="container">
        <div class="footer-grid">
          <!-- 个人信息 -->
          <div class="footer-column">
            <div class="logo">
              <router-link to="/" class="logo-link">
                <div class="logo-icon">Z</div>
                <span class="logo-text">知识混子</span>
              </router-link>
            </div>
            <p class="footer-description">
              专注于Web开发和UI/UX设计，热衷于创造美观且功能强大的数字产品。
            </p>
            
          </div>
          
          <!-- 快速链接 -->
          <div class="footer-column">
            <h3 class="footer-title">快速链接</h3>
            <ul class="footer-links">
              <li><router-link to="/" class="footer-link">首页</router-link></li>
              <li><router-link to="/about" class="footer-link">关于我</router-link></li>
              <li><router-link to="/portfolio" class="footer-link">作品集</router-link></li>
              <li><router-link to="/donate" class="footer-link">支持我</router-link></li>
              <li><router-link to="/contact" class="footer-link">联系我</router-link></li>
              <li><router-link to="/update-log" class="footer-link">更新日志</router-link></li>
            </ul>
          </div>
          

          
      
          
        </div>
      </div>
    </div>
    
    <!-- 页脚底部 -->
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <div class="copyright">
            © 2025 知识混子. 保留所有权利.
          </div>
          <div class="footer-bottom-links">
            <a href="/privacy-policy" class="footer-bottom-link">隐私政策</a>
            <a href="/terms-of-service" class="footer-bottom-link">服务条款</a>
            <a href="/cookie-policy" class="footer-bottom-link">Cookie政策</a>
            <a href="/sitemap" class="footer-bottom-link">网站地图</a>
          </div>
        </div>
      </div>
    </div>
    

  </footer>
</template>

<script>
export default {
  name: 'Footer',

};
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  color: #f5f5f5;
  padding-top: 80px;
  padding-bottom: 20px;
  opacity: 1;
  transition: all 0.5s ease;
}

/* 页脚内容 */
.footer-content {
  margin-bottom: 40px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  justify-items: center;
  max-width: 900px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.footer-column {
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
  width: 100%;
  max-width: 300px;
}

.footer-column:nth-child(1) { animation-delay: 0.1s; }
.footer-column:nth-child(2) { animation-delay: 0.2s; }

/* Logo */
.logo {
  margin-bottom: 20px;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
}

.logo-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-right: 15px;
  transition: transform 0.3s ease;
}

.logo-link:hover .logo-icon {
  transform: scale(1.1) rotate(5deg);
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

/* 页脚描述 */
.footer-description {
  font-size: 16px;
  color: #999;
  line-height: 1.6;
  margin-bottom: 25px;
}



/* 页脚标题 */
.footer-title {
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 15px;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: #667eea;
  border-radius: 3px;
}

/* 页脚链接 */
.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.footer-links li {
  margin-bottom: 0;
}

.footer-link {
  color: #999;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 20px;
}

.footer-link:hover {
  color: #667eea;
  padding-left: 25px;
}

.footer-link::before {
  content: '→';
  position: absolute;
  left: 0;
  top: 0;
  color: #667eea;
  opacity: 0;
  transition: all 0.3s ease;
}

.footer-link:hover::before {
  opacity: 1;
  left: 5px;
}

/* 联系信息 */
.contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #999;
  line-height: 1.6;
}

.contact-item i {
  font-size: 18px;
  color: #667eea;
  flex-shrink: 0;
  margin-top: 3px;
}

/* 订阅表单 */
.subscribe-description {
  font-size: 16px;
  color: #999;
  line-height: 1.6;
  margin-bottom: 20px;
}

.subscribe-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.subscribe-input .el-input__inner {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  height: 45px;
  font-size: 16px;
}

.subscribe-input .el-input__inner::-webkit-input-placeholder {
  color: #999;
}

.subscribe-input .el-input__inner::-moz-placeholder {
  color: #999;
}

.subscribe-input .el-input__inner:-ms-input-placeholder {
  color: #999;
}

.subscribe-button {
  height: 45px;
  font-size: 16px;
  background: #667eea;
  border-color: #667eea;
  transition: all 0.3s ease;
}

.subscribe-button:hover {
  background: #5a67d8;
  border-color: #5a67d8;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

/* 支付方式 */
.payment-methods {
  background: rgba(255, 255, 255, 0.03);
  padding: 30px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.payment-text {
  font-size: 16px;
  color: #999;
  margin-bottom: 15px;
  text-align: center;
}

.payment-icons {
  display: flex;
  justify-content: center;
  gap: 25px;
  font-size: 32px;
  color: #667eea;
}

/* 页脚底部 */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

.footer-bottom-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

@media (max-width: 768px) {
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
}

.copyright {
  font-size: 14px;
  color: #999;
}

.footer-bottom-links {
  display: flex;
  gap: 20px;
}

.footer-bottom-link {
  font-size: 14px;
  color: #999;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-bottom-link:hover {
  color: #667eea;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .footer {
    padding-top: 60px;
  }
  
  .footer-grid {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding-top: 50px;
  }
  
  .footer-title {
    font-size: 18px;
  }
  
  .footer-bottom-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .footer {
    padding-top: 40px;
  }
  
  .logo-icon {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  
  .logo-text {
    font-size: 20px;
  }
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
</style>
