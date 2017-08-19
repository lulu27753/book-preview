// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'  
Vue.use(VueRouter)

import Home from './pages/Home'
import Detail from './pages/Detail'

// 定义路由配置  
const routes = [  
    {  
        path: '/',  
        component: Home  
    },  
    {  
        path: '/detail',  
        component: Detail  
    }  
]
// 创建路由实例  
const router = new VueRouter({  
    routes  
})


Vue.config.productionTip = false

// 创建 Vue 实例
new Vue({
  el: '#app',
  data(){
  	return{
  		transitionName:'slide'
  	}
  },
  router, // 在vue实例配置中，用router  
  watch: {  
    // 监视路由，参数为目标路由和当前页面的路由  
    '$route' (to, from){  
        const toDepth = to.path.substring(0, to.path.length-2).split('/').length  
        // 官方给出的例子为 const toDepth = to.path.split('/').length 由于现在只有两个路由路径'/'和'/detail'  
        // 按照官方给的例子，这两个路由路径深度都为 2 ，所以，这里稍作调整，不知道有什么不妥  
        
        const fromDepth = from.path.substring(0, from.path.length-2).split('/').length  
        this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'  
        // 根据路由深度，来判断是该从右侧进入还是该从左侧进入  
    }
       
  }  
})
