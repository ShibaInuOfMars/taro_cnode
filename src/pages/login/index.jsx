import Taro, { Component } from '@tarojs/taro'
import { View, Input, Button } from '@tarojs/components'

import { connect } from '@tarojs/redux'

import Header from './../../components/common-header/header'

import { checkAccessTokenAsync } from './../../actions/user'

import './index.less'

const mapStateToProps = store => ({
	
})

const mapDispatchToProps = dispatch => ({
	checkAccessToken: (token) => {
		return dispatch(checkAccessTokenAsync(token))
	}
})

@connect(mapStateToProps, mapDispatchToProps)

class Login extends Component {

	state = {
		token: ''
	}

	config = {
		navigationBarTitleText: '登录'
	}

	handleTokenChange(e) {
		// console.log(e)
		this.setState({
			token: e.target.value
		})
	}

	async handleLogin() {
		const { token } = this.state;
		const { checkAccessToken } = this.props

		if(token.trim() !== '') {

			let res = await checkAccessToken(token)

			// console.log(res)
			
			if(res) {

				Taro.showToast({
					title: '登录成功',
					icon: 'none',
					success: () => {
						Taro.redirectTo({url: '/pages/user/index'})
					}
				})

			} else {

				Taro.showToast({
					title: '您的输入有误',
					icon: 'none'
				})

			}

		} else {

			Taro.showToast({
				title: '输入不能为空',
				icon: 'none'
			})

		}
	}

	render() {
		return (
			<View className='login-wrapper'>
				<Header />
				<View className='form-login'>
					<Input className='token-input' placeholder='请输入accessToken' onInput={this.handleTokenChange.bind(this)} />
					<Button type='primary' className='btn-login' onClick={this.handleLogin.bind(this)}>登录</Button>
				</View>
			</View>
		)
	}
}

export default Login