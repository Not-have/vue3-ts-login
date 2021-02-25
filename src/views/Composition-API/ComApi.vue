<template>
    <div>
        常用api
        <hr />
        {{num}}
        <input type="text" v-model="num">
        <br />
        <!-- {{fun(2)}} -->

        <hr />
        <!-- {{user.name}} -->
        {{name}}
        {{num2}}
    </div>
</template>
<script>
// 需要引入
import { reactive, ref, toRefs, readonly, isRef } from "vue";
export default {
    setup() {
        let num = ref(0);
        let fun = (val) => {
            num.value = val;
        }

        //isRef() 判断是否是响应式的

        // 用 reactive 声明 也可以是响应式的
        let user = reactive({
            name: "啊啊啊",
            age: 18,
            num2: num //把ref声明的放在这个 里面，就不用value值了
        })
        function fun2() {
            user.num2 = 100
        }
        fun2();
        // 通过readonly()就可以吧响应式数据变成 不响应的


        //return { num, fun, user }//这样导出一个对象，取值的时候，需要点，那么就可以使用json对象 或者 ...(扩展运算符),只不过 这样展开，数据就不是相应式的了
        //return { num, fun, ...user } //这样就不能响应式了（...）
        return { num, fun, ...toRefs(user) } //引入了这个api，使用了扩展运算符之后，他就又可以响应了
    }
}
</script>