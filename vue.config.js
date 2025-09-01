const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = process.env.VUE_APP_TITLE || '知识混子的网站';
        return args;
      });
  }
});
