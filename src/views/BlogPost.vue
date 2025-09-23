<template>
  <div class="blog-post-container">
    <!-- 顶部导航栏 -->
    <HeaderNav />
    
    <!-- 博客内容区域 -->
    <section class="blog-post-section">
      <div class="container">
        <!-- 返回按钮 -->
        <div class="back-button">
          <el-button 
            type="text" 
            @click="goBack"
            icon="el-icon-arrow-left"
            class="back-btn"
          >
            返回博客列表
          </el-button>
        </div>
        
        <!-- 博客文章内容 -->
        <div class="blog-post-content" v-if="blog">
          <!-- 文章标题 -->
          <div class="blog-post-header">
            <h1 class="blog-post-title">{{ blog.title }}</h1>
            <div class="blog-post-meta">
              <span class="meta-item"><i class="el-icon-date"></i> {{ blog.date }}</span>
              <span class="meta-item"><i class="el-icon-user"></i> {{ blog.author }}</span>
              <span class="meta-item"><i class="el-icon-view"></i> 阅读次数: {{ readCount }}</span>
            </div>
          </div>
          
          <!-- 文章正文 -->
          <div class="blog-post-body">
            <div v-html="renderedContent"></div>
          </div>
          
          <!-- 文章底部 -->
          <div class="blog-post-footer">
            <!-- 分享按钮 -->
            <div class="share-buttons">
              <span class="share-label">分享到：</span>
              <el-button type="text" icon="el-icon-weibo" class="share-btn">微博</el-button>
              <el-button type="text" icon="el-icon-chat-dot-round" class="share-btn">微信</el-button>
              <el-button type="text" icon="el-icon-link" class="share-btn">复制链接</el-button>
            </div>
            
            <!-- 标签 -->
            <div class="blog-tags" v-if="blog.tags && blog.tags.length > 0">
              <el-tag v-for="tag in blog.tags" :key="tag" type="info" size="small">{{ tag }}</el-tag>
            </div>
          </div>
        </div>
        
        <!-- 加载状态 -->
        <div v-else-if="loading" class="loading-state">
          <el-empty description="加载中..."></el-empty>
        </div>
        
        <!-- 错误状态 -->
        <div v-else class="error-state">
          <el-empty description="博客文章不存在或已被删除"></el-empty>
          <div class="error-actions">
            <el-button type="primary" @click="goBack">返回博客列表</el-button>
          </div>
        </div>
        
        <!-- 相关推荐 -->
        <div class="related-posts" v-if="relatedPosts && relatedPosts.length > 0">
          <h3 class="related-title">相关推荐</h3>
          <div class="related-grid">
            <div 
              v-for="post in relatedPosts" 
              :key="post.id"
              class="related-card"
              @click="navigateToBlog(post.id)"
            >
              <h4 class="related-post-title">{{ post.title }}</h4>
              <p class="related-post-excerpt">{{ post.excerpt }}</p>
              <span class="related-post-date">{{ post.date }}</span>
            </div>
          </div>
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
import { getBlogContent } from '@/utils/blogUtils.js';

// 引入marked库来解析Markdown
// 注意：实际项目中需要安装marked包
// npm install marked --save
let marked = null;

// 在Vue组件挂载后动态导入marked（仅在浏览器环境中）
if (typeof window !== 'undefined') {
  // 这里使用动态导入，实际项目中应该在package.json中添加marked依赖
  // 由于是模拟环境，我们使用一个简单的Markdown解析函数
  marked = {
    parse: function(text) {
      // 简单的Markdown解析（实际项目中应使用marked库）
      return text
        .replace(/# (.*?)(\n|$)/g, '<h1>$1</h1>')
        .replace(/## (.*?)(\n|$)/g, '<h2>$1</h2>')
        .replace(/### (.*?)(\n|$)/g, '<h3>$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
    }
  };
}

export default {
  name: 'BlogPost',
  components: {
    HeaderNav,
    Footer
  },
  data() {
    return {
      blog: null,
      loading: true,
      readCount: 0,
      relatedPosts: []
    };
  },
  computed: {
    renderedContent() {
      if (!this.blog || !this.blog.content) return '';
      // 使用marked解析Markdown内容
      try {
        return marked ? marked.parse(this.blog.content) : this.blog.content;
      } catch (error) {
        console.error('解析Markdown失败:', error);
        return this.blog.content;
      }
    }
  },
  watch: {
    '$route': {
      handler() {
        this.loadBlog();
      },
      immediate: true
    }
  },
  mounted() {
    this.loadBlog();
    
    // 添加页面进入动画
    const sections = document.querySelectorAll('.blog-post-section');
    
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
    // 加载博客内容
    async loadBlog() {
      this.loading = true;
      const blogId = this.$route.params.id;
      
      try {
        const blog = await getBlogContent(blogId);
        if (blog) {
          this.blog = blog;
          this.updateReadCount();
          this.loadRelatedPosts();
        }
      } catch (error) {
        this.$message.error('加载博客内容失败');
        console.error('加载博客内容失败:', error);
      } finally {
        this.loading = false;
      }
    },
    
    // 更新阅读次数
    updateReadCount() {
      // 模拟阅读次数统计
      this.readCount = Math.floor(Math.random() * 1000) + 100;
    },
    
    // 加载相关推荐
    loadRelatedPosts() {
      // 模拟加载相关推荐
      this.relatedPosts = [
        {
          id: 'tech-trends-2024',
          title: '2024年技术趋势展望：AI、元宇宙与可持续发展',
          excerpt: '2024年，人工智能、元宇宙和可持续发展将继续引领技术创新的前沿...',
          date: '2024-01-10'
        },
        {
          id: 'future-careers',
          title: '未来五年最具前景的十大职业',
          excerpt: '随着技术的快速发展，未来五年将涌现出一批新兴职业...',
          date: '2024-01-05'
        }
      ];
    },
    
    // 返回博客列表
    goBack() {
      this.$router.push('/blog');
    },
    
    // 跳转到其他博客
    navigateToBlog(blogId) {
      this.$router.push(`/blog/${blogId}`);
    }
  }
};
</script>

<style scoped>
/* 博客内容区域样式 */
.blog-post-section {
  padding: 60px 0;
  background: white;
}

.blog-post-section .container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 返回按钮样式 */
.back-button {
  margin-bottom: 30px;
}

.back-btn {
  color: #667eea;
  font-size: 16px;
  transition: all 0.3s ease;
}

.back-btn:hover {
  color: #5a67d8;
  background: rgba(102, 126, 234, 0.05);
}

/* 博客文章头部样式 */
.blog-post-header {
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
}

.blog-post-title {
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
  line-height: 1.4;
}

.blog-post-meta {
  display: flex;
  gap: 30px;
  font-size: 14px;
  color: #999;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

/* 博客文章正文样式 */
.blog-post-body {
  font-size: 18px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 50px;
}

.blog-post-body h2 {
  font-size: 28px;
  margin: 40px 0 20px;
  color: #333;
}

.blog-post-body h3 {
  font-size: 22px;
  margin: 30px 0 15px;
  color: #444;
}

.blog-post-body p {
  margin-bottom: 20px;
}

.blog-post-body strong {
  font-weight: bold;
  color: #333;
}

.blog-post-body em {
  font-style: italic;
  color: #666;
}

.blog-post-body code {
  background: #f8f9fa;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
}

/* 博客文章底部样式 */
.blog-post-footer {
  padding-top: 30px;
  border-top: 1px solid #eee;
  margin-bottom: 60px;
}

.share-buttons {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.share-label {
  font-size: 16px;
  color: #666;
}

.share-btn {
  color: #667eea;
  transition: all 0.3s ease;
}

.share-btn:hover {
  color: #5a67d8;
  background: rgba(102, 126, 234, 0.05);
}

.blog-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* 相关推荐样式 */
.related-posts {
  padding-top: 60px;
  border-top: 1px solid #eee;
}

.related-title {
  font-size: 24px;
  margin-bottom: 30px;
  color: #333;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.related-card {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.related-card:hover {
  background: #f0f2f5;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.related-post-title {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  line-height: 1.4;
}

.related-post-excerpt {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-post-date {
  font-size: 12px;
  color: #999;
}

/* 加载和错误状态样式 */
.loading-state,
.error-state {
  text-align: center;
  padding: 100px 0;
}

.error-actions {
  margin-top: 30px;
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
  .blog-post-section {
    padding: 40px 0;
  }
  
  .blog-post-title {
    font-size: 28px;
  }
  
  .blog-post-body {
    font-size: 16px;
  }
  
  .blog-post-meta {
    flex-direction: column;
    gap: 10px;
  }
  
  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>