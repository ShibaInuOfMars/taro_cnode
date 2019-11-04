import {
  setCache,
  getCache
} from './../utils/cache'

import {
  SAVE_TOKEN_AND_NAME,
  TOKEN_FAIL
} from './../constants/user'

const cacheKey = 'CNODE_USER_KEY'
const user_cache = getCache(cacheKey) || {}

const USER_STATE = {
  ...user_cache
}

export default (state = USER_STATE, action) => {
  switch (action.type) {
    case SAVE_TOKEN_AND_NAME:
      let newState = {
        ...state,
        accesstoken: action.accesstoken,
        loginname: action.loginname,
        avatar_url: action.avatar_url
      }
      setCache(cacheKey, newState)
      return newState
    case TOKEN_FAIL:
      console.log(state)
      let failState = {
        ...state,
        accesstoken: null,
        loginname: null,
        avatar_url: null
      }
      setCache(cacheKey, failState)
      return failState
    default:
      return state;
  }
}
