import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes/index'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	next()
})

router.afterEach(() => {
	window.scrollTo(0, 0)
})

export default router
