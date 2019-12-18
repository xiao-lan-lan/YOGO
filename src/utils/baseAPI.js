import wepy from 'wepy'

// 封装toast提示
wepy.myToast = function (title, icon = 'none') {
  wepy.showToast({
    title,
    icon
  })
}
