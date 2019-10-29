import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, RichText } from '@tarojs/components'

import { AtAvatar } from 'taro-ui'

import timeTransform  from './../../utils/filter' 

import './topicReply.less'

// 判断当前运行环境是否是微信小程序
const isWeapp = process.env.TARO_ENV === 'weapp'

class TopicReply extends Component {

	render() {
		const { topicReply } = this.props

		return (
			<View className='topic-reply-wrapper'>
				<View className='topic-reply-header'>
					{topicReply.length} 回复
				</View>
				{
					topicReply.map((reply, index) => {
						return (
							<View className='topic-reply-item' key={reply.id}>
								<View className='header'>
									<AtAvatar size='small' image={reply.author ? reply.author.avatar_url : ''} />
									<View className='time-info'>
										<Text className='name'>{reply.author ? reply.author.loginname : ''}</Text>
										<Text className='floor'>{index + 1}楼</Text>
										<Text className='time'>{timeTransform(reply.create_at)}</Text>
									</View>
									{
										reply.ups.length > 0 && (
											<View className='zan'>
												<Image className='zan-img' src={require('./../../assets/images/zan.png')} />
												<Text className='num'>{reply.ups.length}</Text>
											</View>	
										)
									}
									
								</View>

								<View className='reply-content'>
									{isWeapp ? <RichText nodes={reply.content} /> : <View dangerouslySetInnerHTML={{__html: reply.content}}></View>}
								</View>
							</View>
						)
					})
				}
			</View>
		)
	}
}

TopicReply.defaultProps = {
	topicReply: []
}

export default TopicReply