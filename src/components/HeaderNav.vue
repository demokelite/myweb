<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/" class="logo-link">
            <div class="logo-icon">Z</div>
            <span class="logo-text">知识混子</span>
          </router-link>
        </div>
        
        <!-- 导航菜单 - 桌面版 -->
        <nav class="nav-desktop">
          <ul class="nav-menu">
            <li class="nav-item">
              <router-link 
                to="/" 
                class="nav-link"
                :class="{ active: currentRoute === '/' }"
              >
                首页
              </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                to="/about" 
                class="nav-link"
                :class="{ active: currentRoute === '/about' }"
              >
                关于我
              </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                to="/portfolio" 
                class="nav-link"
                :class="{ active: currentRoute === '/portfolio' }"
              >
                作品集
              </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                to="/contact" 
                class="nav-link"
                :class="{ active: currentRoute === '/contact' }"
              >
                联系我
              </a>
            </li>
          </ul>
        </nav>
        
        <!-- 联系按钮 - 桌面版 -->
        <div class="contact-button-desktop">
          <a href="https://wx.mail.qq.com" class="button" target="_blank">
            <i class="el-icon-message"></i>
            <span>联系我</span>
          </a>
        </div>
        
        <!-- 移动端菜单按钮 -->
        <div class="mobile-menu-button" @click="toggleMobileMenu">
          <i class="el-icon-menu"></i>
        </div>
      </div>
    </div>
    
    <!-- 移动端菜单 -->
    <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
      <div class="mobile-menu-header">
        <div class="logo">
          <router-link to="/" class="logo-link">
            <div class="logo-icon">Z</div>
            <span class="logo-text">知识混子</span>
          </router-link>
        </div>
        <div class="mobile-menu-close" @click="toggleMobileMenu">
          <i class="el-icon-close"></i>
        </div>
      </div>
      <nav class="nav-mobile">
        <ul class="nav-menu">
          <li class="nav-item">
            <router-link 
              to="/" 
              class="nav-link"
              :class="{ active: currentRoute === '/' }"
              @click="toggleMobileMenu"
            >
              首页
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              to="/about" 
              class="nav-link"
              :class="{ active: currentRoute === '/about' }"
              @click="toggleMobileMenu"
            >
              关于我
            </router-link>
          </li>
          <li class="nav-item">
              <router-link 
                to="/portfolio" 
                class="nav-link"
                :class="{ active: currentRoute === '/portfolio' }"
                @click="toggleMobileMenu"
              >
                作品集
              </router-link>
            </li>
            <li class="nav-item">
              <a 
                href="https://example.com/contact" 
                class="nav-link"
                :class="{ active: currentRoute === '/contact' }"
                target="_blank"
              >
                联系我
              </a>
            </li>
        </ul>
        <div class="mobile-menu-footer">
          <a href="https://example.com/contact" class="button" target="_blank">
            <i class="el-icon-message"></i>
            <span>联系我</span>
          </a>
          <div class="social-links">
            <a href="#" class="social-link"><i class="el-icon-github"></i></a>
            <a href="#" class="social-link"><i class="el-icon-link"></i></a>
            <a href="#" class="social-link"><i class="el-icon-document"></i></a>
            <a href="#" class="social-link"><i class="el-icon-picture"></i></a>
          </div>
        </div>
      </nav>
    </div>
    
    <!-- 遮罩层 -->
    <div 
      class="overlay" 
      :class="{ open: mobileMenuOpen }"
      @click="toggleMobileMenu"
    ></div>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      mobileMenuOpen: false,
      currentRoute: ''
    };
  },
  watch: {
    '$route': {
      handler: 'updateCurrentRoute',
      immediate: true
    }
  },
  mounted() {
    // 添加页面滚动事件监听
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  },
  beforeDestroy() {
    // 移除事件监听
    window.removeEventListener('scroll', () => {});
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      
      // 控制body滚动
      if (this.mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    },
    updateCurrentRoute() {
      this.currentRoute = this.$route.path;
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 20px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.header.scrolled {
  padding: 10px 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.logo-link:hover .logo-icon {
  transform: scale(1.1);
}

.logo-link:hover .logo-text {
  color: #667eea;
}

/* 导航菜单 - 桌面版 */
.nav-desktop {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 10px;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 5px;
}

.nav-link:hover {
  color: #667eea;
  background: rgba(102, 126, 234, 0.05);
}

.nav-link.active {
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: #667eea;
  border-radius: 3px;
}

/* 联系按钮 - 桌面版 */
.contact-button-desktop {
  flex-shrink: 0;
}

.button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.button:hover {
  background: #5a67d8;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.button:active {
  transform: translateY(0);
}

/* 移动端菜单按钮 */
.mobile-menu-button {
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-menu-button:hover {
  color: #667eea;
}

/* 移动端菜单 */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background: white;
  z-index: 1001;
  transition: all 0.3s ease;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.mobile-menu.open {
  right: 0;
}

.mobile-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
}

.mobile-menu-close {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-menu-close:hover {
  color: #667eea;
}

.nav-mobile {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.nav-mobile .nav-menu {
  flex-direction: column;
  gap: 0;
  padding: 20px 0;
}

.nav-mobile .nav-item {
  width: 100%;
}

.nav-mobile .nav-link {
  padding: 15px 20px;
  border-radius: 0;
}

.nav-mobile .nav-link::after {
  display: none;
}

.mobile-menu-footer {
  padding: 20px;
  border-top: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-menu-footer .button {
  width: 100%;
  justify-content: center;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #f0f0f0;
  border-radius: 50%;
  color: #666;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #667eea;
  color: white;
  transform: translateY(-3px);
}

/* 遮罩层 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.overlay.open {
  opacity: 1;
  visibility: visible;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .nav-desktop,
  .contact-button-desktop {
    display: none;
  }
  
  .mobile-menu-button {
    display: flex;
  }
}

@media (max-width: 576px) {
  .logo-text {
    display: none;
  }
  
  .logo-icon {
    width: 50px;
    height: 50px;
  }
  
  .mobile-menu {
    width: 100%;
    max-width: none;
  }
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-content > * {
  animation: fadeIn 0.5s ease-out;
}
</style>
