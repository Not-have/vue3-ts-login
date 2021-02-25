<template>
    文章
    <p>{{$route.query.name}}</p>

</template>
<script>
import { ref } from 'vue';
import { useRoute, useRouter } from "vue-router";
export default {
     setup() {
        const route = useRoute();
        const router = useRouter();
        //这里只执行一次，多个参数的时候，用监听
        console.log(route.query.name);
    },
}
</script>