/*
 * @Author: xu.yao
 * @Date: 2024-02-02
 * @LastEditors: xu.yao xu.yao@hongpucorp.com
 * @LastEditTime: 2024-02-02 15:44:25
 * @Description: 用户 store
 */
import { defineStore } from 'pinia'

export interface UserState {
	// 用户信息
	userInfo: Record<string, any>
	// 令牌
	token: string
	// 权限列表
	permissions: string[]
	// 菜单列表
	menuList: Record<string, any>[]
}

export const useUserStore = defineStore('user', {
	state: (): UserState => ({
		userInfo: {},
		token: '',
		permissions: [],
		menuList: [],
	}),

	actions: {
		saveToken() {
			this.token = '123'
		},
	},
	persist: true,
})
