/*
 * @Author: your name
 * @Date: 2020-09-09 22:45:35
 * @LastEditTime: 2020-09-18 00:15:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \core-app\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes/index'
import Home from '@/views/home'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        ...routes
    ]
})

router.beforeEach((to, from, next) => {
    next()
})

router.afterEach(() => {
    window.scrollTo(0, 0);
})

export default router
