import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './header.less'

class Header extends Component {

	render() {
		const { loginname, avatar_url } = this.props
		return (
			<View className='header-wrapper'>
				<Image className='icon-user' src={avatar_url ? avatar_url : require('./../../assets/images/head.png')} mode='widthFix' />
				{
					loginname ? <Text className='loginname'>{loginname}</Text> : null
				}
			</View>
		)
	}
}

Header.defaultProps = {
	loginname: null,
	avatar_url: null
}

export default Header