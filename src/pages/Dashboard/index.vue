<template>
	<div class="page-view">
		<div class="page-view__aside">
			<div class="card"></div>
		</div>
		<div class="page-view__content"></div>
	</div>
</template>

<script lang="ts" setup name="Dashboard"></script>

<style lang="less" scoped>
.page-view {
	display: flex;

	&__aside {
		width: 20%;
		min-width: 360px;
		max-width: 580px;

		.card {
			width: 100%;
			min-height: 120px;
			border-radius: 24px;
			background-color: var(--ui-background);
		}
	}

	&__content {
		flex: 1;
	}
}
</style>
