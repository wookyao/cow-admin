import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './modules'

const router = createRouter({
	history: createWebHistory(),
	routes,
})

// 注册路由
export function setupRouter(app: App<Element>) {
	app.use(router)
}

export default router
