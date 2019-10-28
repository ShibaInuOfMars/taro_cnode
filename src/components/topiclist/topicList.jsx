import Taro, { Component } from '@tarojs/taro'

import { ScrollView, View } from '@tarojs/components'

import { connect } from '@tarojs/redux'

import TopicItem from './topicItem'

import { getTopicListAsync, addTopicListAsync } from './../../actions/topic'

const mapStateToProps = (store) => ({ ...store.topic, tab: store.menu.currentCata })

const mapDispatchToProp = (dispatch) => ({
	getTopicList: (params) => {
		dispatch(getTopicListAsync(params))
	},

	addTopicList: (params) => {
		dispatch(addTopicListAsync(params))
	}
})

@connect(mapStateToProps, mapDispatchToProp)

class TopicList extends Component {

	componentDidMount() {
		const { page, limit, tab, getTopicList } = this.props;
		getTopicList({ page, limit, tab: tab.key, mdrender: 'false' })
	}

	onScrollToLower() {
		const { page, limit, tab, addTopicList } = this.props;
		addTopicList({ page: page + 1, limit, tab: tab.key, mdrender: 'false' })
	}

	render() {
		const { list } = this.props

		return (
			<ScrollView style='height: 800px' scrollY onScrollToLower={this.onScrollToLower.bind(this)}>
				{
					list.map(item => <TopicItem topicItem={item} key={item.id} />)
				}
				<View style={{ textAlign: 'center', lineHeight: '40px', background: '#f5f5f5', color: '#333' }}>正在加载中...</View>
			</ScrollView>
		)
	}
}

export default TopicList