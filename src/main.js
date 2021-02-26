import Vue from 'vue'
import App from './App.vue'

// vue-router
import VueRouter from 'vue-router'
// Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导相对时间插件
import relativeTime from 'dayjs/plugin/relativeTime'
// 国际化
import 'dayjs/locale/zh-cn'
// permission control
import '@/permission'
// 引入自定义全局样式
import './assets/app.css'
import './assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css'

import router from './router'
import store from './store'
// gitalk评论
import 'gitalk/dist/gitalk.css'

Vue.use(VueRouter)

Vue.use(Buefy)

Vue.use(ElementUI)

const dayjs = require('dayjs')

// 相对时间插件
dayjs.extend(relativeTime)

dayjs.locale('zh-cn') // use locale globally
dayjs().locale('zh-cn').format() // use locale in a specific instance

Vue.prototype.dayjs = dayjs// 可以全局使用dayjs

Vue.config.productionTip = false

Vue.directive('title', {
  inserted: function(el, binding) {
    console.log(el)
    console.log(binding)
    // document.title = el.dataset.title
    // document.title = binding.value
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
