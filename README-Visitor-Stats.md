# 网站访问统计功能说明

本网站实现了前端访问统计功能，可以记录访问数量、IP地址等信息，并提供了相关工具来管理和导出这些数据。

## 功能介绍

本项目实现了静态网站的访问统计功能，支持以下特性：
- **实时访问统计**: 每当有用户访问网站时自动更新统计数据
- 记录网站访问次数
- 获取访问者IP地址
- 保存详细的访问记录（时间戳、IP地址、访问页面）
- 通过localStorage实现本地数据持久化
- 可通过浏览器控制台查看和导出数据

## 数据存储

访问统计数据主要存储在浏览器的localStorage中：
- `visitorCount`: 记录总访问次数
- `visitorIp`: 存储最后一个访问者的IP地址
- `visitorData`: 存储完整的访问统计数据
- `visitRecords`: 存储详细的访问历史记录
- `hasVisited`: 标记用户是否已访问过
- `lastExportDate`: 最后导出日期

## 功能实现

网站会在以下情况下自动更新访问统计数据：
- **每次页面加载时**: 系统会自动检测访问并更新统计信息
- **实时记录**: 每次访问都会立即更新localStorage中的数据
- **访问详情**: 系统会记录每次访问的时间戳、IP地址和访问页面

## 使用方法

### 查看访问统计数据

1. 打开浏览器控制台（按F12或Ctrl+Shift+I）
2. 输入以下命令查看完整的访问统计数据：
   
   ```javascript
   console.log(JSON.parse(localStorage.getItem('visitorData')))
   ```

### 导出访问统计数据到visitor.json文件

#### 方法1：使用开发辅助脚本（推荐）

1. 打开网站页面
2. 按F12打开浏览器控制台
3. 复制并粘贴`export-visitor-data.js`文件中的所有代码到控制台
4. 按Enter执行，页面右上角会出现一个下载按钮
5. 点击按钮下载`visitor.json`文件

#### 方法2：手动复制数据

1. 打开浏览器控制台
2. 运行以下命令查看格式化的JSON数据：
   
   ```javascript
   console.log(JSON.stringify(JSON.parse(localStorage.getItem('visitorData')), null, 2))
   ```
3. 复制输出的JSON内容
4. 粘贴到`visitor.json`文件中并保存

## 自动数据收集

系统会自动收集以下数据：
- 总访问量
- 最后访问者IP地址
- 最后访问时间
- 详细的访问历史记录（包含每次访问的时间戳、IP地址和页面路径）
- 网站基本信息（标题、URL）
- 访问者设备信息（浏览器、屏幕尺寸、语言等）

## 注意事项

1. 由于这是纯前端实现，统计数据仅在用户本地浏览器中保存，无法跨设备统计
2. 清除浏览器缓存或使用隐私模式会导致本地统计数据丢失
3. IP地址获取依赖第三方服务，在某些情况下可能不准确或不可用
4. 实际生产环境中，建议结合后端API实现更准确的统计功能

## 项目文件说明

- `src/App.vue`: 包含访问统计的核心实现代码
- `visitor.json`: 示例数据文件，展示了统计数据的结构格式
- `export-visitor-data.js`: 开发辅助脚本，用于导出数据
- `README-Visitor-Stats.md`: 本说明文件

## 示例数据结构

`visitor.json`文件包含以下主要字段：
- `totalVisitors`: 总访问次数
- `lastVisitorIp`: 最后访问者的IP地址
- `lastVisitTime`: 最后访问时间
- `visitRecords`: 访问记录数组，包含新访客和页面浏览记录
- `siteInfo`: 网站基本信息