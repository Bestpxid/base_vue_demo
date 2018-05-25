// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import vuexI18n from 'vuex-i18n'
import VueQuillEditor from 'vue-quill-editor'
import 'font-awesome/css/font-awesome.min.css'
import BaiduMap from 'vue-baidu-map'
import VueAMap from 'vue-amap'
import filter from '../src/filter/filter'
import {LoadingPlugin, ConfigPlugin} from 'vux'
import axios from 'axios'
import commonFn from './assets/js/global'

router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from) => {
  let title = to.meta.title
  console.log(title)
  commonFn.wxSetTitle(title)
})

Vue.use(Vuex) // 必须放在store之前
Vue.use(VueQuillEditor)
Vue.use(LoadingPlugin)
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX'
})
// 验证
Vue.prototype.regexConfig = function () {
  var reg = {
    email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
    phone: /^1(3|4|5|7|8|9)\d{9}$/,
    smsCode: /^\d{6}$/,
    name: /[^\u4E00-\u9FA5]/g,
    expressNum: /[^A-Za-z0-9]/ig,
    money: /\D/g
  }
  return reg
}
Vue.prototype.$http = axios
const store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})
// store.registerModule('vux', {
//   state: {
//     demoScrollTop: 0
//   },
//   mutations: {
//     updateDemoPosition (state, payload) {
//       state.demoScrollTop = payload.top
//     }
//   },
//   actions: {
//     updateDemoPosition ({commit}, top) {
//       commit({type: 'updateDemoPosition', top: top})
//     }
//   }
// })
Vue.use(vuexI18n.plugin, store)

// Vue.use(DevicePlugin)
// Vue.use(ToastPlugin)
// Vue.use(AlertPlugin)
// Vue.use(ConfirmPlugin)
// Vue.use(LoadingPlugin)
// Vue.use(WechatPlugin)

Vue.config.productionTip = false
Vue.use(vuexI18n)
Vue.use(VueRouter)
Vue.use(BaiduMap, {
  ak: 'Asl6V7EznWrV68LK3sEqotSuNOGyLFnX'
})
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'b058a67be1e1dd059b8610cb6bca554e',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation']
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  filter
})
