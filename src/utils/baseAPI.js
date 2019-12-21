import wepy from 'wepy'

// 封装toast提示
wepy.myToast = function (title, icon = 'none') {
  wepy.showToast({
    title,
    icon
  })
}

// 封装wepy的get请求

const baesURL = 'https://ugo.botue.com/api/public/v1'

wepy.get = function (url, data = {}) {
  return wepy.request({
    url: baesURL + url,
    method: 'GET',
    data
  })
}

wepy.post = function (url, data = {}) {
  return wepy.request({
    url: baesURL + url,
    method: 'POST',
    data
  })
}
