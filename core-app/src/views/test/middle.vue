<!--  -->
<template>
    <div class="test-middle">
        <h1>布局视图</h1>
        <ul>
            <li
                v-for="item in viewLayout"
                :key="item.cid"
                :class="item.cid === cid ? 'ac' : ''"
                @click="acViewLayout(item)"
            >
                <component :is="item.label" :options="item"></component>
            </li>
        </ul>
    </div>
</template>

<script>
import { getViewLayout, getOlineViewLayout, updateAllViewLayout } from "@u";
import { mapGetters, mapActions } from "vuex";
import { ControllersComponents } from "./components/viewLayout/index";
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
            atViewLayout: "getAtViewLayout",
            puid: "getPuid",
            cid: "getCid",
        }),
    },
    // 监控data中的数据变化
    watch: {
        "atViewLayout.cSchema": {
            handler(newVal) {
                this.viewLayout = updateAllViewLayout(this.cid, newVal);
            },
            deep: true,
        },
    },
    // 方法集合
    methods: {
        ...mapActions("msgCenter", ["_setAtViewLayout"]),
        acViewLayout(active) {
            const onLineViewLayout = getOlineViewLayout(active.cid);
            console.log(onLineViewLayout);
            this._setAtViewLayout(onLineViewLayout);
        },
    },
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
.test-middle {
    & > ul {
        width: 90%;
        li {
            width: 100%;
            padding: 10px 0;
            background-color: #fff;
        }
        li + li {
            margin-top: 20px;
        }
        li.ac {
            background-color: red;
        }
    }
}
</style>
