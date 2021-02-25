<template>
    生命周期

</template>
<script>
import { onMounted } from 'vue'
export default {
    setup(){
        /**
         * 跟Mounted是同时调用的，
         * 但是写在setup中的时候，前面多加了一个on
         * 里面还是一个回调方法
         * 同时一定要引入
        */ 
        onMounted(()=>{
            console.log("onMounted");
        })
    }
}
</script>