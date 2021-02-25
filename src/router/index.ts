// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("../views/Home.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login/index.vue")
    },
    {
        name: "setup",
        path: "/setup",
        component: () => import("../views/Composition-API/setup.vue")
    },
    {
        name: "ComApi",
        path: "/ComApi",
        component: () => import("../views/Composition-API/ComApi.vue")
    },
    {
        name: "computed",
        path: "/computed",
        component: () => import("../views/Composition-API/Computed.vue")
    },
    {
        name: "watch",
        path: "/watch",
        component: () => import("../views/Composition-API/Watch.vue")
    },
    {
        name: "lifeCycle",
        path: "/lifeCycle",
        component: () => import("../views/Composition-API/Life-Cycle.vue")
    },
    {
        name: "Provide-Inject",
        path: "/Provide-Inject",
        component: () => import("../views/Composition-API/Provide-Inject.vue")
    },
    {
        name: "router-api",
        path: "/router-api",
        component: () => import("../views/router-api/index.vue"),
        children: [
            // 下面这个是不传参数的，这样可以解决错误提示(必须写在参数的前面)
            { name: "details", path: "details", component: () => import("../views/router-api/two-page/details.vue") },
            { name: "details", path: "details/:id", component: () => import("../views/router-api/two-page/details.vue") },
            { name: "article", path: "article", component: () => import("../views/router-api/two-page/article.vue") }
        ]
    },
    {
        name: "vuex",
        path: "/vuex",
        component: () => import("../views/vuex/vuexApi.vue")
    },


    {
        // 这个使用正则，在找不到的时候，会走 *
        path: "/:catchAll(.*)",
        name: "404",
        component: () => import("../views/404.vue")
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router