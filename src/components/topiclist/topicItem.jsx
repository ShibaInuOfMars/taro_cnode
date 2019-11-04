import Taro, { Component } from '@tarojs/taro'

import { View, Text } from '@tarojs/components'

import { AtAvatar } from 'taro-ui'

import timeTransform  from './../../utils/filter'

import './topicItem.less'

class TopicItem extends Component {

	jumpToDetail(topic) {
		Taro.navigateTo({url: '/pages/detail/index?topicId=' + topic.id})
	}

	render() {
		const {topicItem} = this.props

		const tabType = topicItem.top ? '置顶' : (topicItem.good ? '精华' : (topicItem.tab == 'share' ? '分享' : (topicItem.tab == 'ask' ? '问答' : '主题')))

		return (
			<View className='item' hoverClass='hover-class' onClick={this.jumpToDetail.bind(this, topicItem)}>
				<AtAvatar size='small' circle image={topicItem.author ? topicItem.author.avatar_url : ''} />
				<View className='right'>
					<View className='title-wrapper'>
						<View className={'tab'+ ' ' + (!topicItem.top && !topicItem.good ? 'normal' : '')}>{tabType}</View>
						<View className='title'>{topicItem.title}</View>
					</View>

					<View className='other-info'>
						<Text className='author'>{topicItem.author ? topicItem.author.loginname : ''}</Text>
						<Text className='number'><Text className='number-one'>{topicItem.reply_count}</Text>/{topicItem.visit_count}</Text>
						<Text className='time'>{timeTransform(topicItem.last_reply_at)}</Text>
					</View>
				</View>
			</View>
		)
	}
}

TopicItem.defaultProps = {
	topicItem: []
}

export default TopicItem