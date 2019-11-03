import Taro from '@tarojs/taro'

// 设置缓存
export function setCache(key, value) {
	if(typeof value === 'object') {
		value = JSON.stringify(value)
	}
	Taro.setStorageSync(key, value)
}

// 读取缓存
export function getCache(key) {
	let result = Taro.getStorageSync(key)
	if(result) {
		result = JSON.parse(result)
	} else {
		return null
	}
	return result
}
