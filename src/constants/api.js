const BASE_URL = 'https://cnodejs.org/api/v'

const CN_API = {
  get_topics: BASE_URL + '/topics', // 获取主题
  get_topic_detail: BASE_URL + '/topics/' // 获取主题详情，后需加上 /:id
}

export default CN_API