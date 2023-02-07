import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from "vue-router"
const Layout = () => import("@/views/layout/index.vue")
const childrenRoutes: Array<RouteRecordRaw> = [];


const routes: Array<RouteRecordRaw> = [
    {
        path: "/redirect",
        component: Layout,
        meta: {
            hidden: true
        },
        // children: [
        //     {
        //         path: "/redirect/:path(.*)",
        //         component: () => import("@/views/redirect/index.vue")
        //     }
        // ]
    },
    {
        path: "/403",
        component: () => import("@/views/error-page/403.vue"),
        meta: {
            hidden: true
        }
    },
    {
        path: "/404",
        component: () => import("@/views/error-page/404.vue"),
        meta: {
            hidden: true
        },
        alias: "/:pathMatch(.*)*"
    },
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            hidden: true
        }
    },
    // {
    //     path: "/",
    //     component: Layout,
    //     redirect: "/dashboard",
    //     children: [
    //         {
    //             path: "dashboard",
    //             component: () => import("@/views/dashboard/index.vue"),
    //             name: "Dashboard",
    //             meta: {
    //                 title: "首页",
    //                 svgIcon: "dashboard",
    //                 affix: true
    //             }
    //         }
    //     ]
    // },
    {
        path: "/home",
        component: () => import('@/views/Home.vue')
    },
    {
        path: "/about",
        component: () => import("@/views/About.vue"),
    },
];

const router = createRouter({
    history: true ? createWebHashHistory():createWebHistory(),
    routes
});

export default router