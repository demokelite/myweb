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
    
    // 监听路由变化，监控页面切换性能
    this.$router.afterEach(() => {
      this.monitorRouteChangePerformance();
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
