import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import _ from 'lodash'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.prototype._ = _;

Vue.use(Antd)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
