const BASE_URL = 'https://cnodejs.org/api/v1'

const CN_API = {
  get_topics: BASE_URL + '/topics', // 获取主题
  get_topic_detail: BASE_URL + '/topic/', // 获取主题详情，后需加上 /:id
  get_user_detail: BASE_URL + '/user/', // 用户详情，后需加上 /:loginname
  get__topic_collect: BASE_URL + '/topic_collect/', // 用户所收藏的主题 后需加上 /:loginname
  post_access_token: BASE_URL + '/accesstoken' // 验证 accessToken 的正确性
}

export default CN_API