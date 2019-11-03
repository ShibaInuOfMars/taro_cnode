import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'

import { connect } from '@tarojs/redux'

import TopicContent from './../../components/topicdetail/topicContent'

import TopicReply from './../../components/topicdetail/topicReply'

import {getTopicDetailAsync} from './../../actions/topic'

const mapStateToProps = (store) => ({
	topicContent: store.topic.topicContent,
	topicReply: store.topic.topicReply,
	accesstoken: store.user.accesstoken,
	collectState: store.topic.collectState 
})

const mapDispatchToProps = (dispatch) => ({
	getTopicDetail(params) {
		dispatch(getTopicDetailAsync(params))
	}
})

@connect(mapStateToProps, mapDispatchToProps)

class Detail extends Component {

	componentDidMount() {
		this.getDetail()
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.collectState !== nextProps.collectState) { // 判断下一次的状态是否与上次一致，不一致则重新请求数据
			this.getDetail()
		}
		// console.log(nextProps)
	}

	getDetail() {
		const id = this.$router.params.topicId
		const { accesstoken } = this.props
		this.props.getTopicDetail({id, accesstoken, mdrender: 'true'})
	}

	render() {
		const {topicContent, topicReply} = this.props
		// console.log(topicContent)

		return (
			<View className='detail'>
				<TopicContent topicContent={topicContent} />
				<TopicReply topicReply={topicReply} author={topicContent.author} />
			</View>
		)
	}
}

export default Detail