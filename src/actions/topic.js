// api
import CN_API from './../constants/api'

import tAjax from './../utils/tAjax'

import {
	GET_TOPIC_LIST,
	ADD_TOPIC_LIST
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

// 获取列表
export const getTopicListAsync = (params) => {
	return async (dispatch) => {
		let res = await tAjax(CN_API.get_topics, params)
		console.log(res)
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
		console.log(res)
		if(res.success) {
			dispatch(addTopicList(res.data, params.page))
		}
	}
}
