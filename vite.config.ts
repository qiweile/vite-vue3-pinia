import { type ConfigEnv, type UserConfigExport, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
export default (configEnv: ConfigEnv): UserConfigExport => {
    const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv
    const { VITE_PUBLIC_PATH, VITE_BASE_URL } = viteEnv
    return {
        // publicDir: 'public',
        base: VITE_PUBLIC_PATH, // 开发或生产环境服务的公共基础路径 配置引入相对路径
        // 基本路径
        plugins: [
            vue()
        ],
        resolve: {
            extensions: ['.js', '.ts', '.tsx', '.jsx'],
            alias: {
                '@': resolve(__dirname, 'src')
            }
        },
        server: {
            host: "localhost",
            port: 8080,
            cors: true,
            proxy: {
                "/api/v1": {
                    target: VITE_BASE_URL,
                    ws: true,
                    /** 是否允许跨域 */
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api\/v1/, ''),
                }
            }
        },
    }
}