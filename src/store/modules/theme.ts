/*
 * 主题 store
 * @Author: xu.yao
 */
import { defineStore } from 'pinia'

export interface ThemeState {
	// mode 模式
	mode: 'light' | 'dark'
}

export const useThemeStore = defineStore('theme', {
	state: (): ThemeState => ({
		mode: 'light',
	}),

	actions: {
		switchMode() {
			this.mode = this.mode === 'light' ? 'dark' : 'light'
			this.setThemeMode()
		},

		setThemeMode() {
			if (this.mode === 'dark') {
				// 设置主题
				document.body.setAttribute('arco-theme', 'dark')
				document.body.setAttribute('theme', 'dark')
			} else {
				// 恢复亮色主题
				document.body.removeAttribute('arco-theme')
				document.body.removeAttribute('theme')
			}
		},
	},
	persist: true,
})
