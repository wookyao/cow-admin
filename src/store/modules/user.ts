/*
 * 用户 store
 * @Author: xu.yao
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
		saveToken(val: string) {
			this.token = val
		},
	},
	persist: true,
})
