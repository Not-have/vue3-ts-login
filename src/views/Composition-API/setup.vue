<template>
    <div>
        {{data.count}} <br />
        {{data.double}} <br />
        <button @click="fun">增加</button>
        <hr />
        <SubComp num="22" text="你好" @myEmit="myEmit">
            <p>插槽</p>
        </SubComp>
    </div>
</template>
<script>
/**
 * 如果 定义对象，就要引入reactive，使用计算属性之前 也要引入
 */
import { computed, reactive } from "vue";
import SubComp from "./component/SubComp.vue";
export default {
    components:{
        SubComp
    },
    setup() {
        const data = reactive({
            count: 1,
            // 下面这块如果是一行代码 就可以不return，加花括号 就要return
            double: computed(() => data.count * 2)
        });
        function fun() {
            data.count++
        };
        function myEmit(val){
            console.log(val);
        }
        // 不管是方法，还是变量 只要在模板里面使用就要return返回
        return { data, fun, myEmit }
    }
}
</script>