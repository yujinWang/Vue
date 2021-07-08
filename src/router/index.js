/*
 * @Files: 
 * @Version: 1.0
 * @Author: yujinWang
 * @Date: 2021-07-08 15:02:40
 * @LastEditors: yujinWang
 * @LastEditTime: 2021-07-08 16:39:14
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/provide',
    component: () => import('@/views/provide/Provide1')
  },
  {
    path: '/keepalive',
    component: () => import('@/views/keepalive/KeepAlive1')
  }
]

// const createRouter = () => {
//   new Router({
// 		mode: 'hash', // require service support ???
// 		scrollBehavior: () => ({
// 			y: 0,
// 		}),
//     routes: constantRoutes
//   })
// }

const router = new Router({
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes
})

// const router = createRouter()
console.log('router',router)

export default router
