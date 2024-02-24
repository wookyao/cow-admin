<template>
	<div class="page-view">
		<div class="page-view__aside">
			<div class="card">
				<p class="card-title">今日数据</p>

				<p class="card-tips">今日新增客户</p>
				<p class="card-num">129,8</p>
				<p class="card-tips">今日跟进记录</p>
				<p class="card-num">128</p>
			</div>
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
			padding: 16px;
			width: 100%;
			min-height: 120px;
			border-radius: 24px;
			background-color: var(--ui-background);

			&-title {
				margin-bottom: 36px;
				font-size: 16px;
				font-weight: 500;
				color: var(--color-text-2);
			}
			&-tips {
				margin-top: 24px;
				padding-bottom: 8px;
				font-size: 14px;
				color: var(--color-text-3);
			}
			&-num {
				font-size: 32px;
				font-weight: 500;
				color: var(--color-text-1);
			}
		}
	}

	&__content {
		flex: 1;
	}
}
</style>
