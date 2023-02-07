import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import router from './handle';
router.beforeEach((to, from, next) => {
    const token = sessionStorage.getItem('token') || null;
    if (to.path === "/login") {
        if (token) {
            next({
                path: from.path
            })
        } else {
            next();
        }
    } else {
        if (!token) {
            console.log('进入login页面');
            next('/login')
        } else {
            next()
        }
    }
})

router.afterEach(() => {
    // NProgress.done()
})
/** 重置路由 */
export function resetRouter() {
    // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
    try {
        // router.getRoutes().forEach((route) => {
        //     const { name, meta } = route
        //     if (name && meta.roles?.length) {
        //         router.hasRoute(name) && router.removeRoute(name)
        //     }
        // })
    } catch (error) {
        // 强制刷新浏览器也行，只是交互体验不是很好
        window.location.reload()
    }
}
export default router