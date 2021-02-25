<template>
    监听器
    <button @click="a++">a ———— {{a}}</button>
    <button @click="b++">b ———— {{b}}</button>
</template>
<script>
import { reactive, ref, toRefs, watch, watchEffect } from 'vue'
export default {
    setup() {
        /*
        let a = ref(1);
        let b = ref(2);

        function fun1() {
            a.value = a.value + 1;
        }
        watch(() => {
            // 这里面写那个 就监听那个的变化
            console.log(a.value, b.value);
        })
        watchEffect(() => {
            console.log(a.value, b.value);
        })
        // 只监听一个的变化(具体监听 某一个)，还可以确定新值和旧值，并且可以监听多个值，那么就要写成数组watch([a, b], ([newsA, newsB,], [oldsA, oldsB]) => {
        watch(a, (news, olds) => {
            console.log("监听a的变化", a.value, "新值", news, "旧值", olds);
        }, { immediate: true }) //immediate:true 加他可以默认执行一次
        return { a, b, fun1 }
        */
        const user = reactive({
            a: 1,
            b: 2
        })
        // 监听对象里面某个值的变化(监听多个的时候，使用数组)
        watch(() => user.a, (news, olds) => {
            console.log(news, olds);
        })
        /*
        // 当监听某个值的时候，，就不能监听整个对象，负责会报错
        watchEffect(() => {
            console.log("我是watchEffect，默认会打印一次", a);
        })
        watch(user, () => {
            console.log("监听整个对象，任何一个变化，他都能监听到");
        }, { immediate: true })
        //这个 可以监听变化，但是 不可以具体到那个变化了
        watch(user, (news, olds) => {
            console.log(news, olds);
        })
        */
       
        return { ...toRefs(user) }
    }
}
</script>