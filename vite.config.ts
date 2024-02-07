import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { vitePluginForArco } from '@arco-plugins/vite-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		// arco 自动导入
		vitePluginForArco({
			style: true,
		}),
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), './src/assets/icons')],
			symbolId: 'icon-[name]',
		}),
		AutoImport({
			imports: ['vue', 'vue-router'],
			// 解决eslint报错问题
			eslintrc: {
				enabled: true,
			},
		}),

		vueSetupExtend(),
	],

	// 配置别名
	resolve: {
		alias: [
			{
				find: '@',
				replacement: path.resolve(__dirname, 'src'),
			},
			{
				find: '~StoreMod',
				replacement: path.resolve(__dirname, 'src/store/modules'),
			},
		],
	},
	// 服务
	server: {
		port: 9527,
	},
})
