import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Page1 from './views/Page1.vue'
import Page2 from './views/Page2.vue'
 
// vue-router の呼び出し
Vue.use(Router)
 
// importしたときにこのルーターインスタンスを呼び出す
export default new Router({
  routes: [
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