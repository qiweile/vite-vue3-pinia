/// <reference types="vite/client" />

declare interface ImportMetaEnv {
    readonly VITE_BASE_API: string
    // 开发服务
    // readonly VITE_BASE_API: string
    // 测试线上服务
    readonly VITE__BASE_TEST_API: string
    // 172部署服务
    // readonly VITE_BASE_API: string
    readonly VITE_ROUTER_HISTORY: "hash" | "html5"
    readonly VITE_PUBLIC_PATH: string
}