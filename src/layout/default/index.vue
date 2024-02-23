<template>
	<div class="app-layout">
		<CHeader />

		<div class="app-content">
			<div class="app-screen"></div>
		</div>
	</div>
</template>

<script lang="ts" setup name="DefaultLayout">
import CHeader from './components/header.vue'
</script>

<style lang="less" scoped>
.app {
	&-layout {
		--header-height: 56px;
		--header-gutter: 12px 24px;
		--content-gutter: 12px 24px 24px;
		--border-radius: 28px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100vw;
		height: 100vh;
		background-color: var(--ui-background);
	}

	&-content {
		width: 100%;
		padding: var(--content-gutter);
		flex: 1;
		display: flex;
		flex-direction: row;
	}

	&-screen {
		flex: 1;
		background-color: var(--ui-screen-bg);
		border-radius: var(--border-radius);
	}
}
</style>
