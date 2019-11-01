import {
	SAVE_TOKEN_AND_NAME,
	TOKEN_FAIL
} from './../constants/user'

const USER_STATE = {
	accesstoken: null,
	loginname: null,
	avatar_url: null,
	loginSuccess: false
}

export default (state = USER_STATE, action) => {
  switch (action.type) {
		case SAVE_TOKEN_AND_NAME: 
			return {...state, accesstoken: action.accesstoken, loginname: action.loginname, avatar_url: action.avatar_url, loginSuccess: true}
		case TOKEN_FAIL: 
			return {...state, accesstoken: null, loginname: null, avatar_url: null, loginSuccess: false}	
    default:
      return state;
  }
}
