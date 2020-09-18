<!--
 * @Author: white 500 <964412664@qq.com>
 * @Description: 首页
 * @Date: 2020-09-17 23:21:41
-->
<template>
    <div class="container">
        <div class="left-panel">左侧菜单</div>
        <div class="middle-panel">中间显示表单</div>
        <div class="right-panel">右侧菜单</div>
    </div>
</template>

<script>
// import RightPanel from './component/RightPanel'
export default {
    components: {
        // RightPanel
    },
    data() {
        return {
            title: "",
        };
    },
};
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    width: 100%;
    height: 100%;
}
.left-panel {
    width: 260px;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    border-right: 1px solid #eee;
}
.middle-panel {
    height: 100vh;
    margin: 0 300px 0 260px;
}
.right-panel {
    width: 300px;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    border-left: 1px solid #eee;
}
</style>
