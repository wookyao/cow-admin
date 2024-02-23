/*
 * 基础路由配置
 * @Author: xu.yao
 * @Date: 2024-02-02
 * @Description: Login Register ForgetPassword 404 403 无权限
 */
import type { RouteRecordRaw } from 'vue-router'

const commonRoutes: RouteRecordRaw[] = [
	{
		path: '/login',
		component: () => import('@/pages/Login/index.vue'),
		meta: {
			title: '登录',
			layout: 'full-page',
		},
	},
	{
		path: '/register',
		component: () => import('@/pages/Register/index.vue'),
		meta: {
			title: '注册',
			layout: 'full-page',
		},
	},
	{
		path: '/dashboard',
		component: () => import('@/pages/Dashboard/index.vue'),
		meta: {
			title: '仪表盘',
			layout: 'default',
		},
	},
	{
		path: '/:pathMatch(.*)*',
		component: () => import('@/pages/404/index.vue'),
		meta: {
			title: '资源不存在',
			layout: 'full-page',
		},
	},
]

export default commonRoutes
