<template>
    路由api

    <div>
        <div id="menu">
            <router-link v-for="item in list" :key="item.id" :to="'/router-api/details/' + item.id">{{item.title}}</router-link>
            <hr />
            <router-link :to="{path:'/router-api/article',query:{name:'啊啊啊',age:22}}">跳转</router-link>
            <button @click="$router.push({path:'/router-api/article',query:{name:'哈哈哈',age:222}})">跳转</button>
        </div>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue'
export default {
    setup() {
        let list = reactive([
            { title: "列表一", id: 1 },
            { title: "列表二", id: 2 },
            { title: "列表三", id: 3 },
            { title: "列表四", id: 4 }
        ])
        return { list }
    }
}
</script>
<style scoped>
a {
    display: block;
    margin-top: 20px;
}
#menu {
    width: 30%;
    background: orchid;
    height: 300px;
    float: left;
}
#content {
    width: 70%;
    background: palegreen;
    height: 300px;
    float: right;
}
</style>