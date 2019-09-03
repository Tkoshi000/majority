//import Vue from 'vue'
import Router from 'vue-router'
import About from './Views/About.vue'
import Page1 from './Views/Page1.vue'
import Page2 from './Views/Page2.vue'
 
// vue-router の呼び出し
//Vue.use(Router)
 
// importしたときにこのルーターインスタンスを呼び出す
export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    }
  ]
})