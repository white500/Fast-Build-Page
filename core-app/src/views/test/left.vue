<!--  -->
<template>
    <div class="test-left">
        <h1>组件仓库</h1>
        <a-button
            v-for="item in house"
            :key="item.PUID"
            type="primary"
            @click="getWarehouse(item)"
        >{{item.name}}</a-button>
    </div>
</template>

<script>
import { createGuid, filterOptions, updateViewLayout } from "@u";
import house from "@/views/test/house";
import { mapActions } from "vuex";
import Warehouse from "./json";
export default {
    name: "test-left",
    components: {},
    data() {
        // 这里存放数据
        return {
            house: Warehouse,
        };
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        ...mapActions("msgCenter", [
            "_setPuid",
            "_setCid",
            "_setPSchema",
            "_setCSchema",
        ]),
        getWarehouse(item) {
            const puid = item.PUID;
            const cid = createGuid();
            const pSchema = house[puid];
            const cSchema = filterOptions(pSchema.props);
            const controlParms = {
                label: pSchema.title,
                puid: puid,
                cid: cid,
                pSchema: pSchema,
                cSchema: cSchema,
            };
            this._setPuid(controlParms.puid);
            this._setCid(controlParms.cid);
            this._setPSchema(controlParms.pSchema);
            this._setCSchema(controlParms.cSchema);
            updateViewLayout(controlParms);
        },
    },
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
