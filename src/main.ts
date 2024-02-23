import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import { setupGlobalComponents } from '@/components'
import 'virtual:svg-icons-register'
import App from './App.vue'
// 引入 组件库Message  Modal 等样式
import '@arco-design/web-vue/dist/arco.css'
import '@/style/index.less'

// 创建 App 实列
const app = createApp(App)

function bootstrap() {
	// 注册 store
	setupStore(app)

	// 注册路由
	setupRouter(app)

	// 注册全局组件
	setupGlobalComponents(app)

	// 注册指令

	app.use(ArcoVue)

	// 挂载
	app.mount('#app')
}

bootstrap()
