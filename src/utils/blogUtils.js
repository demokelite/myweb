// 博客相关工具函数

/**
 * 获取博客列表
 * 从生成的JSON文件中读取博客列表数据
 */
export const getBlogList = async () => {
  try {
    // 首先尝试从生成的JSON文件中读取博客列表
    let blogList = [];
    
    try {
      // 在开发环境中，我们可以动态导入JSON文件
      if (process.env.NODE_ENV === 'development') {
        const blogData = await import('@/data/blogData.json');
        blogList = blogData.default || [];
      } else {
        // 在生产环境中，使用fetch获取JSON文件
        const response = await fetch('/data/blogData.json');
        blogList = await response.json();
      }
    } catch (importError) {
      console.warn('无法从JSON文件获取博客列表，使用模拟数据:', importError);
      // 如果无法加载JSON文件，使用模拟数据
      blogList = [
        {
          id: 'future-tech-trends',
          title: '未来风口：技术革命与可持续发展双轮驱动下的产业新格局',
          date: '2024-01-15',
          author: '知识混子',
          excerpt: '2030年，全球人工智能市场规模预计将达到1548亿美元，而生物经济规模更将飙升至30万亿美元——这组惊人的数据背后，是技术突破与市场需求的共振，正在重塑全球产业格局。',
          filePath: '/blogs/未来风口：技术革命与可持续发展双轮驱动下的产业新格局.md'
        }
      ];
    }
    
    // 按日期降序排列
    return blogList.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('获取博客列表失败:', error);
    return [];
  }
};

/**
 * 获取博客文章内容
 * @param {string} blogId - 博客ID
 */
export const getBlogContent = async (blogId) => {
  try {
    // 先获取博客列表，找到对应的博客信息
    const blogList = await getBlogList();
    const blogInfo = blogList.find(blog => blog.id === blogId);
    
    if (!blogInfo) {
      console.error('未找到博客文章:', blogId);
      return null;
    }
    
    // 获取博客文章内容
    const response = await fetch(blogInfo.filePath);
    if (!response.ok) {
      throw new Error(`无法获取博客内容: ${response.status}`);
    }
    
    const content = await response.text();
    
    return {
      ...blogInfo,
      content: content
    };
  } catch (error) {
    console.error('获取博客内容失败:', error);
    // 如果出错，尝试返回模拟数据
    try {
      const response = await fetch('/blogs/未来风口：技术革命与可持续发展双轮驱动下的产业新格局.md');
      const content = await response.text();
      
      return {
        id: 'future-tech-trends',
        title: '未来风口：技术革命与可持续发展双轮驱动下的产业新格局',
        date: '2024-01-15',
        author: '知识混子',
        content: content
      };
    } catch (fallbackError) {
      console.error('获取模拟博客内容也失败:', fallbackError);
      return null;
    }
  }
};

/**
 * 监听博客文件变化（仅在开发环境有效）
 */
export const watchBlogFiles = () => {
  // 在实际开发中，这里可以使用WebSocket或其他方式监听文件变化
  // 由于是模拟环境，我们不实现真正的监听功能
  console.log('博客文件监听已启动');
  
  // 返回取消监听的函数
  return () => {
    console.log('博客文件监听已停止');
  };
};

/**
 * 解析Markdown文件头部信息
 * @param {string} markdown - Markdown内容
 */
export const parseMarkdownMeta = (markdown) => {
  const metaMatch = markdown.match(/^---\s*([\s\S]*?)\s*---/);
  if (metaMatch) {
    const metaContent = metaMatch[1];
    const metaLines = metaContent.split('\n');
    const meta = {};
    
    metaLines.forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        meta[key.trim()] = valueParts.join(':').trim();
      }
    });
    
    return meta;
  }
  
  return {};
};

/**
 * 提取Markdown摘要
 * @param {string} markdown - Markdown内容
 * @param {number} length - 摘要长度
 */
export const extractMarkdownExcerpt = (markdown, length = 150) => {
  // 移除Markdown格式
  const plainText = markdown
    .replace(/^---\s*([\s\S]*?)\s*---/, '') // 移除YAML front matter
    .replace(/#+\s+/g, '') // 移除标题
    .replace(/\*\*|\*/g, '') // 移除加粗和斜体
    .replace(/`[^`]+`/g, '') // 移除行内代码
    .replace(/```[\s\S]*?```/g, '') // 移除代码块
    .replace(/!\[.*?\]\(.*?\)/g, '') // 移除图片
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 移除链接，但保留链接文本
    .replace(/\n+/g, ' ') // 将换行符替换为空格
    .trim();
  
  // 返回指定长度的摘要
  return plainText.length > length ? plainText.substring(0, length) + '...' : plainText;
};