<template>
  <div class="about-container">
    <!-- 顶部导航栏 -->
    <HeaderNav />
    
    <!-- 页面标题 -->
    <section class="page-title-section">
      <div class="container">
        <h1>关于我</h1>
        <p>了解我的故事和专业背景</p>
      </div>
    </section>

    <!-- 个人简介 -->
    <section class="about-me-section">
      <div class="container">
        <div class="about-content">
          <div class="about-image">
            <img src="../assets/images/me.jpg" alt="个人照片" />
          </div>
          <div class="about-text">
            <h2>你好，我是<span class="highlight">知识混子</span></h2>
            <p class="intro-text">
              我是一名充满激情的全栈开发者，拥有超过5年的Web开发经验。我热爱创造美观、实用且高效的数字产品，帮助企业和个人实现他们的愿景。
            </p>
            <p>
              我的专业领域包括前端开发、后端开发、UI/UX设计和移动应用开发。我擅长使用现代技术栈解决复杂问题，并且始终保持学习新技术的热情。
            </p>
            <p>
              我相信优秀的产品不仅需要出色的功能，还需要卓越的用户体验。因此，我在每一个项目中都注重细节，力求完美。
            </p>
            
            <div class="personal-info">
              <div class="info-item">
                <span class="info-label">姓名:</span>
              <span class="info-value">知识混子</span>
              </div>
              <div class="info-item">
                <span class="info-label">职业:</span>
                <span class="info-value">全栈开发者</span>
              </div>
              <div class="info-item">
                <span class="info-label">经验:</span>
                <span class="info-value">5+ 年</span>
              </div>
              <div class="info-item">
                <span class="info-label">邮箱:</span>
              <span class="info-value">contact@zhishihunzi.com</span>
              </div>
            </div>
            
            <div class="social-links">
              <a href="#" class="social-link" title="GitHub"><i class="el-icon-github"></i></a>
              <a href="#" class="social-link" title="LinkedIn"><i class="el-icon-link"></i></a>
              <a href="#" class="social-link" title="Twitter"><i class="el-icon-document"></i></a>
              <a href="#" class="social-link" title="Instagram"><i class="el-icon-picture"></i></a>
            </div>
            
            <el-button type="primary" class="download-btn">下载简历</el-button>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能部分（已注释） -->

    <!-- 经历部分（已注释） -->
    <!-- 教育背景（已注释） -->

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'About',
  components: {
    HeaderNav,
    Footer
  },
  data() {
    return {
      frontendSkills: [
        {
          name: 'HTML5/CSS3',
          level: 95,
          color: '#E34F26'
        },
        {
          name: 'JavaScript',
          level: 90,
          color: '#F7DF1E'
        },
        {
          name: 'Vue.js',
          level: 85,
          color: '#4FC08D'
        },
        {
          name: 'React',
          level: 80,
          color: '#61DAFB'
        },
        {
          name: 'Responsive Design',
          level: 85,
          color: '#38B2AC'
        }
      ],
      backendSkills: [
        {
          name: 'Node.js',
          level: 85,
          color: '#339933'
        },
        {
          name: 'Express.js',
          level: 80,
          color: '#000000'
        },
        {
          name: 'MongoDB',
          level: 75,
          color: '#47A248'
        },
        {
          name: 'MySQL',
          level: 80,
          color: '#4479A1'
        },
        {
          name: 'RESTful APIs',
          level: 85,
          color: '#6C757D'
        }
      ],
      designSkills: [
        {
          name: 'UI/UX Design',
          level: 75,
          color: '#FF6B6B'
        },
        {
          name: 'Photoshop',
          level: 70,
          color: '#31A8FF'
        },
        {
          name: 'Figma',
          level: 80,
          color: '#F24E1E'
        },
        {
          name: 'Adobe XD',
          level: 75,
          color: '#FF61F6'
        },
        {
          name: 'Illustration',
          level: 65,
          color: '#845EC2'
        }
      ],
      experiences: [
        {
          id: 1,
          date: '2020 - 至今',
          position: '高级全栈开发者',
          company: '创新科技有限公司',
          description: '负责公司核心产品的开发和维护，优化前端性能，设计并实现RESTful API，与产品团队紧密合作，确保项目按时交付。'
        },
        {
          id: 2,
          date: '2018 - 2020',
          position: '前端开发工程师',
          company: '互联网科技有限公司',
          description: '参与多个企业级应用的前端开发，使用Vue.js和React构建响应式界面，优化用户体验，解决跨浏览器兼容性问题。'
        },
        {
          id: 3,
          date: '2016 - 2018',
          position: 'Web开发工程师',
          company: '软件开发有限公司',
          description: '负责公司官网和客户项目的开发，使用HTML、CSS、JavaScript和jQuery构建网站，与设计师合作实现视觉效果。'
        }
      ],
      education: [
        {
          id: 1,
          year: '2012 - 2016',
          degree: '计算机科学与技术 学士学位',
          institution: '北京大学',
          description: '主修计算机科学，辅修软件工程，参与多个校内项目开发，获得优秀毕业生称号。'
        },
        {
          id: 2,
          year: '2010 - 2012',
          degree: '高中',
          institution: '北京市第一中学',
          description: '理科班，数学、物理、化学成绩优异，获得校级编程竞赛一等奖。'
        }
      ]
    };
  },
  mounted() {
    // 添加页面进入动画
    const sections = document.querySelectorAll('.about-me-section, .skills-section, .experience-section, .education-section');
    
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
    // 滚动到指定部分
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.about-container {
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

/* 个人简介部分 */
.about-me-section {
  padding: 100px 0;
}

.about-me-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-content {
  display: flex;
  gap: 60px;
  align-items: center;
}

.about-image {
  flex: 0 0 400px;
  position: relative;
}

.about-image::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #667eea;
  top: 20px;
  left: 20px;
  z-index: -1;
  border-radius: 5px;
}

.about-image img {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.about-image:hover img {
  transform: scale(1.05);
}

.about-text {
  flex: 1;
}

.about-text h2 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
}

.about-text .highlight {
  background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 3s ease infinite;
}

@keyframes gradientMove {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

.intro-text {
  font-size: 18px;
  margin-bottom: 20px;
  color: #555;
  line-height: 1.6;
}

.about-text p {
  font-size: 16px;
  margin-bottom: 20px;
  color: #555;
  line-height: 1.6;
}

.personal-info {
  margin: 30px 0;
}

.info-item {
  display: flex;
  margin-bottom: 15px;
}

.info-label {
  font-weight: bold;
  color: #333;
  min-width: 80px;
}

.info-value {
  color: #555;
}

.social-links {
  display: flex;
  gap: 15px;
  margin: 30px 0;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  border-radius: 50%;
  color: #666;
  font-size: 18px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #667eea;
  color: white;
  transform: translateY(-3px);
}

.download-btn {
  background: #667eea;
  border-color: #667eea;
  padding: 10px 30px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.download-btn:hover {
  background: #5a67d8;
  border-color: #5a67d8;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

/* 技能部分 */
.skills-section {
  padding: 100px 0;
  background: #f8f9fa;
}

.skills-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
}

.section-title h2 {
  font-size: 36px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
}

.title-underline {
  width: 80px;
  height: 3px;
  background: #409EFF;
  margin: 0 auto;
  position: relative;
}

.title-underline::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 3px;
  background: #667eea;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.skill-category h3 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.skill-bar {
  margin-bottom: 20px;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.skill-info span {
  font-size: 14px;
  color: #555;
}

.skill-progress .el-progress-bar__outer {
  height: 8px;
  border-radius: 4px;
  background: #e0e0e0;
}

.skill-progress .el-progress-bar__inner {
  border-radius: 4px;
}

/* 经历部分 */
.experience-section {
  padding: 100px 0;
}

.experience-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 4px;
  background: #e0e0e0;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-marker {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #667eea;
  border-radius: 50%;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-marker {
  transform: translateX(-50%) scale(1.5);
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
}

.timeline-content {
  width: calc(50% - 50px);
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.timeline-right {
  margin-left: auto;
}

.timeline-date {
  font-size: 14px;
  color: #667eea;
  font-weight: bold;
  margin-bottom: 10px;
}

.timeline-content h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.timeline-company {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
}

.timeline-content p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 教育背景部分 */
.education-section {
  padding: 100px 0;
  background: #f8f9fa;
}

.education-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.education-list {
  max-width: 800px;
  margin: 0 auto;
}

.education-item {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  position: relative;
}

.education-item::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30px;
  width: 2px;
  background: #e0e0e0;
}

.education-item:last-child::before {
  display: none;
}

.education-year {
  flex: 0 0 60px;
  background: #667eea;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  position: relative;
  z-index: 1;
}

.education-content {
  flex: 1;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.education-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.education-content h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.education-institution {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
}

.education-content p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 动画效果 */
.about-me-section,
.skills-section,
.experience-section,
.education-section {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.about-me-section.animate-in,
.skills-section.animate-in,
.experience-section.animate-in,
.education-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* 响应式设计 */
@media (max-width: 992px) {
  .about-content {
    flex-direction: column;
    text-align: center;
  }
  
  .about-image {
    flex: 0 0 auto;
    max-width: 300px;
    margin-bottom: 40px;
  }
  
  .personal-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .info-item {
    flex: 0 0 45%;
    margin-bottom: 10px;
    justify-content: center;
  }
  
  .timeline::before {
    left: 30px;
  }
  
  .timeline-marker {
    left: 30px;
  }
  
  .timeline-content {
    width: calc(100% - 80px);
    margin-left: 80px;
  }
  
  .timeline-right {
    margin-left: 80px;
  }
  
  .education-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .education-item::before {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .education-year {
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .page-title-section h1 {
    font-size: 36px;
  }
  
  .section-title h2 {
    font-size: 28px;
  }
  
  .about-text h2 {
    font-size: 28px;
  }
  
  .intro-text {
    font-size: 16px;
  }
  
  .info-item {
    flex: 0 0 100%;
  }
}
</style>