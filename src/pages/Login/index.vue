<template>
	<div class="login-screen">
		<p class="title">COWRYU</p>
		<p class="sub-title">OFFICE AUTOMATION SYSTEM</p>

		<div class="form-card">
			<div class="form-item">
				<a-input placeholder="输入手机号"></a-input>
			</div>
			<div class="form-item">
				<a-input placeholder="输入验证码"></a-input>
			</div>

			<div class="form-submit">登录</div>

			<div class="form-tips">
				<span class="tips-label">第三方扫码登录</span>
				<img class="tips-icon" src="@/assets/img/wechat.png" alt="wechat" />
				<a-divider direction="vertical" />
				<img class="tips-icon" src="@/assets/img/feishu.png" alt="feishu" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup name="LoginScreen"></script>

<style lang="less" scoped>
.login {
	&-screen {
		height: 100vh;
		background-color: var(--color-ls-bg);
		display: flex;
		flex-flow: column;
		align-items: center;

		.title {
			margin-top: 145px;
			margin-bottom: 50px;
			font-size: 106px;
			font-weight: 700;
			color: #121212;
			letter-spacing: 5px;
		}
		.sub-title {
			font-size: 36px;
			font-size: #000;
			letter-spacing: 3px;
		}
	}
}

.form {
	&-card {
		margin-top: 180px;
		width: 340px;
	}

	&-item {
		margin-bottom: 24px;
	}

	&-submit {
		margin-top: 40px;
		height: 36px;
		line-height: 36px;
		background-color: var(--color-ls-black);
		color: #fff;
		text-align: center;
		cursor: pointer;
		&:hover {
			background-color: rgba(#000, 0.75);
		}
	}

	&-tips {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 90px;
		color: #4e5969;

		.tips-label {
			flex: 1;
		}
		.tips-icon {
			width: 35px;
			cursor: pointer;
		}
	}
}
</style>
