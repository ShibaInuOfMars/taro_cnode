import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'

import { connect } from '@tarojs/redux'

import TopicContent from './../../components/topicdetail/topicContent'

import TopicReply from './../../components/topicdetail/topicReply'

import {getTopicDetailAsync} from './../../actions/topic'

const mapStateToProps = (store) => ({
	topicContent: store.topic.topicContent,
	topicReply: store.topic.topicReply
})

const mapDispatchToProps = (dispatch) => ({
	getTopicDetail(params) {
		dispatch(getTopicDetailAsync(params))
	}
})

@connect(mapStateToProps, mapDispatchToProps)

class Detail extends Component {

	componentDidMount() {
		const id = this.$router.params.topicId
		this.props.getTopicDetail({id, mdrender: 'true'})
	}

	render() {
		const {topicContent, topicReply} = this.props
		// console.log(topicContent)

		return (
			<View className='detail'>
				<TopicContent topicContent={topicContent} />
				<TopicReply topicReply={topicReply} />
			</View>
		)
	}
}

export default Detail