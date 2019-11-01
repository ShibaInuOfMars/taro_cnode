import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { AtAvatar } from 'taro-ui'

import timeTransform from './../../utils/filter'

import './topicPanel.less'

class TopicPanel extends Component {

	render() {
		const {topicItem} = this.props

		return (
			<View className='item' hoverClass='hover-class' onClick={this.jumpToDetail.bind(this, topicItem)}>
				<AtAvatar circle image={topicItem.author ? topicItem.author.avatar_url : ''} />
				<View className='right'>
					<View className='title-wrapper'>
						{
							topicItem.tab ?<View className='tab'>{topicItem.tab == 'share' ? '分享' : (topicItem.tab == 'ask' ? '问答' : '主题')}</View> : null
						}
						<View className='title'>{topicItem.title}</View>
					</View>

					<View className='other-info'>
						<Text className='author'>{topicItem.author ? topicItem.author.loginname : ''}</Text>
						{
							topicItem.reply_count ? <Text className='number'><Text className='number-one'>{topicItem.reply_count}</Text>/{topicItem.visit_count}</Text> : null
						}
						<Text className='time'>{timeTransform(topicItem.last_reply_at)}</Text>
					</View>
				</View>
			</View>
		)
	}
}

TopicPanel.defaultProps = {
	topicItem: {}
}

export default TopicPanel