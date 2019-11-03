import Taro, {Component} from '@tarojs/taro'
import {View, Text, RichText} from '@tarojs/components'

import './topicContent.less'

class TopicContent extends Component {

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
					<View className='collect' hoverClass='collect-press'>收藏</View>
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