import {
  GET_TOPIC_LIST,
  ADD_TOPIC_LIST,
  GET_TOPIC_DETAIL,
  COLLECT_TOPIC_SUCCESS,
  DE_COLLECT_TOPIC
} from './../constants/topic'

const TOPIC_STATE = {
  page: 1,
  limit: 20,
  list: [],
  topicContent: {},
  topicReply: [],
  collectState: false // 收藏状态，修改这个以达到刷新页面的功能
}

export default (state = TOPIC_STATE, action) => {
  switch (action.type) {
    case GET_TOPIC_LIST:
      return {
		...state, 
		list: action.list,
		page: 1 // 重新加载列表，那么页数默认是第一页
	  }
	case ADD_TOPIC_LIST: 
	  return {
		  ...state, 
		  list: state.list.concat(action.list),
		  page: action.page
    }
  case GET_TOPIC_DETAIL: 
    return {
      ...state,
      topicReply: action.detail.replies,
      topicContent: {...action.detail, replies: null}
    }
  case COLLECT_TOPIC_SUCCESS:
    return {
      ...state,
      collectState: !state.collectState
    }  
  case DE_COLLECT_TOPIC: 
    return {
      ...state,
      collectState: !state.collectState
    }
      default:
        return state;
  }
}
