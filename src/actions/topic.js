import Taro from '@tarojs/taro'

// api
import CN_API from './../constants/api'

import tAjax from './../utils/tAjax'

import {
	GET_TOPIC_LIST,
	ADD_TOPIC_LIST,
	GET_TOPIC_DETAIL,
	COLLECT_TOPIC_SUCCESS,
	DE_COLLECT_TOPIC
} from './../constants/topic'

// 获取列表
const getTopicList = (list) => ({
	type: GET_TOPIC_LIST,
	list
})

// 上拉加载更多，拼接列表
const addTopicList = (list, page) => ({
	type: ADD_TOPIC_LIST,
	list,
	page
})

// 获取话题详情信息
const getTopicDetail = (detail) => ({
	type: GET_TOPIC_DETAIL,
	detail
})

// 点击收藏成功
const collectTopicSuccess = () => ({
	type: COLLECT_TOPIC_SUCCESS
})

// 取消收藏成功
const deCollectTopicSuccess = () => ({
	type: DE_COLLECT_TOPIC
})

// 获取列表
export const getTopicListAsync = (params) => {
	return async (dispatch) => {
		let res = await tAjax(CN_API.get_topics, params)
		// console.log(res)
		// 因为没有总页码，所有只能这样判断下一页有没有数据
		if(res.success&&res.data.length > 0) {
			dispatch(getTopicList(res.data))
		}
	}
}

// 上拉加载更多，拼接列表
export const addTopicListAsync = (params) => {
	return async (dispatch) => {
		let res = await tAjax(CN_API.get_topics, params)
		// console.log(res)
		if(res.success) {
			dispatch(addTopicList(res.data, params.page))
		}
	}
}

// 获取话题详情信息
export const getTopicDetailAsync = (params) => {
	return async (dispatch) => {
		let res = await tAjax(CN_API.get_topic_detail + params.id, {mdrender: params.mdrender, accesstoken: params.accesstoken})
		// console.log(res)
		if(res.success) {
			dispatch(getTopicDetail(res.data))
		}
	}
}

// 点击了文章详情页的收藏
export const collectTopicAsync = (params) => {
	return async (dispatch) => {
		let res = await tAjax(CN_API.post_topic_collect, params, 'post')
		console.log(res)
		if(res.success !== 'undefined') {
			dispatch(deCollectTopicSuccess())
			return res
		} else {
			Taro.showToast({title: '网络异常', icon: 'none'})
		}
	}
}

// 点击了文章详情页的取消收藏
export const deCollectTopicAsync = (params) => {
	return async (dispatch) => {
		let res = await tAjax(CN_API.post_topic_de_collect, params, 'post')
		// console.log(res)
		if(res.success !== 'undefined') {
			dispatch(collectTopicSuccess())
			return res
		} else {
			Taro.showToast({title: '网络异常', icon: 'none'})
		}
	}
}
