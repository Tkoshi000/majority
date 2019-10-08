import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Output from '@/components/Output' //①
import Metro from '@/components/Metro' 


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    //②profile
    {
      path: '/outputs',
      name: 'Output',
      component: Output
    }
    ,
    {
      path: '/metros',
      name: 'Metro',
      componet: Metro
    }
  ]
})
