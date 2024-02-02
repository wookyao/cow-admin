import { createApp } from 'vue'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import App from './App.vue'

// 创建 App 实列
const app = createApp(App)

function bootstrap() {
	// 注册 store
	setupStore(app)

	// 注册路由
	setupRouter(app)

	// 挂载
	app.mount('#app')
}

bootstrap()
