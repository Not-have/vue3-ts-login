<template>
    详情
    <p>{{$route.params.id}}</p>
    {{id}}
    <p>{{detailsId}}</p>
</template>
<script>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from "vue-router";
export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        let detailsId = ref(route.params.id);
        watch(()=>route.params,(news)=>{
            detailsId.value = news.id;
        })


        return { detailsId }
    },
    computed: {
        // 原来的方法
        id() {
            return this.$route.params.id
        }
    }
}
</script>