/**
 * 控件仓库
 */
import HButton from './h-button/index.vue'
// 已挂在控件列表
const controllers = [
    HButton
]

// 定义 install 方法
const installs = Vue => {
    if (installs.installed) return
    installs.installed = true

    // 遍历注册所有控件
    controllers.map(component => Vue.component(component.name, component))
}

// 检测 Vue 存在即执行
if (typeof window !== 'undefined' && window.Vue) {
    installs(window.Vue)
}

const ControllersComponents = {};
controllers.forEach(item => {
    ControllersComponents[item.name] = item;
})

export {
    HButton,
    ControllersComponents
}

export default {
    installs
}
