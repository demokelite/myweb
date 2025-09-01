<template>
  <div class="random-video-container">
    <!-- 顶部导航栏 -->
    <HeaderNav />
    
    <!-- 页面标题 -->
    <section class="page-title-section">
      <div class="container">
        <h1>随机视频</h1>
        <p>探索精彩的随机视频内容</p>
      </div>
    </section>

    <!-- 视频播放区域 -->
    <section class="video-section">
      <div class="container">
        <div v-if="loading" class="loading-container">
          <el-loading v-loading="loading" element-loading-text="加载中..." element-loading-spinner="el-icon-loading">
            <div style="height: 400px;"></div>
          </el-loading>
        </div>
        
        <div v-else-if="videoUrl" class="video-container">
          <video 
            ref="videoPlayer" 
            :src="videoUrl" 
            controls 
            autoplay 
            class="video-player"
            @error="handleVideoError"
          >
            您的浏览器不支持HTML5视频播放
          </video>
          <div class="video-actions">
            <el-button type="primary" @click="loadRandomVideo">
              <i class="el-icon-refresh"></i> 换一个视频
            </el-button>
          </div>
        </div>
        
        <div v-else class="error-container">
          <div class="error-icon">
            <i class="el-icon-error"></i>
          </div>
          <h3>{{ errorMessage || '视频加载失败' }}</h3>
          <p v-if="errorMessage.includes('Network Error') || errorMessage.includes('CORS')" class="error-detail">
            可能是由于跨域限制导致无法加载视频。请检查网络连接或稍后再试。
          </p>
          <el-button type="primary" @click="loadRandomVideo">
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
import axios from 'axios';

export default {
  name: 'RandomVideo',
  components: {
    HeaderNav,
    Footer
  },
  data() {
    return {
      videoUrl: '',
      loading: false,
      error: false,
      errorMessage: ''
    };
  },
  mounted() {
    // 页面加载时获取随机视频
    this.loadRandomVideo();
  },
  methods: {
    async loadRandomVideo() {
      this.loading = true;
      this.error = false;
      this.errorMessage = '';
      
      try {
        // 请求随机视频API
        const response = await axios.get('https://v2.xxapi.cn/api/meinv', {
          timeout: 10000
        });
        console.log('API响应数据:', response.data.data);
        // 检查响应数据结构（根据实际返回格式调整）
        if (response.data && response.data.data) {
          // 直接使用返回的URL字符串
          this.videoUrl = response.data.data;
        } else {
          throw new Error('API返回数据格式不正确');
        }
      } catch (error) {
        console.error('加载视频失败:', error);
        this.error = true;
        // 设置错误消息
        if (error.response) {
          this.errorMessage = `请求失败: ${error.response.status} ${error.response.statusText}`;
        } else if (error.request) {
          this.errorMessage = '网络错误，请检查网络连接';
        } else {
          this.errorMessage = error.message;
        }
      } finally {
        this.loading = false;
      }
    },
    handleVideoError(event) {
      console.error('视频播放错误:', event);
      this.error = true;
      this.errorMessage = '视频播放失败，请尝试换一个视频';
    },
    goBack() {
      // 返回作品集页面
      this.$router.push('/portfolio');
    }
  }
};
</script>

<style scoped>
.random-video-container {
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 页面标题部分 */
.page-title-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  font-size: 36px;
  margin-bottom: 10px;
  font-weight: bold;
}

.page-title-section p {
  font-size: 16px;
  opacity: 0.9;
}

/* 视频播放区域 */
.video-section {
  flex: 1;
  padding: 40px 0;
  background-color: #f5f7fa;
}

.video-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.video-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.video-player {
  max-width: 100%;
  max-height: 600px;
  border-radius: 4px;
}

.video-actions {
  margin-top: 20px;
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
  
  .video-container {
    padding: 15px;
  }
  
  .video-player {
    max-height: 400px;
  }
}
</style>