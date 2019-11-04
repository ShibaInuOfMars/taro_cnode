import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import { AtDrawer } from 'taro-ui'

import { connect } from '@tarojs/redux'

import { showDrawer, hideDrawer, changeCata } from './../../actions/menu';

import { isLogin } from './../../actions/user'

import './menu.less'

const mapStateToProps = (store) => ({ ...store.menu, user: store.user, limit: store.topic.limit })

const mapDispatchToProps = (dispatch) => ({
	showMenu: () => {
		dispatch(showDrawer())
	},

	hideMenu: () => {
		dispatch(hideDrawer())
	},

	changeCurrentCata: (cata, limit) => {
		dispatch(changeCata(cata, limit))
	}
})

@connect(mapStateToProps, mapDispatchToProps)

class Menu extends Component {

	// 获取分类项目
	getItems(cataData) {
		return cataData.map(item => item.value)
	}

	// 改变当前所在分类
	changeCurrentCata(index) {
		// console.log(index)
		const { cataData, currentCata, limit,  changeCurrentCata } = this.props
		const cate = cataData[index]
		// console.log(cate)

		// 判断这次要改变的分类是否与当前所在分类相等，不相等才触发
		if(cate.key !== currentCata.key) {
			changeCurrentCata(cate, limit)
		}
	}

	jumpToLogin() {
		// console.log(this.props)
		const { user } = this.props
		
		let res = isLogin(user)

		if(res) {
			Taro.navigateTo({url: '/pages/user/index'})
		}
	}

	render() {
		const { currentCata, cataData, drawerState, showMenu, hideMenu } = this.props
		const items = this.getItems(cataData)

		return (
			<View>
				<AtDrawer width='300px' show={drawerState} mask items={items} onItemClick={this.changeCurrentCata.bind(this)} onClose={hideMenu} />
				<View className='topiclist-menu'>
					<Image onClick={showMenu} className='meun-icon' src={require('./../../assets/images/cata.png')} mode='widthFix' />
					<Text>{currentCata.value}</Text>
					<Image onClick={this.jumpToLogin.bind(this)} className='meun-icon' src={require('./../../assets/images/login.png')} mode='widthFix' />
				</View>
			</View>
		)
	}
}

export default Menu