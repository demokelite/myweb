<template>
  <div id="app">
    <!-- 路由视图 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // 初始化性能监控
    this.initPerformanceMonitoring();
    
    // 初始化访问统计
    this.initVisitorTracking();
    
    // 初始化导出功能
    this.initExportFunctionality();
    
    // 监听路由变化，监控页面切换性能和记录页面浏览量
    this.$router.afterEach((to) => {
      this.monitorRouteChangePerformance();
      this.trackPageView(to);
    });
  },
  
  methods: {
    // 初始化性能监控
    initPerformanceMonitoring() {
      // 检查浏览器是否支持 Performance API
      if ('performance' in window && 'getEntriesByType' in window.performance) {
        // 等待页面加载完成后收集性能数据
        window.addEventListener('load', () => {
          setTimeout(() => {
            this.collectPerformanceMetrics();
          }, 0);
        });
        
        // 收集 Web Vitals 指标
        this.collectWebVitals();
      }
    },
    
    // 收集性能指标
    collectPerformanceMetrics() {
      try {
        const performanceEntries = window.performance.getEntriesByType('navigation');
        if (performanceEntries && performanceEntries.length > 0) {
          const entry = performanceEntries[0];
          
          const performanceData = {
            // DNS 查找时间
            dnsLookup: entry.domainLookupEnd - entry.domainLookupStart,
            // TCP 连接时间
            tcpConnection: entry.connectEnd - entry.connectStart,
            // 首字节时间
            firstByte: entry.responseStart - entry.navigationStart,
            // 内容加载时间
            contentLoad: entry.domContentLoadedEventEnd - entry.navigationStart,
            // 页面完全加载时间
            pageLoad: entry.loadEventEnd - entry.navigationStart
          };
          
          console.log('性能指标:', performanceData);
          
          // 这里可以将性能数据发送到服务器或第三方分析平台
          // this.sendPerformanceData(performanceData);
        }
      } catch (error) {
        console.error('收集性能指标时出错:', error);
      }
    },
    
    // 收集 Web Vitals 指标
    collectWebVitals() {
      // 安全地处理 PerformanceObserver 的 entries
      const safeForEach = (entries, callback) => {
        if (entries && typeof entries === 'object' && 'getEntries' in entries) {
          // 对于某些浏览器，entries 是一个带有 getEntries 方法的对象
          const entryList = entries.getEntries();
          if (Array.isArray(entryList)) {
            entryList.forEach(callback);
          }
        } else if (Array.isArray(entries)) {
          // 标准情况下，entries 应该是一个数组
          entries.forEach(callback);
        }
      };
      
      // 监控 LCP (最大内容绘制)
      let lcpEntry = null;
      const observer = new PerformanceObserver((entries) => {
        safeForEach(entries, (entry) => {
          if (entry.startTime > (lcpEntry?.startTime || 0)) {
            lcpEntry = entry;
          }
        });
        
        // 当页面可见性状态变化或页面卸载时报告 LCP
        if (lcpEntry) {
          console.log('LCP (最大内容绘制):', lcpEntry.startTime);
        }
      });
      
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      
      // 监控 FID (首次输入延迟)
      let fidEntry = null;
      const fidObserver = new PerformanceObserver((entries) => {
        safeForEach(entries, (entry) => {
          if (!fidEntry) {
            fidEntry = entry;
            console.log('FID (首次输入延迟):', fidEntry.processingStart - fidEntry.startTime);
          }
        });
      });
      
      fidObserver.observe({ type: 'first-input', buffered: true });
      
      // 监控 CLS (累积布局偏移)
      let clsValue = 0;
      let clsEntries = [];
      let lastEntryTime = 0;
      
      const clsObserver = new PerformanceObserver((entries) => {
        safeForEach(entries, (entry) => {
          if (!entry.hadRecentInput) {
            const entryTime = entry.startTime;
            const sessionWindowStart = entryTime - 1000;
            
            // 只保留最近 1 秒内的条目
            clsEntries = clsEntries.filter((e) => e.startTime >= sessionWindowStart);
            clsEntries.push(entry);
            lastEntryTime = Math.max(lastEntryTime, entryTime);
            
            // 计算当前 CLS 值
            clsValue = clsEntries.reduce((total, entry) => total + entry.value, 0);
            
            // 当会话窗口结束或页面卸载时报告 CLS
            if (entryTime - lastEntryTime > 1000 || document.visibilityState === 'hidden') {
              console.log('CLS (累积布局偏移):', clsValue);
            }
          }
        });
      });
      
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    },
    
    // 监控路由切换性能
    monitorRouteChangePerformance() {
      const navigationStart = performance.now();
      
      // 监听 DOM 内容更新
      const updateListener = () => {
        const navigationEnd = performance.now();
        const routeChangeTime = navigationEnd - navigationStart;
        
        console.log('路由切换时间:', routeChangeTime);
        
        // 移除事件监听器，避免重复触发
        document.removeEventListener('DOMContentLoaded', updateListener);
      };
      
      // 使用 setTimeout 确保在下一个事件循环中执行
      setTimeout(() => {
        document.addEventListener('DOMContentLoaded', updateListener);
      }, 0);
    },
    
    // 发送性能数据到服务器 (示例方法)
    sendPerformanceData(data) {
      // 在实际项目中，这里可以实现发送数据到服务器的逻辑
      // 由于这是演示，我们暂时只在控制台输出
      console.log('准备发送性能数据:', data);
      
      /* 示例实现：
      axios.post('/api/performance', data)
        .catch(error => {
          console.error('发送性能数据失败:', error);
        });
      */
    },
    
    // 初始化访问统计
    initVisitorTracking() {
      // 检查是否首次访问
      const isFirstVisit = !localStorage.getItem('hasVisited');
      
      if (isFirstVisit) {
        localStorage.setItem('hasVisited', 'true');
        this.recordNewVisitor();
      }
      
      // 记录访问信息
      this.recordVisitInfo();
    },
    
    // 记录新访问者
    recordNewVisitor() {
      // 获取客户端IP地址（注意：在纯前端环境中获取的IP可能不准确）
      this.getClientIp().then(ip => {
        const visitorData = {
          ip: ip || 'unknown',
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          screenSize: `${screen.width}x${screen.height}`,
          language: navigator.language
        };
        
        console.log('新访问者信息:', visitorData);
        
        // 保存IP地址到localStorage
        if (ip) {
          localStorage.setItem('visitorIp', ip);
        }
        
        // 保存访问记录
        this.saveVisitRecord({
          type: 'new_visitor',
          ...visitorData
        });
        
        // 在实际环境中，这里可以将数据发送到后端API
        // this.sendVisitorData(visitorData);
        
        // 本地存储访问信息示例
        this.updateLocalVisitCounter();
      });
    },
    
    // 记录访问信息
    recordVisitInfo() {
      const visitInfo = {
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        referrer: document.referrer,
        // 获取当前存储的IP地址
        ip: localStorage.getItem('visitorIp') || 'unknown'
      };
      
      console.log('访问信息:', visitInfo);
      
      // 保存访问记录
      this.saveVisitRecord({
        type: 'page_view',
        ...visitInfo
      });
      
      // 可以将访问信息发送到后端
    },
    
    // 跟踪页面浏览
    trackPageView(route) {
      if (!route) {
        // 如果没有提供路由对象，使用当前页面路径
        route = {
          path: window.location.pathname,
          name: 'unnamed'
        };
      }
      
      const pageViewData = {
        path: route.path,
        name: route.name || 'unnamed',
        timestamp: new Date().toISOString()
      };
      
      console.log('页面浏览:', pageViewData);
      
      // 保存页面浏览记录到localStorage
      this.saveVisitRecord({
        type: 'page_view',
        ...pageViewData
      });
      
      // 记录页面访问信息
      this.recordVisitInfo();
      
      // 可以实现更多的页面统计逻辑，如停留时间等
    },
    
    // 初始化导出功能
    initExportFunctionality() {
      // 每当有用户访问时自动更新访问统计数据
      this.updateVisitorDataOnVisit();
    },
    
    // 每当有用户访问时自动更新并保存访问统计数据
    updateVisitorDataOnVisit() {
      // 立即更新访问计数器
      this.updateLocalVisitCounter();
      
      // 立即保存数据到localStorage
      this.exportVisitorData();
      
      console.log('访问统计数据已在用户访问时自动更新');
    },
    
    // 获取客户端IP地址
    async getClientIp() {
      try {
        // 使用第三方服务获取IP地址
        // 在实际项目中，建议替换为自己的后端API
        const response = await fetch('https://api.ipify.org?format=json');
        if (response.ok) {
          const data = await response.json();
          return data.ip;
        }
      } catch (error) {
        console.error('获取IP地址失败:', error);
      }
      return null;
    },
    
    // 更新本地访问计数器
    updateLocalVisitCounter() {
      // 注意：这只是前端本地计数，无法实现跨设备统计
      let visitorCount = parseInt(localStorage.getItem('visitorCount') || '0');
      visitorCount += 1;
      localStorage.setItem('visitorCount', visitorCount.toString());
      
      console.log('当前访问计数:', visitorCount);
    },
    
    // 发送访问者数据到服务器
    sendVisitorData(data) {
      // 在实际项目中，这里可以实现发送数据到服务器的逻辑
      console.log('准备发送访问者数据:', data);
      
      /* 示例实现：
      axios.post('/api/visitors', data)
        .catch(error => {
          console.error('发送访问者数据失败:', error);
        });
      */
    },
    
    // 将访问统计数据保存到localStorage（浏览器环境下的本地存储）
    exportVisitorData() {
      // 获取所有存储的访问数据
      const visitorData = this.getAllVisitorData();
      
      // 保存数据到localStorage
      localStorage.setItem('visitorData', JSON.stringify(visitorData, null, 2));
      
      // 同时保存到visitRecords，用于历史记录
      const visitRecords = this.getVisitRecords();
      const newRecord = {
        timestamp: new Date().toISOString(),
        visitorIp: visitorData.lastVisitorIp,
        page: window.location.pathname
      };
      visitRecords.push(newRecord);
      localStorage.setItem('visitRecords', JSON.stringify(visitRecords, null, 2));
      
      console.log('访问统计数据已在用户访问时自动保存到本地存储');
      
      // 在控制台显示数据，方便用户查看和复制
      console.log('\n访问统计数据已更新，请在浏览器控制台中运行以下命令查看完整数据:\nconsole.log(JSON.parse(localStorage.getItem(\'visitorData\')))\n');
      console.log('\n或复制以下内容到visitor.json文件:\n', JSON.stringify(visitorData, null, 2));
    },
    
    // 获取所有访问数据
    getAllVisitorData() {
      // 从localStorage获取访问计数
      const visitorCount = parseInt(localStorage.getItem('visitorCount') || '0');
      
      // 获取存储的IP信息（如果有）
      const storedIp = localStorage.getItem('visitorIp');
      
      // 获取所有已知的访问记录
      const visitRecords = this.getVisitRecords();
      
      // 构建完整的统计数据
      return {
        totalVisitors: visitorCount,
        lastVisitorIp: storedIp || 'unknown',
        lastVisitTime: new Date().toISOString(),
        visitRecords: visitRecords,
        siteInfo: {
          name: document.title,
          url: window.location.origin
        }
      };
    },
    
    // 获取访问记录
    getVisitRecords() {
      // 在实际应用中，可以在这里实现从localStorage或其他存储中获取完整的访问记录
      // 这里我们返回一些示例数据结构
      const records = [];
      
      // 尝试获取存储的访问记录
      const storedRecords = localStorage.getItem('visitRecords');
      if (storedRecords) {
        try {
          return JSON.parse(storedRecords);
        } catch (error) {
          console.error('解析访问记录失败:', error);
        }
      }
      
      return records;
    },
    
    // 保存访问记录
    saveVisitRecord(record) {
      try {
        // 获取现有记录
        const records = this.getVisitRecords();
        
        // 添加新记录
        records.push(record);
        
        // 限制记录数量，避免localStorage过大
        if (records.length > 1000) {
          records.splice(0, records.length - 1000);
        }
        
        // 保存回localStorage
        localStorage.setItem('visitRecords', JSON.stringify(records));
      } catch (error) {
        console.error('保存访问记录失败:', error);
      }
    }
  }
};
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Helvetica Neue', Arial, 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height: 1.6;
  background-color: #ffffff;
}

/* 流动渐变色动画 */
@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 脉冲动画 */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* 加载环动画 */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.gradient-flow {
  background: linear-gradient(
    -45deg,
    #ff6b6b,
    #556270,
    #4ecdc4,
    #45b7d1,
    #96ceb4,
    #feca57,
    #ff9ff3,
    #54a0ff,
    #ff6b6b
  );
  background-size: 600% 600%;
  animation: gradientFlow 8s ease infinite;
  position: relative;
  overflow: hidden;
}

/* 文本渐变色 */
.text-gradient {
  background: linear-gradient(
    -45deg,
    #ff6b6b,
    #4ecdc4,
    #45b7d1,
    #feca57,
    #ff9ff3,
    #54a0ff
  );
  background-size: 600% 600%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientFlow 6s ease infinite;
  display: inline-block;
}

#app {
  min-height: 100vh;
}

/* 全局链接样式 */
a {
  color: #667eea;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #5a67d8;
}

/* 全局按钮样式 */
button {
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* 全局动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* 响应式图片 */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* 工具类 */
.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.mt-10 {
  margin-top: 10px;
}

.mt-20 {
  margin-top: 20px;
}

.mt-30 {
  margin-top: 30px;
}

.mt-40 {
  margin-top: 40px;
}

.mt-50 {
  margin-top: 50px;
}

.mb-10 {
  margin-bottom: 10px;
}

.mb-20 {
  margin-bottom: 20px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mb-40 {
  margin-bottom: 40px;
}

.mb-50 {
  margin-bottom: 50px;
}

/* 加载动画 */
.loading-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  border-top-color: #667eea;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
