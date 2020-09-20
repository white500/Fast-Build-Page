<!--  -->
<template>
    <div class="test-middle">
        <h1>布局视图</h1>
        <component
            v-for="item in viewLayout"
            :key="item.cid"
            :is="item.label"
            :options="item.cSchema"
        ></component>
    </div>
</template>

<script>
import { getViewLayout } from "@u";
import { mapGetters } from "vuex";
import { ControllersComponents } from "./components/index";
export default {
    name: "test-middle",
    components: { ...ControllersComponents },
    data() {
        // 这里存放数据
        return {
            viewLayout: [],
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapGetters("msgCenter", {
            puid: "getPuid",
            cid: "getCid",
            pSchema: "getPSchema",
            cSchema: "getCSchema",
        }),
    },
    // 监控data中的数据变化
    watch: {
        cid: {
            handler() {
                this.viewLayout = getViewLayout();
            },
        },
    },
    // 方法集合
    methods: {},
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.viewLayout = getViewLayout();
    },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, // 生命周期 - 创建之前
    beforeMount() {}, // 生命周期 - 挂载之前
    beforeUpdate() {}, // 生命周期 - 更新之前
    updated() {}, // 生命周期 - 更新之后
    beforeDestroy() {}, // 生命周期 - 销毁之前
    destroyed() {}, // 生命周期 - 销毁完成
    activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
</style>
