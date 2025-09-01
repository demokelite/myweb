# 我的个人网站项目

这是一个基于 Vue.js 开发的个人网站项目，包含了主页、作品集、博客、关于我和联系方式等多个功能模块。网站采用现代前端技术栈构建，具有响应式设计，可适配不同设备屏幕。

## 项目简介

本项目是一个完整的个人网站解决方案，主要功能包括：
- 美观的主页展示
- 作品集展示（包含随机图片、随机视频等特色内容）
- 博客系统
- 关于我页面
- 联系方式表单

项目使用 Vue.js 作为前端框架，Element UI 作为 UI 组件库，通过 Vue Router 实现路由管理，确保了代码的可维护性和扩展性。

## 技术栈

- **前端框架**：Vue.js 3
- **UI 组件库**：Element Plus
- **路由管理**：Vue Router
- **构建工具**：Vue CLI
- **代码规范**：ESLint

## 项目结构

项目采用模块化的组织结构，主要文件和目录如下：

```
src/
├── assets/         # 静态资源文件（图片等）
├── components/     # 可复用组件
│   ├── HeaderNav.vue  # 顶部导航栏组件
│   ├── Footer.vue     # 页脚组件
│   └── HelloWorld.vue # 示例组件
├── views/          # 页面组件
│   ├── Home.vue       # 主页
│   ├── Portfolio.vue  # 作品集页面
│   ├── Blog.vue       # 博客页面
│   ├── About.vue      # 关于我页面
│   ├── Contact.vue    # 联系页面
│   └── random_pages/  # 随机内容页面
├── router/         # 路由配置
│   └── index.js       # 路由定义
├── App.vue         # 根组件
└── main.js         # 应用入口文件
```

## 快速开始

### 环境要求

- Node.js (推荐 v14.0 或更高版本)
- npm (v6.0 或更高版本) 或 yarn

### 项目设置

首先，安装项目依赖：

```bash
npm install
# 或使用 yarn
# yarn install
```

### 开发模式运行

启动开发服务器，支持热重载：

```bash
npm run serve
# 或使用 yarn
# yarn serve
```

启动后，可通过以下地址访问开发服务器：
- 本地访问：http://localhost:8083/
- 局域网访问：http://你的IP地址:8083/

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

## 自定义配置

如需自定义项目配置，请参考 [Vue CLI 配置文档](https://cli.vuejs.org/config/)。

主要配置文件包括：
- `vue.config.js`：Vue CLI 配置
- `babel.config.js`：Babel 配置
- `jsconfig.json`：JavaScript 项目配置

## 功能说明

### 主页
展示网站的核心内容和导航入口，包含个人简介、最新作品预览等。

### 作品集
展示各类项目作品，包含随机图片和随机视频等特色内容。

### 随机内容页面
项目包含多个随机内容页面，如：
- 随机视频
- coser图片
- 白丝图片
- 黑丝图片
- 美女图片
- 二次元图片
- jk图片
- 随机图片7
- 随机图片8

这些页面允许用户浏览随机内容，并提供刷新和下载功能。

## 开发指南

### 添加新页面
1. 在 `src/views/` 目录下创建新的 Vue 组件文件
2. 在 `src/router/index.js` 中配置新页面的路由

### 组件开发
1. 可复用组件应放在 `src/components/` 目录下
2. 组件命名应遵循 PascalCase 规范

### 样式管理
项目使用 CSS 和 Element UI 的样式系统，可通过以下方式添加自定义样式：
- 在组件内部使用 `<style>` 标签
- 创建全局样式文件并在 `main.js` 中导入

## 部署说明

构建后的项目是一个静态网站，可以部署到任何支持静态文件托管的平台上：

1. 使用 `npm run build` 构建项目
2. 将 `dist/` 目录中的所有文件上传到服务器或托管平台
3. 配置服务器以支持 SPA 应用的路由（重定向所有请求到 index.html）

常见的部署平台包括：
- GitHub Pages
- Netlify
- Vercel
- 传统 Web 服务器（Nginx、Apache 等）

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系方式

如有任何问题或建议，欢迎联系项目维护者。
