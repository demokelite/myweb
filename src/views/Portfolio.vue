<template>
  <div class="portfolio-container">
    <!-- 顶部导航栏 -->
    <HeaderNav />
    
    <!-- 页面标题 -->
    <section class="page-title-section">
      <div class="container">
        <h1>我的作品集</h1>
        <p>探索我的项目和创作</p>
      </div>
    </section>

    <!-- 作品筛选 -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-buttons">
          <el-button 
            type="primary" 
            :class="{ active: activeFilter === 'all' }"
            @click="filterWorks('all')"
            v-for="category in categories" 
            :key="category.id"
          >
            {{ category.name }}
          </el-button>
        </div>
      </div>
    </section>

    <!-- 作品网格 -->
    <section class="portfolio-grid-section">
      <div class="container">
        <div class="portfolio-grid">
          <div 
            class="portfolio-item" 
            v-for="work in filteredWorks" 
            :key="work.id"
            @click="openWorkDetail(work)"
          >
            <div class="portfolio-image-wrapper">
              <img :src="work.image" :alt="work.title" class="portfolio-image" />
              <div class="portfolio-overlay">
                <h3>{{ work.title }}</h3>
                <p>{{ work.description }}</p>
                <div class="portfolio-view-button">
                  查看详情
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 作品详情弹窗 -->
    

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Portfolio',
  components: {
    HeaderNav,
    Footer
  },
  data() {
    return {
      activeFilter: 'all',
      dialogVisible: false,
      selectedWork: null,
      categories: [
      ],
      works: [
        {
          id: 1,
          title: '随机视频',
          category: 'web',
          image: 'https://picsum.photos/id/64/800/600',
          description: '一个随机视频内容展示平台，提供高质量的随机视频浏览体验。用户可以随时刷新获取新的视频内容，支持下载功能。',
          techStack: 'Vue.js, Element UI, Video.js',
          date: '2023年3月',
          link: '#',
          features: [
            '随机视频展示',
            '一键刷新功能',
            '视频下载支持',
            '响应式设计',
            '友好的用户界面'
          ]
        },
        {
          id: 2,
          title: 'coser图片',
          category: 'web',
          image: 'https://picsum.photos/id/1/800/600',
          description: '展示精美的cosplay图片内容，用户可以随机浏览各种高质量的coser作品。',
          techStack: 'Vue.js, Element UI',
          date: '2023年1月',
          link: '#',
          features: [
            '随机cosplay图片展示',
            '图片刷新功能',
            '图片下载支持',
            '优雅的加载动画',
            '错误处理机制'
          ]
        },
        {
          id: 3,
          title: '白丝图片',
          category: 'web',
          image: 'https://picsum.photos/id/2/800/600',
          description: '专注于白丝主题的随机图片展示平台，提供精美的图片内容和流畅的用户体验。',
          techStack: 'Vue.js, Element UI',
          date: '2023年2月',
          link: '#',
          features: [
            '随机白丝图片展示',
            '一键刷新功能',
            '图片下载支持',
            '响应式设计',
            '错误处理'
          ]
        },
        {
          id: 4,
          title: '黑丝图片',
          category: 'web',
          image: 'https://picsum.photos/id/3/800/600',
          description: '提供高质量的黑丝主题随机图片内容，用户可以随时刷新获取新的图片。',
          techStack: 'Vue.js, Element UI',
          date: '2023年2月',
          link: '#',
          features: [
            '随机黑丝图片展示',
            '图片刷新功能',
            '图片下载支持',
            '加载状态提示',
            '错误重试机制'
          ]
        },
        {
          id: 5,
          title: '美女图片',
          category: 'web',
          image: 'https://picsum.photos/id/4/800/600',
          description: '精选的美女主题随机图片展示平台，提供优质的视觉体验。',
          techStack: 'Vue.js, Element UI',
          date: '2023年3月',
          link: '#',
          features: [
            '随机美女图片展示',
            '图片刷新功能',
            '图片下载支持',
            '优雅的加载状态',
            '错误处理'
          ]
        },
        {
          id: 6,
          title: '二次元图片',
          category: 'web',
          image: 'https://picsum.photos/id/5/800/600',
          description: '专注于二次元文化的随机图片展示平台，提供精美的动漫和插画作品。',
          techStack: 'Vue.js, Element UI',
          date: '2023年4月',
          link: '#',
          features: [
            '随机二次元图片展示',
            '一键刷新功能',
            '图片下载支持',
            '响应式设计',
            '错误重试机制'
          ]
        },
        {
          id: 7,
          title: 'jk图片',
          category: 'web',
          image: 'https://picsum.photos/id/6/800/600',
          description: '展示精美的JK主题随机图片内容，提供流畅的浏览体验。',
          techStack: 'Vue.js, Element UI',
          date: '2023年4月',
          link: '#',
          features: [
            '随机JK图片展示',
            '图片刷新功能',
            '图片下载支持',
            '加载状态提示',
            '错误处理'
          ]
        },
        {
          id: 8,
          title: '随机图片7',
          category: 'web',
          image: 'https://picsum.photos/id/7/800/600',
          description: '一个随机图片展示平台，提供多样化的图片内容和流畅的用户体验。',
          techStack: 'Vue.js, Element UI',
          date: '2023年5月',
          link: '#',
          features: [
            '随机图片展示',
            '一键刷新功能',
            '图片下载支持',
            '响应式设计',
            '错误重试机制'
          ]
        },
        {
          id: 9,
          title: '随机图片8',
          category: 'web',
          image: 'https://picsum.photos/id/8/800/600',
          description: '提供多样化的随机图片内容，用户可以随时刷新获取新的视觉体验。',
          techStack: 'Vue.js, Element UI',
          date: '2023年5月',
          link: '#',
          features: [
            '随机图片展示',
            '图片刷新功能',
            '图片下载支持',
            '加载状态提示',
            '错误处理'
          ]
        }
      ]
    };
  },
  computed: {
    filteredWorks() {
      if (this.activeFilter === 'all') {
        return this.works;
      }
      return this.works.filter(work => work.category === this.activeFilter);
    }
  },
  mounted() {
    // 添加页面进入动画
    const sections = document.querySelectorAll('.filter-section, .portfolio-grid-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
  },
  beforeDestroy() {
    // 确保离开页面时恢复背景滚动
    document.body.style.overflow = 'auto';
  },
  methods: {
    filterWorks(category) {
      this.activeFilter = category;
      // 添加滚动动画
      const portfolioSection = document.querySelector('.portfolio-grid-section');
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    },
    openWorkDetail(work) {
      if (work.link && work.link !== '#') {
        window.open(work.link, '_blank');
      } else {
        // 根据不同单元格ID跳转到不同页面
        switch (work.id) {
        case 1:
          // 第一个单元格跳转到随机视频页面
          this.$router.push('/random-video');
          break;
        case 2:
          // 第二个单元格跳转到随机图片页面
          this.$router.push('/random-image');
          break;
        case 3:
          // 第三个单元格跳转到随机图片页面2
          this.$router.push('/random-image2');
          break;
        case 4:
          // 第四个单元格跳转到随机图片页面3
          this.$router.push('/random-image3');
          break;
        case 5:
          // 第五个单元格跳转到随机图片页面4
          this.$router.push('/random-image4');
          break;
        case 6:
          // 第六个单元格跳转到随机图片页面5
          this.$router.push('/random-image5');
          break;
        case 7:
          // 第七个单元格跳转到随机图片页面6
          this.$router.push('/random-image6');
          break;
        case 8:
          // 第八个单元格跳转到随机图片页面7
          this.$router.push('/random-image7');
          break;
        case 9:
          // 第九个单元格跳转到随机图片页面8
          this.$router.push('/random-image8');
          break;
        default:
          // 其他单元格保留原有逻辑，跳转到作品详情页
          this.$router.push(`/portfolio/${work.id}`);
        }
      }
    },
    closeWorkDetail() {
      this.dialogVisible = false;
      // 恢复背景滚动
      document.body.style.overflow = 'auto';
    }
  }
};
</script>

<style scoped>
.portfolio-container {
  font-family: 'Arial', sans-serif;
}

/* 页面标题部分 */
.page-title-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.page-title-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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

/* 筛选部分 */
.filter-section {
  padding: 40px 0;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.filter-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.filter-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-buttons .el-button {
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.filter-buttons .el-button.active {
  background: #667eea;
  border-color: #667eea;
}

.filter-buttons .el-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

/* 作品网格部分 */
.portfolio-grid-section {
  padding: 80px 0;
  background: #f8f9fa;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.portfolio-grid-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.portfolio-grid-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.portfolio-item {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.portfolio-image-wrapper {
  position: relative;
  overflow: hidden;
}

.portfolio-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio-item:hover .portfolio-image {
  transform: scale(1.1);
}

.portfolio-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: 30px 20px;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
  transform: translateY(0);
  opacity: 1;
}

.portfolio-overlay h3 {
  font-size: 20px;
  margin-bottom: 5px;
}

.portfolio-overlay p {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 15px;
}

.portfolio-view-button {
  display: inline-block;
  padding: 8px 20px;
  background: #667eea;
  border-radius: 20px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.portfolio-view-button:hover {
  background: #5a67d8;
  transform: scale(1.05);
}

/* 作品详情弹窗 */
.work-detail-dialog .el-dialog__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.work-detail-dialog .el-dialog {
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.dialog-header {
  position: relative;
  margin-bottom: 30px;
}

.dialog-header h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 10px;
}

.work-category {
  display: inline-block;
  padding: 5px 15px;
  background: #f0f0f0;
  border-radius: 20px;
  font-size: 14px;
  color: #666;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 24px;
}

.work-detail-content {
  display: flex;
  gap: 40px;
}

.detail-image {
  flex: 0 0 50%;
}

.detail-image img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.detail-info {
  flex: 1;
}

.detail-description {
  margin-bottom: 30px;
}

.detail-description h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
}

.detail-description p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

.detail-meta {
  margin-bottom: 30px;
}

.meta-item {
  margin-bottom: 15px;
}

.meta-label {
  font-weight: bold;
  color: #333;
  margin-right: 10px;
}

.meta-value {
  color: #666;
}

.meta-link {
  color: #667eea;
  text-decoration: none;
  transition: color 0.3s ease;
}

.meta-link:hover {
  color: #5a67d8;
  text-decoration: underline;
}

.detail-features h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
}

.detail-features ul {
  list-style: none;
  padding: 0;
}

.detail-features li {
  margin-bottom: 10px;
  color: #666;
  display: flex;
  align-items: flex-start;
}

.detail-features li i {
  color: #667eea;
  margin-right: 10px;
  margin-top: 4px;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .work-detail-content {
    flex-direction: column;
  }
  
  .detail-image {
    flex: 0 0 auto;
  }
}

@media (max-width: 768px) {
  .page-title-section h1 {
    font-size: 36px;
  }
  
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  
  .dialog-header h2 {
    font-size: 24px;
  }
  
  .detail-description p {
    font-size: 14px;
  }
}
</style>