/*
 * 基础路由配置
 * @Author: xu.yao
 * @Date: 2024-02-02
 * @LastEditors: xu.yao xu.yao@hongpucorp.com
 * @LastEditTime: 2024-02-02 14:27:15
 * @Description: Login Register ForgetPassword 404 403 无权限
 */
import type { RouteRecordRaw } from 'vue-router';

const commonRoutes: RouteRecordRaw[] = [
	{
		path: '/login',
		component: () => import('Pages/Login/index.vue'),
		meta: {
			title: '登录',
		},
	},
	{
		path: '/register',
		component: () => import('Pages/Register/index.vue'),
		meta: {
			title: '注册',
		},
	},
	{
		path: '/:pathMatch(.*)*',
		component: () => import('Pages/404/index.vue'),
	},
];

export default commonRoutes;
