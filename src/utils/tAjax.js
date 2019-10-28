import Taro from '@tarojs/taro'

export default (url, data, method = 'GET') => {
  method = method.toUpperCase()
  data = data || {}
  return new Promise((resolve) => {
    if(method === 'GET') {
      return Taro.request({
        url,
        data,
        method
      }).then(res => {
        resolve(res.data);
      }).catch(() => {
        Taro.showToast({
          title: '网络异常，请稍后再试',
          icon: 'none'
        })
      })
    } else if (method === 'POST') {
      return Taro.request({
        url,
        data,
        method
      }).then(res => {
        resolve(res.data);
      }).catch(() => {
        Taro.showToast({
          title: '网络异常，请稍后再试',
          icon: 'none'
        })
      })
    }
  })
}
