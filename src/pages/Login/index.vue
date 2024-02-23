<template>
	<div class="login-screen">
		<p class="title">COWRYU</p>
		<p class="sub-title">OFFICE AUTOMATION SYSTEM</p>

		<div class="form-card">
			<div class="form-item">
				<a-input
					v-model="formData.username"
					placeholder="输入手机号"
					allow-clear
				></a-input>
			</div>
			<div class="form-item">
				<a-input-password
					v-model="formData.password"
					placeholder="输入登录密码"
					allow-clear
				></a-input-password>
			</div>

			<a-button
				class="form-submit"
				type="primary"
				size="large"
				long
				@click="login"
				>登录</a-button
			>

			<div class="form-tips">
				<span class="tips-label">第三方扫码登录</span>
				<img class="tips-icon" src="@/assets/img/wechat.png" alt="wechat" />
				<a-divider direction="vertical" />
				<img class="tips-icon" src="@/assets/img/feishu.png" alt="feishu" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup name="LoginScreen">
import { Message } from '@arco-design/web-vue'

interface FormData {
	username: string
	password: string
}

const formData = reactive<FormData>({
	username: '',
	password: '',
})

// 提交验证
const validate: () => boolean = () => {
	if (!formData.username) {
		Message.error('用户名称不能为空')
		return false
	}

	// 判断用户名 是不是手机号码 严格判断
	if (!/^1[3456789]\d{9}$/.test(formData.username)) {
		Message.error('手机号码格式错误')
		return false
	}

	if (!formData.password) {
		Message.error('登录密码不能为空')
		return false
	}
	return true
}

// 登录
const login = () => {
	// 验证
	if (!validate()) return
}
</script>

<style lang="less" scoped>
.login {
	&-screen {
		height: 100vh;
		background-color: var(--ui-background);
		display: flex;
		flex-flow: column;
		align-items: center;

		.title {
			margin-top: 145px;
			margin-bottom: 50px;
			font-size: 106px;
			font-weight: 700;
			color: var(--color-text-1);
			letter-spacing: 5px;
		}
		.sub-title {
			font-size: 36px;
			color: var(--color-text-2);
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
	}

	&-tips {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 90px;
		color: var(--color-text-3);

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
