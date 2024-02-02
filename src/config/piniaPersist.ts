import type { Salt } from '@/utils/cipher'
import { isDevEnv } from '@/utils/env'

// 加密 加盐
export const SLAT_DATA: Salt = {
	key: '9527P-WX369-XBB12-ZMF02',
	iv: 'XWD079-KL73U-26IUY-9527L',
}

// 是否开启 持久化 内容加密
export const OPEN_ENCRYPTION = !isDevEnv()

// 自定义 持久化 key 前缀
export const PERSIST_KEY_PREFIX = '__COW_ADMIN'
