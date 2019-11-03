import Taro from '@tarojs/taro'

import {
	SAVE_TOKEN_AND_NAME,
	TOKEN_FAIL
} from './../constants/user'

import CN_API from './../constants/api'

import tAjax from './../utils/tAjax'

const saveTokenAndName = (accesstoken, loginname, avatar_url) => ({
	type: SAVE_TOKEN_AND_NAME,
	accesstoken,
	loginname,
	avatar_url
})

const checkTokenFail = () => ({
	type: TOKEN_FAIL
})

export const checkAccessTokenAsync = (token) => {
  return async dispatch => {
		let res = await tAjax(CN_API.post_access_token, {accesstoken: token}, 'post');
		// console.log(res)
		if(res.success) {
			dispatch(saveTokenAndName(token, res.loginname, res.avatar_url))
			return true
		} else {
			dispatch(checkTokenFail())
			return false
		}
  }
}

export const requestDataOfTypeAsync = (type, loginname) => {
	return async () => {
		if(type === 'recent') {
			let res = await tAjax(CN_API.get_user_detail + loginname)
			return res
		} else if (type === 'collect') {
			let res = await tAjax(CN_API.get__topic_collect + loginname)
			return res
		}
  }
}

// 验证用户是否登录
export const isLogin = (params) => {
	if(params&&params.accesstoken) {
		return true
	} else {
		Taro.navigateTo({url: '/pages/login/index'})
	}
}
