import Vue from 'vue'
import App from '@/App.vue'
/* @是一个别名，代表src路径 */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
