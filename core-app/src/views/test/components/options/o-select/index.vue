<!--  -->
<template>
    <div class="o-select">
        {{options.op.label}}
        <br />
        {{options.op.description}}
        <a-select v-model="value" @change="handleChange">
            <a-select-option
                v-for="(item,index) in options.op.options"
                :key="index"
                :value="item"
            >{{item}}</a-select-option>
        </a-select>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "o-select",
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
            value: this.options.val,
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {
        options: {
            handler(newVal) {
                this.value = newVal.val;
            },
        },
    },
    //方法集合
    methods: {
        ...mapActions("msgCenter", ["_updateAtViewLayout"]),
        handleChange(val) {
            this._updateAtViewLayout({
                key: this.options.key,
                val: this.value,
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
