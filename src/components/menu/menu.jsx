import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import { AtDrawer } from 'taro-ui'

import { connect } from '@tarojs/redux'

import { showDrawer, hideDrawer, changeCata } from './../../actions/menu';

import './menu.less'

const mapStateToProps = (store) => ({ ...store.menu })

const mapDispatchToProps = (dispatch) => ({
	showMenu: () => {
		dispatch(showDrawer())
	},

	hideMenu: () => {
		dispatch(hideDrawer())
	},

	changeCurrentCata: (cata) => {
		dispatch(changeCata(cata))
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
		const { cataData, changeCurrentCata } = this.props
		const cate = cataData[index]
		// console.log(cate)
		changeCurrentCata(cate)
	}

	render() {
		const { currentCata, cataData, drawerState, showMenu, hideMenu } = this.props
		const items = this.getItems(cataData)

		return (
			<View>
				<AtDrawer show={drawerState} mask items={items} onItemClick={this.changeCurrentCata.bind(this)} onClose={hideMenu} />
				<View className='topiclist-menu'>
					<Image onClick={showMenu} className='meun-icon' src={require('./../../assets/images/cata.png')} mode='widthFix' />
					<Text>{currentCata.value}</Text>
					<Image className='meun-icon' src={require('./../../assets/images/login.png')} mode='widthFix' />
				</View>
			</View>
		)
	}
}

export default Menu