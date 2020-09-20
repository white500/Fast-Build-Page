<!--  -->
<template>
    <div class="test-index">
        <!-- 仓库视图 -->
        <test-left></test-left>
        <!-- 布局视图 -->
        <test-middle></test-middle>
        <!-- 属性/行为视图 -->
        <test-right></test-right>
    </div>
</template>

<script>
import { cacheDelete } from "@u";
import TestLeft from "./left";
import TestMiddle from "./middle";
import TestRight from "./right";
export default {
    name: "test-index",
    components: {
        TestLeft,
        TestMiddle,
        TestRight,
    },
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        cacheDelete();
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
.test-index {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .test-left,
    .test-right {
        flex: 0.3;
        background-color: #eee;
    }
    .test-middle {
        flex: 1;
        background-color: #666;
    }
}
</style>
