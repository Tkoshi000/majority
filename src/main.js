import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import About from './Views/About.vue'
//import router from './router/index.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
var VueRouter = require('vue-router')

Vue.use(BootstrapVue)
Vue.use(About)
//Vue.use(router)
Vue.use(VueRouter)

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAQx8yfe9eECUzPV9zMVM48HT9affc29k4",
  authDomain: "metromaj-f5599.firebaseapp.com",
  databaseURL: "https://metromaj-f5599.firebaseio.com/",
  projectId: "metromaj-f5599",
  storageBucket: "metromaj-f5599.appspot.com",
  messagingSenderId: "505049650501"
}
firebase.initializeApp(config)

/* eslint-disable no-new 
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})*/


new Vue({
 //router,
  render: h => h(App),
}).$mount('#app')

