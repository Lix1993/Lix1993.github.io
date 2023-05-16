const headConf = require('./configs/headConf')
const pluginConf = require('./configs/pluginsConf')
const themeConf = require('./configs/themeConf')
const markdownConf = require('./configs/markdownConf')

module.exports = {
  title: "简历 for Li Xing",
  description: "简历 for Li Xing",
  head: headConf,
  base: "/",
  dest: "./dist",

  themeConfig: themeConf,
  plugins: pluginConf,
  markdown: markdownConf,

  locales: {
    '/': {
      lang: 'zh-CN',
    },
  }
};