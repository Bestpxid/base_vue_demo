import Vue from 'vue'

export default (function () {
  /* 时间戳转为 yyyy--MM--dd */
  Vue.filter('time_yMd', function (value) {
    return value
  })
})()
