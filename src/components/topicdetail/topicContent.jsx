import Taro, {Component} from '@tarojs/taro'
import {View, Text, RichText} from '@tarojs/components'

import {connect} from '@tarojs/redux'

import {collectTopicAsync, deCollectTopicAsync} from './../../actions/topic'

import {isLogin} from './../../actions/user'

import './topicContent.less'

const mapStateToProps = (store) => ({user: store.user})

const mapDispatchToProps = (dispatch) => ({
	collectTopic(params) {
		 return dispatch(collectTopicAsync(params))
	},
	deCollectTopic(params) {
		return dispatch(deCollectTopicAsync(params))
	}
})

@connect(mapStateToProps, mapDispatchToProps)

class TopicContent extends Component {

	collecttopic(topic) {
		// console.log(topic)
		const {user, collectTopic, deCollectTopic} = this.props
		// 判断用户是否登录，登录了才能收藏，没有则去登录
		if(isLogin(user)) {
			if(!topic.is_collect) { // 点击了收藏
				collectTopic({accesstoken: user.accesstoken, topic_id: topic.id}).then(res => {
					// console.log(res)
					res.success ? Taro.showToast({title: '收藏成功', icon: 'none'}) : Taro.showToast({title: '收藏失败', icon: 'none'})
					
				})
			} else { // 点击了取消收藏
				deCollectTopic({accesstoken: user.accesstoken, topic_id: topic.id}).then(res => {
					res.success ? Taro.showToast({title: '取消收藏成功', icon: 'none'}) : Taro.showToast({title: '取消收藏失败', icon: 'none'})
				})
			}
		}
	}

	render() {
		const {topicContent} = this.props
		Taro.setNavigationBarTitle({title: topicContent.author ? topicContent.author.loginname : ''})

		const tabType = topicContent.tab == 'share' ? '分享' : (topicContent.tab == 'ask' ? '问答' : '主题')

		return (
			<View className='topic-content-wrapper'>
				<View className='topic-content-header'>
					<View className='topic-title'>{topicContent.title || ''}</View>
					<View className='topic-info'>
						<Text className='info'>{'作者' + ' ' + (topicContent.author.loginname || '')}</Text>
						<Text className='info visit-count'>{(topicContent.visit_count || '') + ' ' + '次浏览'}</Text>
						<Text className='info tab'>来自 {tabType || ''}</Text>
					</View>
					<View className={['collect', topicContent.is_collect ? 'cancel-collect' : '']} hoverClass={topicContent.is_collect ? 'collect-press-cancel' : 'collect-press'} onClick={this.collecttopic.bind(this, topicContent)}>{topicContent.is_collect ? '取消收藏' : '收藏'}</View>
				</View>

				<View className='topic-content'>
					<RichText nodes={topicContent.content || ''} />
				</View>
			</View>
		)
	}
}

TopicContent.defaultProps = {
	topicContent: {}
}

export default TopicContent