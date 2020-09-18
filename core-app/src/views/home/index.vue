<!--
 * @Author: white 500 <964412664@qq.com>
 * @Description: 首页
 * @Date: 2020-09-17 23:21:41
-->
<template>
    <div class="container">
        <div class="left-panel">
            <div class="f-list">
                <div class="f-list-item">
                    <div class="f-title">
                        输入型组件
                    </div>
                    <div class="f-block">
                        <div class="f-item">单行文本</div>
                        <div class="f-item">多行文本</div>
                        <div class="f-item">密码</div>
                        <div class="f-item">计数器</div>
                    </div>
                </div>
            </div>
        </div>
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
            leftList: {

            }
        };
    },
};
</script>

<style scoped>
.container {
    position: relative;
    width: 100%;
    height: 100%;
}
/* -------- 左边面板开始 ---------  */
.left-panel {
    width: 260px;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px;
    border-right: 1px solid #eee;
    box-sizing: border-box;
}

.f-title {
    font-size: 14px;
    color: #222;
    margin: 6px 2px;
}
.f-block {
    font-size: 0;
}
.f-block .f-item {
    display: inline-block;
    padding: 8px;
    font-size: 12px;
    width: calc(50% - 3px);
    color: #fff;
    background-color: var(--green);
    border: 1px solid var(--green);
    border-radius: 5px;
}
.f-block .f-item:nth-child(2n-1) {
    margin-right: 3px;
    margin-bottom: 3px;
}
.f-block .f-item:nth-child(2n) {
    margin-left: 3px;
}
.f-block .f-item:hover {
    cursor: move;
    border: 1px dashed red;
}
/* -------- 左边面板结束 --------- */

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
