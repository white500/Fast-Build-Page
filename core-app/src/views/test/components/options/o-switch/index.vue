<!--  -->
<template>
    <div class="o-switch">
        {{options.op.label}}
        <br />
        {{options.op.description}}
        <a-switch v-model="checked" @change="onChange" />
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "o-switch",
    components: {},
    props: {
        options: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        //这里存放数据
        return {
            checked: this.options.val,
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {
        options: {
            handler(newVal) {
                this.checked = newVal.val;
            },
        },
    },
    //方法集合
    methods: {
        ...mapActions("msgCenter", ["_updateAtViewLayout"]),
        onChange(isFlg) {
            this._updateAtViewLayout({
                key: this.options.key,
                val: this.checked,
            });
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
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
</style>
