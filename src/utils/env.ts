// 获取运行环境 参数
export function getEnvVariables(): Record<string, string | boolean> {
	return import.meta.env
}

// 获取 运行 环境
export function getEnv(): string {
	return import.meta.env.MODE
}

// 是否是 dev 环境
export function isDevEnv(): boolean {
	return import.meta.env.DEV
}

// 是否是 生产 环境
export function isProdEnv(): boolean {
	return import.meta.env.PROD
}
