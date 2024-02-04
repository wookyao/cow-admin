import { decrypt as aesDecrypt, encrypt as aesEncrypt } from 'crypto-js/aes'
import Utf8 from 'crypto-js/enc-utf8'
import CFB from 'crypto-js/mode-cfb'
import Pkcs7 from 'crypto-js/pad-pkcs7'
import Base64 from 'crypto-js/enc-base64'
// hash
import MD5 from 'crypto-js/md5'
import SHA256 from 'crypto-js/sha256'
import SHA512 from 'crypto-js/sha512'

// 定义 加密 接口
export interface Cipher {
	// 加密
	encrypt: (plainText: string) => string
	// 解密
	decrypt: (cipherText: string) => string
}
// 定义 hash 接口
export interface Hash {
	hash(text: string): string
}

export interface Salt {
	key: string
	iv: string
}

// =========================== 接口实现类 =================================

// 实现 AES 加密类
class AESCipher implements Cipher {
	private key: string
	private iv: string

	constructor({ key, iv }: Salt) {
		this.key = MD5(key).toString()
		this.iv = MD5(iv).toString()
	}

	get params() {
		return {
			mode: CFB,
			padding: Pkcs7,
			iv: this.iv,
		}
	}

	encrypt(plainText: string) {
		// 实现加密逻辑
		return aesEncrypt(plainText, this.key, this.params).toString()
	}
	decrypt(cipherText: string) {
		// 实现解密逻辑
		const decrypt = aesDecrypt(cipherText, this.key, this.params).toString(Utf8)
		return decrypt.toString()
	}
}

// 实现 Base64 加密类
class Base64Cipher implements Cipher {
	private static instance: Base64Cipher

	constructor() {}

	// 生成 实列
	static create(): Base64Cipher {
		if (!Base64Cipher.instance) {
			Base64Cipher.instance = new Base64Cipher()
		}
		return Base64Cipher.instance
	}

	encrypt(plainText: string): string {
		return Utf8.parse(plainText).toString(Base64)
	}

	decrypt(cipherText: string): string {
		return Base64.parse(cipherText).toString(Utf8)
	}
}

// 实现 MD5 Hash
class MD5Hash implements Hash {
	private static instance: MD5Hash

	constructor() {}

	// 生成 实列
	static create(): MD5Hash {
		if (!MD5Hash.instance) {
			MD5Hash.instance = new MD5Hash()
		}
		return MD5Hash.instance
	}

	hash(text: string): string {
		return MD5(text).toString()
	}
}

// 实现 SHA256 Hash 类
class SHA256Hash implements Hash {
	private static instance: SHA256Hash

	constructor() {}
	// 生成 实列
	static create(): SHA256Hash {
		if (!SHA256Hash.instance) {
			SHA256Hash.instance = new SHA256Hash()
		}
		return SHA256Hash.instance
	}

	hash(text: string): string {
		return SHA256(text).toString()
	}
}

// 实现 SHA512 Hash 类
class SHA512Hash implements Hash {
	private static instance: SHA512Hash

	constructor() {}
	// 生成 实列
	static create(): SHA512Hash {
		if (!SHA512Hash.instance) {
			SHA512Hash.instance = new SHA512Hash()
		}
		return SHA512Hash.instance
	}

	hash(text: string): string {
		return SHA512(text).toString()
	}
}

// =========================== 工厂方法 =================================

// Cipher 工厂方法
export class CipherFactory {
	public static genAes(params: Salt): Cipher {
		return new AESCipher(params)
	}

	public static genBase64(): Cipher {
		return Base64Cipher.create()
	}
}

// Hash 工厂方法
export class HashFactory {
	public static genMD5(): Hash {
		return MD5Hash.create()
	}

	public static genSHA256(): Hash {
		return SHA256Hash.create()
	}

	public static genSHA512(): Hash {
		return SHA512Hash.create()
	}
}
