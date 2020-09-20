import {resolve} from "path";

module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8080',
    clientSideBaseUrl: process.env.CLIENT_SIDE_BASE_URL || 'http://127.0.0.1:8080',
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'index',
        path: '/',
        component: resolve(__dirname, 'pages/index/_id.vue')
      })
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'iblogs.web',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'The web for https://iblogs.site'}
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/favicon.png'}
    ]
  },
  modules: ['bootstrap-vue/nuxt'],
  /*
 ** Plugins to load before mounting the App
 */
  plugins: ["@/plugins/main.js", "@/plugins/headroom.js", '@/plugins/icon.js'],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) {
      // 排除 nuxt 原配置的影响,Nuxt 默认有vue-loader,会处理svg,img等
      // 找到匹配.svg的规则,然后将存放svg文件的目录排除
      const svgRule = config.module.rules.find(rule => rule.test.test(".svg"));
      svgRule.exclude = [resolve(__dirname, "assets/icons/svg")];
      //添加loader规则
      config.module.rules.push({
        test: /\.svg$/, // 匹配.svg
        include: [resolve(__dirname, "assets/icons/svg")], // 将存放svg的目录加入到loader处理目录
        use: [
          {loader: "svg-sprite-loader", options: {symbolId: "icon-[name]"}}
        ]
      });
    }
  }
};

