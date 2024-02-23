<template>
	<component :is="LayoutComponent" v-if="!isFullPage">
		<slot></slot>
	</component>
	<slot v-if="isFullPage"></slot>
</template>

<script lang="ts" setup name="index">
const $route = useRoute()

const layoutName = computed(() => {
	return $route.meta?.layout || 'default'
})

// 不需要layout
const isFullPage = computed(() => {
	return layoutName.value === 'full-page'
})

const LayoutComponent = computed(() => {
	let component = null

	switch (layoutName.value) {
		case 'full-page':
			break

		default:
			component = defineAsyncComponent(() => import(`./default/index.vue`))
			break
	}

	return component
})
</script>

<style lang="less" scoped>
.app-layout {
	width: 100%;
	min-height: 100vh;
}
</style>
