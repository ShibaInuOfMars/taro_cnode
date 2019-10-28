import {
  GET_TOPIC_LIST,
  ADD_TOPIC_LIST
} from './../constants/topic'

const TOPIC_STATE = {
  page: 1,
  limit: 20,
  list: []
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
      default:
        return state;
  }
}
