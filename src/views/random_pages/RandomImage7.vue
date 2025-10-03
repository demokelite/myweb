<template>
  <div class="random-image-container">
    <!-- 顶部导航栏 -->
    <HeaderNav />
    
    <!-- 页面标题 -->
    <section class="page-title-section gradient-flow">
      <div class="container">
        <h1 class="text-gradient">实用工具</h1>
        <p>一些有趣的实用工具</p>
      </div>
    </section>

    

    <!-- 工具下载区域 -->
    <section class="tool-download-section">
      <div class="container">
        <h2 class="tool-title">网易云音乐排行榜歌曲下载工具</h2>
        <div class="tool-description">
          <p>一个简洁高效的网易云音乐排行榜歌曲下载工具，带图形化界面，让你轻松获取喜爱的音乐 🎶</p>
          <ul class="feature-list">
            <li>🖥️ 直观友好的图形化界面，操作简单易用</li>
            <li>📊 自动获取网易云音乐排行榜歌曲列表</li>
            <li>⏳ 实时显示下载进度，一目了然</li>
            <li>⏸️ 支持下载任务的暂停与继续</li>
            <li>🛑 可随时停止当前下载任务</li>
          </ul>
        </div>
        <div class="tool-actions">
          <el-button type="primary" size="large" @click="downloadTool">
            <i class="el-icon-download"></i> 下载工具压缩包
          </el-button>
          <el-button size="large" @click="downloadExe">
            <i class="el-icon-windows"></i> 下载可执行文件
          </el-button>
        </div>
      </div>
    </section>
    
    <!-- 壁纸爬取工具下载区域 -->
    <section class="tool-download-section">
      <div class="container">
        <h2 class="tool-title">壁纸爬取工具</h2>
        <div class="tool-description">
          <p>一个高效的壁纸爬取工具，帮你轻松获取高清精美壁纸，美化你的桌面环境 🖼️</p>
          <ul class="feature-list">
            <li>🖥️ 简洁直观的用户界面，操作简便</li>
            <li>🔍 支持多种壁纸分辨率和风格选择</li>
            <li>⚡ 高效下载，支持批量获取多张壁纸</li>
            <li>🗂️ 自动分类保存，方便管理</li>
            <li>🎨 支持自定义下载路径和命名规则</li>
          </ul>
        </div>
        <div class="tool-actions">
          <el-button type="primary" size="large" @click="downloadWallpaperTool">
            <i class="el-icon-download"></i> 下载工具压缩包
          </el-button>
          <el-button size="large" @click="downloadWallpaperExe">
            <i class="el-icon-windows"></i> 下载可执行文件
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
  name: 'RandomImage7',
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
        const response = await axios.get('https://v2.xxapi.cn/api/heisi', {
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
      link.download = `random-image7-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    // 下载工具压缩包
    downloadTool() {
      const link = document.createElement('a');
      link.href = '/resource/NetEase Cloud Music Chart Song Download Tool/NetEase Cloud Music Chart Song Download Tool.zip';
      link.download = '网易云音乐排行榜歌曲下载工具.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    // 下载可执行文件
    downloadExe() {
      const link = document.createElement('a');
      link.href = '/resource/NetEase Cloud Music Chart Song Download Tool/MusicDownloader.exe';
      link.download = 'MusicDownloader.exe';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    // 下载壁纸爬取工具压缩包
    downloadWallpaperTool() {
      const link = document.createElement('a');
      link.href = '/resource/Wallpaper Scraping Tool/Wallpaper Scraping Tool.zip';
      link.download = '壁纸爬取工具.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    // 下载壁纸爬取工具可执行文件
    downloadWallpaperExe() {
      const link = document.createElement('a');
      link.href = '/resource/Wallpaper Scraping Tool/壁纸爬取工具.exe';
      link.download = '壁纸爬取工具.exe';
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
  /* 确保动画效果能应用到所有子元素 */
.page-title-section.gradient-flow {
  position: relative;
  overflow: hidden;
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
.random-image-container {
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 页面标题部分 */
.page-title-section {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.page-title-section .container {
  max-width: 1200px;
  margin-top: 200px;
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

/* 工具下载区域样式 */
.tool-download-section {
  background-color: white;
  padding: 60px 0;
  border-top: 1px solid #e5e5e5;
}

.tool-download-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.tool-title {
  font-size: 32px;
  color: #303133;
  margin-bottom: 20px;
  font-weight: bold;
}

.tool-description {
  max-width: 800px;
  margin: 0 auto 30px;
  color: #606266;
  font-size: 16px;
  line-height: 1.6;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  text-align: left;
}

.feature-list li {
  padding: 8px 0;
  display: flex;
  align-items: center;
  font-size: 15px;
}

.tool-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* 返回按钮 */
.back-button-container {
  text-align: center;
  padding: 20px 0;
  background-color: #f5f7fa;
  border-top: 1px solid #e5e5e5;
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
  
  .tool-title {
    font-size: 24px;
  }
  
  .tool-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .tool-actions .el-button {
    width: 100%;
    max-width: 300px;
  }
}
</style>