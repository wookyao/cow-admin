<template>
	<div class="app-header">
		<div class="logo">COWRYU</div>

		<div class="header-body">
			<div class="menu-list">
				<div
					v-for="menu in navList"
					:key="menu.key"
					class="menu-item"
					:class="{ active: activeNav === menu.key }"
					@click="handlerNav(menu)"
				>
					{{ menu.label }}
				</div>
			</div>

			<div class="right-area">
				<!-- 切换夜间模式 / 日间模式 -->
				<div class="theme-mode" @click="handlerChangeThemeMode">
					<SvgIcon
						v-if="themeStore.mode === 'light'"
						name="sun"
						color="rgb(29, 33, 41)"
					/>
					<SvgIcon
						v-if="themeStore.mode === 'dark'"
						name="moon"
						color="rgb(255, 255, 255)"
					/>
					<!-- <SvgIcon name="sun" /> -->
				</div>

				<a-avatar class="pointer" :size="32">C</a-avatar>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup name="LayoutDefaultHeader">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/store/modules/theme.ts'

interface NavItem {
	label: string
	path: string
	key: string
}

const $router = useRouter()

const themeStore = useThemeStore()

const navList: NavItem[] = [
	{
		label: '工作台',
		path: '/dashboard',
		key: 'dashboard',
	},
	{
		label: '任务管理',
		path: '/task',
		key: 'task',
	},
	{
		label: '素材库',
		path: '/material',
		key: 'material',
	},
	{
		label: '营销管理',
		path: '/marketing',
		key: 'marketing',
	},
	{
		label: '系统设置',
		path: '/setting',
		key: 'setting',
	},
]

const activeNav = ref('dashboard')

const handlerChangeThemeMode = () => {
	themeStore.switchMode()
}

const handlerNav = (menu: NavItem) => {
	activeNav.value = menu.key
	$router.push(menu.path)
}
// 设置主题模式
themeStore.setThemeMode()
</script>

<style lang="less" scoped>
.app-header {
	--header-height: 56px;
	--header-gutter: 12px 24px;

	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: var(--header-gutter);
	height: var(--header-height);
	background-color: transparent;

	.logo {
		font-size: 26px;
		font-weight: 600;
		color: var(--color-text-1);
		cursor: pointer;
	}

	.header-body {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.menu {
		&-list {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&-item {
			display: flex;
			align-items: center;

			margin-right: 24px;
			padding: 0 12px;
			height: 100%;

			cursor: pointer;
			font-size: 16px;
			color: var(--color-text-2);
			font-weight: 500;
			transition: color 0.25s ease-in-out;

			&.active {
				position: relative;
				font-weight: 700;
				color: var(--ui-primary);
			}
			&:hover {
				color: var(--ui-primary);
			}

			.title {
				padding-left: 4px;
			}
		}
	}

	.right-area {
		padding-left: 120px;
		display: flex;
		align-items: center;
	}
	.theme-mode {
		margin-right: 12px;
		width: 28px;
		height: 28px;
		line-height: 28px;
		border-radius: 4px;
		cursor: pointer;
		text-align: center;
		transition: all 0.3s ease-in-out;

		&:hover {
			background-color: var(--color-border-1);
		}
	}
}
</style>
