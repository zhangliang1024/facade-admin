import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入pinia依赖文件
import { createPinia } from 'pinia'
// 引入element依赖文件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
// 注册element
app.use(ElementPlus)
// 注册pinia
app.use(createPinia())
app.mount('#app')   
