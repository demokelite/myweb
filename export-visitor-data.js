// 导出访问统计数据到visitor.json文件的辅助脚本
// 使用方法：在浏览器控制台中粘贴并执行此脚本

(function() {
  console.log('===== 访问统计数据导出工具 =====');
  
  try {
    // 从localStorage获取访问统计数据
    const visitorData = localStorage.getItem('visitorData');
    
    if (visitorData) {
      // 解析数据确保格式正确
      const parsedData = JSON.parse(visitorData);
      
      // 格式化数据以便于阅读
      const formattedData = JSON.stringify(parsedData, null, 2);
      
      console.log('\n✓ 成功获取访问统计数据！');
      console.log('\n数据概览:');
      console.log('• 总访问量:', parsedData.totalVisitors);
      console.log('• 最后访问IP:', parsedData.lastVisitorIp);
      console.log('• 最后访问时间:', parsedData.lastVisitTime);
      console.log('• 访问记录数量:', parsedData.visitRecords ? parsedData.visitRecords.length : 0);
      
      // 创建下载链接
      const blob = new Blob([formattedData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'visitor.json';
      
      // 显示数据供用户复制
      console.log('\n请复制以下数据到项目根目录的visitor.json文件中:');
      console.log(formattedData);
      
      // 自动触发下载
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      console.log('\n✓ 数据已自动下载为visitor.json文件');
      console.log('\n===== 导出完成 =====');
    } else {
      console.log('\n✗ 未找到访问统计数据');
      console.log('可能原因：您的浏览器中没有存储访问统计数据，或者数据已被清除。');
      console.log('请访问网站后再尝试导出。');
      
      // 创建示例数据供用户参考
      const sampleData = {
        totalVisitors: 0,
        lastVisitorIp: 'unknown',
        lastVisitTime: new Date().toISOString(),
        visitRecords: [],
        siteInfo: {
          name: document.title,
          url: window.location.origin
        }
      };
      
      console.log('\n示例数据格式（可复制到visitor.json文件）:');
      console.log(JSON.stringify(sampleData, null, 2));
    }
  } catch (error) {
    console.error('\n✗ 导出数据时发生错误:', error);
    console.log('请刷新页面后重试，或者手动复制localStorage中的visitorData数据。');
  }
})();