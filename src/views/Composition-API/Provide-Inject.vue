<template>
    Provide和Inject的使用
    <h1>跟</h1>
    {{title}}
    <input type="text" v-model="title">
    <TwoProvide />
</template>
<script>
import { ref, provide } from "vue";
import TwoProvide from "./component/TwoProvide.vue";
export default {
    components: {
        TwoProvide
    },
    setup() {
        let title = ref("这是跟组件或者页面提供的数据");
        // 1、注入(也就是 提供数据，但是 传统方式，无法响应数据，也就后代组件里面的值，不会改变)
        provide("title", title);

        return { title };
    }
}
</script>