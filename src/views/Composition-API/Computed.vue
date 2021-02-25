<template>
    计算属性
    name: <input type="text" v-model="name"> <br/>
    age: <input type="number" v-model="age"> <br />
    sex: <input type="text" v-model="sex"> <br />
    {{name}}————{{age}}————{{sex}} <br />
    {{fullName}}
</template>
<script>
import { reactive, toRefs, computed } from 'vue';
export default {
    setup() {
        const user = reactive({
            name: "啊啊",
            age: 100,
            sex: "女"
        })
        // 计算属性(多个 的时候，同下)
        let fullName = computed(() => {
            return "名字：" + user.name + "—— 年龄：" + user.age
        })
        return { ...toRefs(user),fullName }
    }
}
</script>