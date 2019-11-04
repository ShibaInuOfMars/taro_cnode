import Taro from '@tarojs/taro'

export default (url, data, method = 'GET') => {
  method = method.toUpperCase()
  data = data || {}
  return new Promise((resolve) => {
    if(method === 'GET') {
      Taro.showLoading({title: '加载中...'})
      return Taro.request({
        url,
        data,
        method
      }).then(res => {
        Taro.hideLoading()
        resolve(res.data);
      }).catch(() => {
        Taro.hideLoading()
        Taro.showToast({
          title: '网络异常，请稍后再试',
          icon: 'none'
        })
      })
    } else if (method === 'POST') {
      Taro.showLoading({title: '加载中...'})
      return Taro.request({
        url,
        data,
        method,
        header: {
          'content-type': 'application/json'
        }
      }).then(res => {
        Taro.hideLoading()
        resolve(res.data);
      }).catch(() => {
        Taro.hideLoading()
        Taro.showToast({
          title: '网络异常，请稍后再试',
          icon: 'none'
        })
      })
    }
  })
}
