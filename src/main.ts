import { createApp } from 'vue'
import router from './router'
import store from "@/store"
import App from './App.vue'
import { loadPlugins } from "@/plugins"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "@/style/global.scss"

const app = createApp(App)
loadPlugins(app)
app.use(store).use(router).mount('#app')