<template>
  <div class="random-image-container">
    <!-- 顶部导航栏 -->
    <HeaderNav />
    
    <!-- 页面标题 -->
    <section class="page-title-section">
      <div class="container">
        <h1>美女图片</h1>
        <p>探索精美的美女图片内容</p>
      </div>
    </section>

    <!-- 图片展示区域 -->
    <section class="image-section">
      <div class="container">
        <div v-if="loading" class="loading-container">
          <el-loading v-loading="loading" element-loading-text="加载中..." element-loading-spinner="el-icon-loading">
            <div style="height: 500px;"></div>
          </el-loading>
        </div>
        
        <div v-else-if="imageUrl" class="image-container">
          <img 
            :src="imageUrl" 
            :alt="'随机图片4'" 
            class="random-image"
            @error="handleImageError"
          >
          <div class="image-actions">
            <el-button type="primary" @click="loadRandomImage">
              <i class="el-icon-refresh"></i> 换一张图片
            </el-button>
            <el-button @click="downloadImage">
              <i class="el-icon-download"></i> 下载图片
            </el-button>
          </div>
        </div>
        
        <div v-else class="error-container">
          <div class="error-icon">
            <i class="el-icon-error"></i>
          </div>
          <h3>{{ errorMessage || '图片加载失败' }}</h3>
          <p v-if="errorMessage.includes('Network Error') || errorMessage.includes('CORS')" class="error-detail">
            可能是由于跨域限制导致无法加载图片。请检查网络连接或稍后再试。
          </p>
          <el-button type="primary" @click="loadRandomImage">
            重试
          </el-button>
        </div>
      </div>
    </section>

    <!-- 返回按钮 -->
    <div class="back-button-container">
      <el-button type="default" @click="goBack" icon="el-icon-arrow-left">
        返回作品集
      </el-button>
    </div>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue';
import Footer from '@/components/Footer.vue';

const axios = require('axios');

export default {
  name: 'RandomImage4',
  components: {
    HeaderNav,
    Footer
  },
  data() {
    return {
      imageUrl: '',
      loading: false,
      error: false,
      errorMessage: ''
    };
  },
  mounted() {
    // 页面加载时获取随机图片
    this.loadRandomImage();
  },
  methods: {
    async loadRandomImage() {
      this.loading = true;
      this.error = false;
      this.errorMessage = '';
      
      try {
        // 使用axios请求随机图片API
        const response = await axios.get('https://v2.xxapi.cn/api/randomAcgPic?type=pc', {
          timeout: 10000
        });
        console.log(response.data);
        // 将blob转换为URL
        this.imageUrl = response.data.data;
      } catch (error) {
        console.error('加载图片失败:', error);
        this.error = true;
        this.errorMessage = error.message || '图片加载失败';
      } finally {
        this.loading = false;
      }
    },
    handleImageError(event) {
      console.error('图片加载错误:', event);
      this.error = true;
      this.errorMessage = '图片加载失败，请尝试换一张图片';
    },
    downloadImage() {
      if (!this.imageUrl) return;
      
      const link = document.createElement('a');
      link.href = this.imageUrl;
      link.download = `random-image4-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    goBack() {
      // 返回作品集页面
      this.$router.push('/portfolio');
    }
  }
};
</script>

<style scoped>
.random-image-container {
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 页面标题部分 */
.page-title-section {
  margin-top: 100px;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.page-title-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title-section h1 {
  font-size: 42px;
  margin-bottom: 15px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.page-title-section p {
  font-size: 18px;
  opacity: 1;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 图片展示区域 */
.image-section {
  flex: 1;
  padding: 40px 0;
  background-color: #f5f7fa;
}

.image-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}

.image-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 600px;
}

.random-image {
  max-width: 100%;
  max-height: 600px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.image-actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.error-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 40px 20px;
  text-align: center;
}

.error-icon {
  font-size: 48px;
  color: #f56c6c;
  margin-bottom: 20px;
}

.error-container h3 {
  color: #303133;
  margin-bottom: 10px;
}

.error-detail {
  color: #909399;
  margin-bottom: 20px;
  font-size: 14px;
}

/* 返回按钮 */
.back-button-container {
  text-align: center;
  padding: 20px 0;
  background-color: white;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title-section h1 {
    font-size: 28px;
  }
  
  .image-container {
    padding: 15px;
  }
  
  .random-image {
    max-height: 400px;
  }
  
  .image-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .image-actions .el-button {
    width: 100%;
    max-width: 200px;
  }
}
</style>