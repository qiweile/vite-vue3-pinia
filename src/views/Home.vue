<template>
    <div>
        hello Home
        <button @click="login">点击</button>
    </div>
</template>

<script>
import { defineComponent } from "vue"
import {getLoginCodeApi} from '@/api/login'
export default defineComponent({
    setup() {
        //应用列表
        function login() {
            console.log("我接收到了点击事件" );
            let url = "/xacloud-gfm/qtm-warning-config/page"
            let params = {
                currentPage:1,
                size:10
            }
            getLoginCodeApi().then(res => {
                console.log(res,'请求返回值');
            }).catch(error => {
                // console.log(`请求错误：${error} + 接口 /xacloud-gfm/qtm-friendly-links/page`);
            })
            // axios.get("/xacloud-gfm/qtm-warning-config/page").then(res => {

            // })
        }
        return { login };
    },
});
</script>

<style lang="scss" scoped>

</style>