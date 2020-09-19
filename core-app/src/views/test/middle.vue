<!--  -->
<template>
    <div class="test-middle">
        <div v-for="item in viewLayout" :key="item.cid">
            {{item.cid}}
            <a-button type="danger" @click="deleteView(item.cid)">删除</a-button>
        </div>
    </div>
</template>

<script>
import {
    getViewLayout,
    updateViewLayout,
    deleteViewLayout,
} from "./utils/index";
import { mapGetters } from "vuex";
export default {
    name: "test-middle",
    components: {},
    data() {
        // 这里存放数据
        return {
            viewLayout: {},
        };
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapGetters("msgCenter", {
            puid: "getPuid",
            cid: "getCid",
            pSchema: "getPSchema",
        }),
    },
    // 监控data中的数据变化
    watch: {
        cid: {
            handler(newVal) {
                const blood = {
                    puid: this.puid,
                    cid: newVal,
                    params: this.pSchema,
                };
                this.viewLayout = this._.cloneDeep(updateViewLayout(blood));
            },
        },
    },
    // 方法集合
    methods: {
        deleteView(cid) {
            this.viewLayout = this._.cloneDeep(deleteViewLayout(cid));
        },
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.viewLayout = this._.cloneDeep(getViewLayout());
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
