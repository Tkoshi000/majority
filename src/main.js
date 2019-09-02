import Vue from 'vue'
import App from './App.vue'
import About from './Views/About.vue'
import router from './router.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(About)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
