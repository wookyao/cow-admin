<template>
	<div class="app-layout">
		<CHeader />
		<div class="app-content">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts" setup name="MarketingLayout">
import CHeader from './components/header.vue'
</script>

<style lang="less" scoped>
.app {
	&-layout {
		--content-gutter: 24px;
		--border-radius: 28px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100vw;
		height: 100vh;
		background-color: var(--ui-background);
	}

	&-content {
		flex: 1;
		width: 100%;
		padding: var(--content-gutter);
		background-color: var(--ui-screen-bg);
	}
}
</style>
