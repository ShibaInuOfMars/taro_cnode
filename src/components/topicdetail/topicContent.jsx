import Taro, {Component} from '@tarojs/taro'
import {View, Text, RichText} from '@tarojs/components'

import './topicContent.less'

class TopicContent extends Component {

	render() {
		const {topicContent} = this.props
		Taro.setNavigationBarTitle({title: topicContent.author ? topicContent.author.loginname : ''})

		return (
			<View className='topic-content-wrapper'>
				<View className='topic-content-header'>
					<View className='topic-title'>{topicContent.title || ''}</View>
					<View className='topic-info'>
						<Text className='info'>{'作者' + ' ' + topicContent.author.loginname || ''}</Text>
						<Text className='info visit-count'>{topicContent.visit_count + ' ' + '次浏览' || ''}</Text>
						<Text className='info tab'>来自 {topicContent.tab || ''}</Text>
					</View>
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