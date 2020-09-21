<!--  -->
<template>
    <div class="test-right">
        <h1>属性配置</h1>
        <component
            v-for="(val,key) in atViewLayout.pSchema.props"
            :key="key"
            :is="`o-${val.render}`"
            :options="{key:key,val:cSchema[key],op:val}"
        ></component>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ControllersComponents } from "./components/options/index";
export default {
    name: "test-right",
    components: { ...ControllersComponents },
    data() {
        // 这里存放数据
        return {};
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapGetters("msgCenter", {
            atViewLayout: "getAtViewLayout",
            puid: "getPuid",
            cid: "getCid",
            cSchema: "getCSchema",
        }),
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {},
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {},
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
<style lang='scss' scoped></style>
