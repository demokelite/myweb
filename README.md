# 🎉 知识混子 - 个人网站项目

![Vue.js](https://img.shields.io/badge/Vue.js-42b883?style=for-the-badge&logo=vue.js&logoColor=white)
![Element Plus](https://img.shields.io/badge/Element%20Plus-409eff?style=for-the-badge&logo=element&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue%20Router-35495e?style=for-the-badge&logo=vue.js&logoColor=white)

这是一个基于 Vue.js 开发的个人网站项目，✨ 融合了现代前端技术与创意设计，打造出一个集展示、分享、互动于一体的综合性平台！网站采用响应式设计，在各种设备上都能呈现最佳体验。

## 🌟 项目简介

本项目是一个功能完备的个人网站解决方案，专为展示个人作品、分享知识和促进交流而设计！主要功能包括：
- 🎨 精美的主页展示，瞬间抓住访问者眼球
- 📁 作品集展示（包含随机图片、随机视频等特色内容）
- 📝 博客系统，记录和分享学习心得
- 🙋 关于我页面，展现个性与专业背景
- 📧 联系方式表单，方便访客沟通交流

项目使用 Vue.js 作为前端框架，Element Plus 提供优雅的 UI 组件，通过 Vue Router 实现流畅的页面切换，确保了代码的可维护性和扩展性。

## 🛠️ 技术栈

| 技术/工具       | 版本/说明     | 用途                | 🎯
|--------------|-----------|-------------------|
| Vue.js       | 3.x       | 前端框架              | 核心开发框架
| Element Plus | 最新版      | UI 组件库           | 提供美观易用的界面组件
| Vue Router   | 4.x       | 路由管理              | 实现页面跳转和导航
| Vue CLI      | 5.x       | 构建工具              | 项目初始化、开发和构建
| ESLint       | 最新版      | 代码规范检查            | 保证代码质量
| JavaScript  | ES6+      | 编程语言              | 业务逻辑实现
| CSS3         | 最新标准     | 样式设计              | 页面美化

## 📁 项目结构

项目采用模块化的组织结构，清晰划分了各个功能模块：

```
src/                      # 源代码目录
├── assets/               # 🖼️ 静态资源文件（图片、样式等）
├── components/           # 🧩 可复用组件
│   ├── HeaderNav.vue     # 🔝 顶部导航栏组件
│   ├── Footer.vue        # 🦶 页脚组件
│   └── HelloWorld.vue    # 👋 示例组件
├── views/                # 📄 页面组件
│   ├── Home.vue          # 🏠 主页
│   ├── Portfolio.vue     # 📁 作品集页面
│   ├── Blog.vue          # 📝 博客页面
│   ├── BlogPost.vue      # 📃 博客文章详情页
│   ├── About.vue         # 🙋 关于我页面
│   ├── Contact.vue       # 📧 联系页面
│   ├── Donate.vue        # 💸 打赏页面
│   ├── PrivacyPolicy.vue # 🔒 隐私政策页面
│   ├── TermsOfService.vue # 📜 服务条款页面
│   ├── CookiePolicy.vue  # 🍪 Cookie政策页面
│   └── random_pages/     # 🎲 随机内容页面
├── router/               # 🛣️ 路由配置
│   └── index.js          # 🗺️ 路由定义
├── utils/                # 🧰 工具函数
│   └── blogUtils.js      # 博客相关工具函数
├── App.vue               # 🌐 根组件
└── main.js               # 🚀 应用入口文件
```

## 🚀 快速开始

### 环境要求
- Node.js (推荐 v14.0 或更高版本) 🟢
- npm (v6.0 或更高版本) 或 yarn 📦

### 项目设置

首先，安装项目依赖：

```bash
npm install
# 或使用 yarn
# yarn install
```

### 开发模式运行

启动开发服务器，支持热重载，让开发更高效：

```bash
npm run serve
# 或使用 yarn
# yarn serve
```

启动后，可通过以下地址访问开发服务器：
- 🏠 本地访问：http://localhost:8080/
- 🌐 局域网访问：http://你的IP地址:8080/

### 构建生产版本

编译并压缩代码，生成生产环境的构建文件：

```bash
npm run build
# 或使用 yarn
# yarn build
```

构建后的文件将生成在 `dist/` 目录中，可直接部署到服务器上。

### 代码检查与修复

运行 ESLint 检查代码质量并自动修复问题：

```bash
npm run lint
# 或使用 yarn
# yarn lint
```

如需自定义项目配置，请参考 [Vue CLI 配置文档](https://cli.vuejs.org/config/)。

主要配置文件包括：
- `vue.config.js`：Vue CLI 配置 ⚙️
- `babel.config.js`：Babel 配置 🔧
- `jsconfig.json`：JavaScript 项目配置 📝

## ✨ 功能说明

### 🏠 主页
展示网站的核心内容和导航入口，包含个人简介、最新作品预览等，第一时间传达网站主题和个人风格。

### 📁 作品集
精心展示各类项目作品，包含丰富的视觉元素和详细的项目说明，展现专业能力和创作才华。

### 📝 博客系统
- 📃 博客列表：以网格布局（每行三张卡片）展示所有博客文章，支持快速浏览
- 📄 文章详情：展示完整的博客内容，支持 Markdown 格式，方便阅读和学习
- 📅 按日期排序：最新文章优先展示，让访客及时了解最新动态

### 🎲 随机内容页面
项目包含多个趣味随机内容页面，为网站增添乐趣和互动性：
- 🎬 随机视频
- 📸 coser图片
- 👗 白丝图片
- 🖤 黑丝图片
- 👩 美女图片
- 🎨 二次元图片
- 👧 jk图片
- 📷 随机图片7
- 📸 随机图片8

这些页面允许用户浏览随机内容，并提供刷新和下载功能，为访问者带来惊喜和乐趣！

### 🙋 关于我
详细介绍个人背景、技能和经历，让访客更深入了解你是谁以及你的专业领域。

### 📧 联系方式
提供便捷的沟通渠道，包括表单提交和其他联系方式，方便访客与你取得联系。

## 💻 开发指南

### 添加新页面
1. 在 `src/views/` 目录下创建新的 Vue 组件文件 📄
2. 在 `src/router/index.js` 中配置新页面的路由 🛣️

### 组件开发
1. 可复用组件应放在 `src/components/` 目录下 🧩
2. 组件命名应遵循 PascalCase 规范 📝

### 样式管理
项目使用 CSS 和 Element Plus 的样式系统，可通过以下方式添加自定义样式：
- 在组件内部使用 `<style>` 标签 🎨
- 创建全局样式文件并在 `main.js` 中导入 📁

## 🚢 部署说明

构建后的项目是一个静态网站，可以部署到任何支持静态文件托管的平台上：

1. 使用 `npm run build` 构建项目 🏗️
2. 将 `dist/` 目录中的所有文件上传到服务器或托管平台 📤
3. 配置服务器以支持 SPA 应用的路由（重定向所有请求到 index.html）🔄

常见的部署平台包括：
- GitHub Pages 🐙
- Netlify 🌐
- Vercel ⚡
- 传统 Web 服务器（Nginx、Apache 等）🖥️

## 📜 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情 📄

## 📬 联系方式

如有任何问题或建议，欢迎联系项目维护者！

💡 期待你的反馈和贡献，让这个项目变得更加出色！

---

Made with ❤️ by 知识混子
