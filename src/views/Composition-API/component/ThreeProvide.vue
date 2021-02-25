<template>
    <hr />
    <p>第三层组件</p>
    {{title}}
    <input type="text" v-model="title">
</template>
<script>
import { inject } from 'vue'
export default {
    // 2、使用(接受)
    setup() {

        let title = inject("title");
        return { title }
    }
}
</script>