<template>
  <div class="blog-container">
    <!-- 顶部导航栏 -->
    <HeaderNav />
    
    <!-- 页面标题区域 -->
    <section class="page-title-section gradient-flow">
      <div class="container">
        <div class="title-content">
          <h1 class="text-gradient">我的博客</h1>
          <p>探索技术前沿，分享学习心得</p>
        </div>
      </div>
    </section>
    
    <!-- 博客列表区域 -->
    <section class="blog-list-section">
      <div class="container">
        <div class="blog-grid">
          <!-- 博客卡片 -->
          <div 
            v-for="blog in blogList" 
            :key="blog.id"
            class="blog-card"
            @click="navigateToBlog(blog.id)"
          >
            <div class="blog-card-content">
              <div class="blog-meta">
                <span class="blog-date">{{ blog.date }}</span>
                <span class="blog-author">{{ blog.author }}</span>
              </div>
              <h2 class="blog-title">{{ blog.title }}</h2>
              <p class="blog-excerpt">{{ blog.excerpt }}</p>
              <div class="blog-read-more">
                阅读全文 <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 加载更多 -->
        <div class="load-more" v-if="hasMore">
          <el-button 
            type="default" 
            @click="loadMoreBlogs"
            :loading="loading"
          >
            {{ loading ? '加载中...' : '加载更多' }}
          </el-button>
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
import { getBlogList } from '@/utils/blogUtils.js';

export default {
  name: 'Blog',
  components: {
    HeaderNav,
    Footer
  },
  data() {
    return {
      blogList: [],
      loading: false,
      hasMore: true,
      currentPage: 1,
      pageSize: 10
    };
  },
  mounted() {
    this.loadBlogs();
    
    // 添加页面进入动画
    const sections = document.querySelectorAll('.blog-list-section');
    
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
  methods: {
    // 加载博客列表
    async loadBlogs() {
      this.loading = true;
      try {
        const blogs = await getBlogList();
        this.blogList = blogs;
        // 如果返回的博客数量小于pageSize，则表示没有更多数据
        this.hasMore = blogs.length >= this.pageSize;
      } catch (error) {
        this.$message.error('加载博客列表失败');
        console.error('加载博客列表失败:', error);
      } finally {
        this.loading = false;
      }
    },
    
    // 加载更多博客
    async loadMoreBlogs() {
      if (this.loading || !this.hasMore) return;
      
      this.loading = true;
      this.currentPage++;
      try {
        // 这里应该有一个支持分页的API
        // 由于是模拟环境，我们不实现真正的分页功能
        this.$message.info('已加载全部博客');
        this.hasMore = false;
      } catch (error) {
        this.currentPage--;
        this.$message.error('加载更多博客失败');
        console.error('加载更多博客失败:', error);
      } finally {
        this.loading = false;
      }
    },
    
    // 跳转到博客详情页
    navigateToBlog(blogId) {
      this.$router.push(`/blog/${blogId}`);
    }
  }
};
</script>

<style scoped>
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

/* 博客列表区域样式 */
.blog-list-section {
  padding: 100px 0;
  background: white;
}

.blog-list-section .container {
  max-width: 1190px;
  margin: 0 auto;
  padding: 0 20px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  gap: 30px;
}

/* 博客卡片样式 */
.blog-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 30px;
}

.blog-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.blog-card-content {
  position: relative;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 14px;
  color: #999;
}

.blog-title {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.blog-card:hover .blog-title {
  color: #667eea;
}

.blog-excerpt {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-read-more {
  display: inline-flex;
  align-items: center;
  color: #667eea;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.blog-read-more:hover {
  color: #5a67d8;
  transform: translateX(5px);
}

.blog-read-more i {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-read-more i {
  transform: translateX(5px);
}

/* 加载更多按钮样式 */
.load-more {
  text-align: center;
  margin-top: 50px;
}

.load-more .el-button {
  background: #f8f9fa;
  color: #667eea;
  border-color: #667eea;
  padding: 10px 30px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.load-more .el-button:hover {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

/* 动画效果 */
.animate-in {
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .blog-list-section {
    padding: 60px 0;
  }
  
  .blog-title {
    font-size: 20px;
  }
  
  .blog-excerpt {
    font-size: 14px;
  }
  
  .blog-meta {
    flex-direction: column;
    gap: 5px;
  }
}
</style>