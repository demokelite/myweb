<template>
  <div class="contact-container">
    <!-- 顶部导航栏 -->
    <HeaderNav />
    
    <!-- 页面标题 -->
    <section class="page-title-section">
      <div class="container">
        <h1>联系我</h1>
        <p>有任何问题或合作意向，请随时联系我</p>
      </div>
    </section>

    <!-- 联系内容 -->
    <section class="contact-content-section">
      <div class="container">
        <div class="contact-layout">
          <!-- 联系信息 -->
          <div class="contact-info">
            <h2>联系方式</h2>
            <p class="contact-description">
              无论您有任何问题、建议或合作意向，都可以通过以下方式联系我。我会尽快回复您的消息。
            </p>
            
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="el-icon-mobile-phone"></i>
                </div>
                <div class="contact-text">
                  <h3>电话</h3>
                  <p>+86 138 **** 8888</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="el-icon-message"></i>
                </div>
                <div class="contact-text">
                  <h3>邮箱</h3>
                  <p>871684184@qq.com</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="el-icon-location"></i>
                </div>
                <div class="contact-text">
                  <h3>地址</h3>
                  <p>北京市海淀区中关村科技园区8号楼</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <a href="#" class="social-link" title="GitHub"><i class="el-icon-github"></i></a>
              <a href="#" class="social-link" title="LinkedIn"><i class="el-icon-link"></i></a>
              <a href="#" class="social-link" title="Twitter"><i class="el-icon-document"></i></a>
              <a href="#" class="social-link" title="Instagram"><i class="el-icon-picture"></i></a>
            </div>
          </div>
          
          <!-- 联系表单（已注释）
          <div class="contact-form">
            <h2>发送消息</h2>
            <el-form 
              ref="contactFormRef" 
              :model="contactForm" 
              :rules="contactRules"
              class="form"
            >
              <el-form-item label="姓名" prop="name">
                <el-input 
                  v-model="contactForm.name" 
                  placeholder="请输入您的姓名"
                  :validate-event="false"
                />
              </el-form-item>
              
              <el-form-item label="邮箱" prop="email">
                <el-input 
                  v-model="contactForm.email" 
                  placeholder="请输入您的邮箱"
                  type="email"
                  :validate-event="false"
                />
              </el-form-item>
              
              <el-form-item label="主题" prop="subject">
                <el-input 
                  v-model="contactForm.subject" 
                  placeholder="请输入消息主题"
                  :validate-event="false"
                />
              </el-form-item>
              
              <el-form-item label="消息内容" prop="message">
                <el-input 
                  v-model="contactForm.message" 
                  placeholder="请输入您的消息内容"
                  type="textarea"
                  :rows="6"
                  :validate-event="false"
                />
              </el-form-item>
              
              <el-form-item>
                <el-button 
                  type="primary" 
                  size="large"
                  @click="submitForm"
                  :loading="formLoading"
                  class="submit-button"
                >
                  发送消息
                </el-button>
              </el-form-item>
            </el-form>
          </div>
          -->
        </div>
      </div>
    </section>

    <!-- 地图部分（已注释） -->
    <!-- <section class="map-section">
      <div class="map-container">
        这里可以嵌入实际的地图组件，现在使用占位图
        <img src="https://picsum.photos/id/1031/1920/600" alt="地图" class="map-image" />
      </div>
    </section> -->

    <!-- 常见问题（已注释） -->
    <!-- <section class="faq-section">
      <div class="container">
        <div class="section-title">
          <h2>常见问题</h2>
          <div class="title-underline"></div>
        </div>
        
        <el-collapse class="faq-collapse">
          <el-collapse-item 
            v-for="faq in faqs" 
            :key="faq.id"
            :title="faq.question"
            class="faq-item"
          >
            <p>{{ faq.answer }}</p>
          </el-collapse-item>
        </el-collapse>
      </div>
    </section> -->

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Contact',
  components: {
    HeaderNav,
    Footer
  },
  data() {
    return {
      formLoading: false,
      contactForm: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      contactRules: {
        name: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' },
          { min: 2, max: 20, message: '姓名长度在 2 到 20 个字符之间', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入您的邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur' }
        ],
        subject: [
          { required: true, message: '请输入消息主题', trigger: 'blur' },
          { min: 2, max: 50, message: '主题长度在 2 到 50 个字符之间', trigger: 'blur' }
        ],
        message: [
          { required: true, message: '请输入消息内容', trigger: 'blur' },
          { min: 10, max: 500, message: '消息内容长度在 10 到 500 个字符之间', trigger: 'blur' }
        ]
      },
      faqs: [
        {
          id: 1,
          question: '您接受什么样的项目合作？',
          answer: '我主要接受Web开发、移动应用开发、UI/UX设计和后端开发相关的项目。如果您有具体的需求，请通过联系表单或其他联系方式详细告诉我，我会尽快评估并回复您。'
        },
        {
          id: 2,
          question: '项目的收费标准是什么？',
          answer: '项目的收费标准根据项目的复杂度、规模、时间要求等因素而定。我提供固定价格和按小时计费两种模式。请联系我详细讨论您的需求，我会为您提供个性化的报价。'
        },
        {
          id: 3,
          question: '一个项目通常需要多长时间完成？',
          answer: '项目的完成时间取决于项目的复杂度和规模。小型项目可能需要2-4周，中型项目可能需要1-3个月，大型项目可能需要3个月以上。在开始项目前，我会进行详细的需求分析并提供准确的时间预估。'
        },
        {
          id: 4,
          question: '您是否提供项目的售后支持？',
          answer: '是的，我为所有项目提供售后支持服务。根据项目的规模和复杂度，我提供1-3个月的免费维护期，之后可以选择付费的维护服务。我会确保您的项目在上线后能够稳定运行。'
        },
        {
          id: 5,
          question: '如何开始一个项目的合作？',
          answer: '首先，我们需要进行初步沟通，了解您的需求和期望。然后，我会进行需求分析并提供详细的项目方案和报价。如果您同意方案和报价，我们会签订合同并开始项目的实施。在项目过程中，我会定期向您汇报进度并根据您的反馈进行调整。'
        }
      ]
    };
  },
  mounted() {
    // 添加页面进入动画
    const sections = document.querySelectorAll('.contact-content-section, .map-section, .faq-section');
    
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
    async submitForm() {
      try {
        // 验证表单
        await this.$refs.contactFormRef.validate();
        
        // 显示加载状态
        this.formLoading = true;
        
        // 模拟表单提交
        setTimeout(() => {
          // 重置表单
          this.$refs.contactFormRef.resetFields();
          
          // 隐藏加载状态
          this.formLoading = false;
          
          // 显示成功提示
          this.$message({
            message: '消息发送成功！我会尽快回复您。',
            type: 'success',
            duration: 5000
          });
        }, 1500);
      } catch (error) {
        // 隐藏加载状态
        this.formLoading = false;
        
        // 显示错误提示
        this.$message({
          message: '请检查表单填写是否正确！',
          type: 'error'
        });
      }
    }
  }
};
</script>

<style scoped>
.contact-container {
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

/* 联系内容部分 */
.contact-content-section {
  padding: 100px 0;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.contact-content-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.contact-content-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.contact-layout {
  display: flex;
  gap: 60px;
}

.contact-info {
  margin: 0 auto; 
  max-width: 600px;
}

.contact-form {
  flex: 1;
}

.contact-info h2,
.contact-form h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
}

.contact-description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 40px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 40px;
}

.contact-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: #667eea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.contact-text h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
}

.contact-text p {
  font-size: 16px;
  color: #666;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: #f0f0f0;
  border-radius: 50%;
  color: #666;
  font-size: 20px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #667eea;
  color: white;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

/* 联系表单 */
.form {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.form .el-form-item {
  margin-bottom: 25px;
}

.form .el-form-item__label {
  font-size: 16px;
  color: #333;
  font-weight: bold;
}

.form .el-input__inner {
  height: 45px;
  font-size: 16px;
}

.form .el-textarea__inner {
  font-size: 16px;
  min-height: 150px;
}

.submit-button {
  width: 100%;
  height: 50px;
  font-size: 18px;
  background: #667eea;
  border-color: #667eea;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background: #5a67d8;
  border-color: #5a67d8;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

/* 地图部分 */
.map-section {
  padding: 60px 0;
  background: #f8f9fa;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.map-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.map-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.map-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.map-container:hover .map-image {
  transform: scale(1.02);
}

/* 常见问题部分 */
.faq-section {
  padding: 100px 0;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.faq-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.faq-section .container {
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

.faq-collapse {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 20px;
  border-radius: 10px !important;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.faq-item .el-collapse-item__header {
  padding: 20px 30px !important;
  background: white !important;
  font-size: 18px !important;
  color: #333 !important;
  font-weight: bold !important;
  border-bottom: none !important;
  transition: all 0.3s ease !important;
}

.faq-item .el-collapse-item__header:hover {
  background: #f8f9fa !important;
  color: #667eea !important;
}

.faq-item .el-collapse-item__header i {
  color: #667eea !important;
  font-size: 16px !important;
}

.faq-item .el-collapse-item__wrap {
  background: white !important;
  border-top: none !important;
}

.faq-item .el-collapse-item__content {
  padding: 20px 30px !important;
  font-size: 16px !important;
  color: #666 !important;
  line-height: 1.8 !important;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .contact-layout {
    flex-direction: column;
  }
  
  .contact-info {
    flex: 0 0 auto;
  }
  
  .map-image {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .page-title-section h1 {
    font-size: 36px;
  }
  
  .contact-info h2,
  .contact-form h2 {
    font-size: 28px;
  }
  
  .section-title h2 {
    font-size: 28px;
  }
  
  .form {
    padding: 30px;
  }
  
  .faq-item .el-collapse-item__header {
    padding: 15px 20px !important;
    font-size: 16px !important;
  }
  
  .faq-item .el-collapse-item__content {
    padding: 15px 20px !important;
    font-size: 14px !important;
  }
}
</style>