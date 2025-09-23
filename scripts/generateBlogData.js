const fs = require('fs');
const path = require('path');

// 定义博客目录和输出JSON文件路径
const BLOGS_DIR = path.join(__dirname, '..', 'public', 'blogs');
const OUTPUT_JSON = path.join(__dirname, '..', 'src', 'data', 'blogData.json');

/**
 * 确保目录存在
 * @param {string} dirPath - 目录路径
 */
function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * 从Markdown文件中提取元数据和内容
 * @param {string} filePath - 文件路径
 */
function extractBlogInfo(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath, '.md');
    
    // 生成博客ID（基于文件名，使用更健壮的方法处理中文）
    // 首先移除文件扩展名，然后将中文和空格替换为连字符
    const id = fileName
      .toLowerCase()
      .replace(/[\s\u4e00-\u9fa5]+/g, '-') // 替换中文和空格为连字符
      .replace(/[^a-z0-9-]/g, '') // 移除非字母数字和连字符的字符
      .replace(/-+/g, '-') // 合并多个连字符为一个
      .replace(/^-|-$/g, ''); // 移除首尾的连字符
    
    // 如果ID为空，使用时间戳作为备用
    const finalId = id || `blog-${Date.now()}`;
    
    // 尝试从文件内容中提取标题（寻找第一个H1或H2标签）
    let title = fileName;
    const titleMatch = content.match(/^#{1,2}\s+(.*?)(\n|$)/);
    if (titleMatch) {
      title = titleMatch[1];
    }
    
    // 尝试从文件内容中提取日期
    let date = new Date().toISOString().split('T')[0];
    const dateMatch = content.match(/\d{4}-\d{2}-\d{2}/);
    if (dateMatch) {
      date = dateMatch[0];
    }
    
    // 提取摘要（前150个字符，移除换行符）
    const plainText = content.replace(/^#{1,6}\s+/gm, '').replace(/[*_`]/g, '').replace(/\n/g, ' ');
    const excerpt = plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;
    
    return {
      id: finalId,
      title,
      date,
      author: '知识混子',
      excerpt: excerpt.replace(/[\r\n]/g, ' ').trim(), // 移除回车符和换行符
      filePath: `/blogs/${fileName}.md`,
      wordCount: plainText.split(/\s+/).length
    };
  } catch (error) {
    console.error(`处理文件 ${filePath} 时出错:`, error);
    return null;
  }
}

/**
 * 生成博客数据JSON文件
 */
function generateBlogData() {
  try {
    console.log('开始生成博客数据...');
    
    // 确保博客目录存在
    if (!fs.existsSync(BLOGS_DIR)) {
      console.warn(`博客目录 ${BLOGS_DIR} 不存在，创建空的博客数据文件`);
      ensureDirExists(path.dirname(OUTPUT_JSON));
      fs.writeFileSync(OUTPUT_JSON, JSON.stringify([], null, 2), 'utf-8');
      console.log('已创建空的博客数据文件');
      return;
    }
    
    // 读取博客目录中的所有.md文件
    const files = fs.readdirSync(BLOGS_DIR)
      .filter(file => path.extname(file).toLowerCase() === '.md')
      .map(file => path.join(BLOGS_DIR, file));
    
    console.log(`找到 ${files.length} 个博客文件`);
    
    // 提取每个文件的信息
    const blogList = files
      .map(filePath => extractBlogInfo(filePath))
      .filter(blogInfo => blogInfo !== null)
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // 按日期降序排列
    
    // 确保输出目录存在
    ensureDirExists(path.dirname(OUTPUT_JSON));
    
    // 写入JSON文件
    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(blogList, null, 2), 'utf-8');
    
    console.log(`成功生成博客数据文件: ${OUTPUT_JSON}`);
    console.log(`共包含 ${blogList.length} 篇博客文章`);
    
  } catch (error) {
    console.error('生成博客数据时出错:', error);
  }
}

/**
 * 设置文件系统监听，在博客文件变化时自动更新数据
 */
function setupFileWatcher() {
  if (!fs.existsSync(BLOGS_DIR)) {
    console.warn(`博客目录 ${BLOGS_DIR} 不存在，无法设置监听`);
    return;
  }
  
  console.log(`设置文件监听: ${BLOGS_DIR}`);
  
  // 监听目录变化
  fs.watch(BLOGS_DIR, { recursive: false }, (eventType, filename) => {
    if (filename && path.extname(filename).toLowerCase() === '.md') {
      console.log(`检测到博客文件变化: ${eventType} ${filename}`);
      // 延迟执行，确保文件操作完成
      setTimeout(generateBlogData, 500);
    }
  });
}

/**
 * 主函数
 */
function main() {
  // 立即生成一次数据
  generateBlogData();
  
  // 检查是否需要设置监听
  const shouldWatch = process.argv.includes('--watch');
  if (shouldWatch) {
    setupFileWatcher();
    console.log('文件监听已启动，按Ctrl+C停止');
    // 保持进程运行
    process.stdin.resume();
  }
}

// 执行主函数
main();