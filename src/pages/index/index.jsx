import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import Menu from './../../components/menu/menu'

import TopicList from './../../components/topiclist/topicList'

import './index.less'

class Index extends Component {

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  /* config = {
    navigationBarTitleText: 'CNode'
  } */

  componentDidShow() { }

  componentDidHide() { }

  render() {
    Taro.setNavigationBarTitle({title: 'CNode'})
    
    return (
      <View className='index'>
        <Menu />
        <TopicList />
      </View>
    )
  }
}

export default Index
