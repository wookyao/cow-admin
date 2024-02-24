/*
 * @Author: xu.yao
 * @Date: 2024-02-02 14:03:35
 * @LastEditors: xu.yao
 * @LastEditTime: 2024-02-02 14:21:18
 * @Description: 路由模块总入口
 */
import type { RouteRecordRaw } from 'vue-router'
import commonRoutes from './common'
import marketingRoutes from './marketing'

const routes: RouteRecordRaw[] = [
	...commonRoutes,
	...marketingRoutes,
	{
		path: '/:pathMatch(.*)*',
		component: () => import('@/pages/404/index.vue'),
		meta: {
			title: '资源不存在',
			layout: 'full-page',
		},
	},
]

export default routes
