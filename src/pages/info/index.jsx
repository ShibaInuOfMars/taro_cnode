import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { connect } from '@tarojs/redux'

import TopicPanel from './../../components/topicpanel/topicPanel'

import { requestDataOfTypeAsync } from './../../actions/user'

const mapStateToProps = store => ({
	loginname: store.user.loginname
})

const mapDispatchToProps = dispatch => ({
	requestDataOfType(type, loginname) {
		if(!type) {
			return;
		} else {
			return dispatch(requestDataOfTypeAsync(type, loginname))
		}
	}
})

@connect(mapStateToProps, mapDispatchToProps)

class Info extends Component {

	state = {
		type: null,
		tag: null,
		info: []
	}

	componentDidMount() {
		const { loginname, requestDataOfType } = this.props

		this.setState({
			type: this.$router.params.type,
			tag: this.$router.params.tag
		}, () => {
			requestDataOfType(this.state.type, loginname).then(res => {
				// console.log(res)
				if(res.success&&this.state.tag === 'topics') {
					this.setState({
						info: res.data.recent_topics
					}) 
				} else if (res.success&&this.state.tag === 'replies') {
					this.setState({
						info: res.data.recent_replies
					}) 
				} else if (res.success&&this.state.tag === 'collect') {
					// console.log(res)
					this.setState({
						info: res.data
					}) 
				} else {
					Taro.showToast({
						title: '数据请求失败',
						icon: 'none'
					})
				}
			})
		})
	}

	render() {
		const {tag, info} = this.state
		// console.log(info)

		const titleText = tag === 'topics' ? '我的话题' : (tag === 'replies' ? '我参与的话题' : '我的收藏')

		Taro.setNavigationBarTitle({title: titleText})

		return (
			<View className='info'>
				{
					info.map(item => (<TopicPanel key={item.id}  topicItem={item} />))
				}
			</View>
		)
	}
}

export default Info