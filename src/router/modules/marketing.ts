/*
 * 营销路由配置
 */
import type { RouteRecordRaw } from 'vue-router'

const marketingRoutes: RouteRecordRaw[] = [
	{
		path: '/marketing',
		name: 'Marketing',
		component: () => import('@/pages/marketing/index.vue'),
		meta: {
			title: '营销',
			layout: 'marketing-page',
		},
	},
]

export default marketingRoutes
