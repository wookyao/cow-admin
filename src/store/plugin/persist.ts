/**
 * 自定义数据持久化插件
 * 支持 序列化/反序列化 数据
 */
import type { Pinia, StateTree } from 'pinia'
import {
	createPersistedState,
	PersistedStateFactoryOptions,
} from 'pinia-plugin-persistedstate'
import type { Serializer } from 'pinia-plugin-persistedstate'
import { CipherFactory } from '@/utils/cipher'
import type { Cipher } from '@/utils/cipher'

import {
	SLAT_DATA,
	OPEN_ENCRYPTION,
	PERSIST_KEY_PREFIX,
} from '@/config/piniaPersist'

const cipher: Cipher = CipherFactory.genAes(SLAT_DATA)

// 自定义 序列化 函数
function serializer(openEncryption: boolean): Serializer {
	// 使用 加密
	if (!openEncryption) {
		return {
			// 序列化 -> 加密
			serialize: (value: StateTree) => {
				const treeStr = JSON.stringify(value)
				const cipherText = cipher.encrypt(treeStr)
				return cipherText
			},
			// 反序列化 -> 解密
			deserialize: (value: string) => {
				const treeStr = cipher.decrypt(value)
				return JSON.parse(treeStr)
			},
		}
	}

	return {
		// 序列化 -> 加密
		serialize: (value: StateTree) => JSON.stringify(value),
		// 反序列化 -> 解密
		deserialize: (value: string) => JSON.parse(value) as StateTree,
	}
}

// 生成 插件 配置
const createPersistCustomOptions: (
	keyPrefix: string,
) => PersistedStateFactoryOptions = keyPrefix => {
	return {
		storage: window.localStorage,
		key: id => `${keyPrefix}__${String(id).toLocaleUpperCase()}__`,
		serializer: serializer(OPEN_ENCRYPTION),
	}
}

// 注册 持久化插件  提供外部使用
export const registerPiniaPersistPlugin = (pinia: Pinia) => {
	pinia.use(
		createPersistedState(createPersistCustomOptions(PERSIST_KEY_PREFIX)),
	)
}
