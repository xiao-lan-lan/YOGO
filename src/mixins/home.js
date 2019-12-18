import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    swiperList: [], // 轮播图列表
    categoryList: [], // 分类列表
    floorList: [] // 楼层列表
  };

  methods = {};

  onShow() {}

  onLoad() {
    this.loadSwiper()
    this.loadCategorys()
    this.loadFloor()
  }

  // 请求轮播图
  async loadSwiper() {
    // 对象解构重命名
    const { data: res } = await wepy.get('/home/swiperdata')

    // 请求失败,提醒用户
    if (res.meta.status !== 200) {
      return wepy.myToast('请求失败')
    }

    // 请求成功
    this.swiperList = res.message
    this.$apply()
  }

  // 请求分类
  async loadCategorys() {
    const { data: res } = await wepy.get('/home/catitems')

    // 请求失败,提醒用户
    if (res.meta.status !== 200) {
      return wepy.myToast('请求失败')
    }

    // 请求成功
    this.categoryList = res.message
    this.$apply()
  }

  // 请求楼层
  async loadFloor() {
    const { data: res } = await wepy.get('/home/floordata')
    // 请求失败
    if (res.meta.status !== 200) {
      return wepy.myToast('请求失败')
    }
    // 请求成功
    this.floorList = res.message
    this.$apply()
  }
}
