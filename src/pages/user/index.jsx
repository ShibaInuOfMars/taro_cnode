import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtList, AtListItem } from "taro-ui"

import { connect } from '@tarojs/redux'

import Header from './../../components/common-header/header'

import './index.less'

const mapStateToProps = store => ({...store.user})

const mapDispatchToProps = dispatch => ({
	
})

@connect(mapStateToProps, mapDispatchToProps)

class User extends Component {

	config = {
		navigationBarTitleText: '个人中心'
	}

	jumpToInfo(type, tag) {
		Taro.navigateTo({url: '/pages/info/index?type=' + type + '&tag=' + tag})
	}

	render() {
		const {loginname, avatar_url} = this.props

		return (
			<View className='user-center'>
				<Header loginname={loginname}  avatar_url={avatar_url} />

				<View className='panel'>
					<View className='panel-title'>
						话题相关
					</View>
					<AtList>
						<AtListItem title='我的话题'  arrow='right' onClick={this.jumpToInfo.bind(this, 'recent', 'topics')} />
						<AtListItem title='参与的话题' arrow='right' onClick={this.jumpToInfo.bind(this, 'recent', 'replies')} />
					</AtList>
				</View>

				<View className='panel'>
					<View className='panel-title'>
						话题收藏
					</View>
					<AtList>
						<AtListItem title='我的收藏'  arrow='right' onClick={this.jumpToInfo.bind(this, 'collect', 'collect')} />
					</AtList>
				</View>

				<View className='panel'>
					<View className='panel-title'>
						消息中心
					</View>
					<AtList>
						<AtListItem title='我的消息'  arrow='right' />
					</AtList>
				</View>

			</View>
		)
	}
}

export default User