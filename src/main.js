import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import qs from 'qs'
import ElementUI from 'element-ui';
import countTo from 'vue-count-to';
import 'element-ui/lib/theme-chalk/index.css';
import './api/request'

Vue.use(ElementUI);

Vue.use(countTo)

Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
