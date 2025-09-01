# 个人网站架构文档

## 1. 项目概述

这是一个基于Vue 2 + Element UI开发的个人网站，包含5个风格统一的页面，具有丰富的动画效果和资源展示功能，采用模块化开发方式，并符合ESLint命名规则。

## 2. 技术栈

- **前端框架**: Vue 2.6.14
- **UI库**: Element UI
- **路由**: Vue Router 3
- **构建工具**: Vue CLI
- **包管理**: npm
- **代码规范**: ESLint

## 3. 项目结构

```
mywebsite/
├── public/             # 静态资源目录
│   ├── favicon.ico     # 网站图标
│   └── index.html      # HTML入口文件
├── src/                # 源代码目录
│   ├── assets/         # 静态资源（图片、字体等）
│   ├── components/     # 公共组件
│   │   ├── HeaderNav.vue  # 顶部导航栏组件
│   │   └── Footer.vue     # 页脚组件
│   ├── router/         # 路由配置
│   │   └── index.js    # 路由定义
│   ├── views/          # 页面组件
│   │   ├── Home.vue        # 首页
│   │   ├── About.vue       # 关于我页面
│   │   ├── Portfolio.vue   # 作品集页面
│   │   ├── Blog.vue        # 博客页面
│   │   └── Contact.vue     # 联系页面
│   ├── App.vue         # 应用根组件
│   └── main.js         # 应用入口文件
├── .gitignore          # Git忽略文件
├── babel.config.js     # Babel配置
├── package.json        # 项目配置和依赖
├── ARCHITECTURE.md     # 架构文档（当前文件）
└── README.md           # 项目说明文档
```

## 4. 页面结构

### 4.1 首页（Home.vue）

- 导航栏（HeaderNav）
- 英雄区域（Hero Section）
- 特色内容（Features）
- 精选作品（Portfolio Preview）
- 客户评价（Testimonials）
- 页脚（Footer）

### 4.2 关于我（About.vue）

- 导航栏（HeaderNav）
- 个人简介（Introduction）
- 技能部分（Skills）
- 经历部分（Experience）
- 教育背景（Education）
- 页脚（Footer）

### 4.3 作品集（Portfolio.vue）

- 导航栏（HeaderNav）
- 页面标题（Page Title）
- 作品筛选（Filter）
- 作品网格（Portfolio Grid）
- 作品详情弹窗（Portfolio Modal）
- 页脚（Footer）

### 4.4 博客（Blog.vue）

- 导航栏（HeaderNav）
- 页面标题（Page Title）
- 博客内容区（Blog Content）
- 文章列表（Blog List）
- 文章详情弹窗（Blog Post Modal）
- 页脚（Footer）

### 4.5 联系我（Contact.vue）

- 导航栏（HeaderNav）
- 页面标题（Page Title）
- 联系内容（Contact Content）
- 地图部分（Map Section）
- 常见问题（FAQ Section）
- 页脚（Footer）

## 5. 核心功能模块

### 5.1 导航模块

- 顶部导航栏，支持响应式布局
- 当前页面高亮显示
- 移动端菜单支持

### 5.2 路由模块

- 基于Vue Router实现页面切换
- 支持history模式
- 配置了滚动行为

### 5.3 资源展示模块

- 作品展示（Portfolio.vue）
- 支持分类筛选
- 作品详情弹窗

### 5.4 表单模块

- 联系表单（Contact.vue）
- 邮箱订阅功能（Footer.vue）
- 表单验证

### 5.5 动画效果

- 页面滚动动画
- 元素进入视图时的动画
- 悬停效果
- 平滑过渡

## 6. 样式规范

- 使用统一的颜色主题（主色调：#667eea）
- 响应式设计，支持多设备适配
- 动画效果统一且流畅
- 遵循CSS命名规范

## 7. ESLint配置

项目遵循Vue官方推荐的代码规范，主要规则包括：

- 缩进使用2个空格
- 使用单引号
- 语句末尾必须有分号
- 禁止使用未声明的变量
- Vue组件名称必须为多单词
- 模板中属性必须使用连字符命名

## 8. 部署说明

1. 安装依赖：`npm install`
2. 开发模式：`npm run serve`
3. 构建生产版本：`npm run build`
4. 构建后的文件位于`dist`目录，可部署到任何静态文件服务器

## 9. 性能优化

- 组件按需加载
- 图片懒加载
- CSS优化
- 避免不必要的重新渲染

## 10. 未来扩展方向

- 添加后端API支持
- 集成内容管理系统
- 增加多语言支持
- 添加更多交互功能