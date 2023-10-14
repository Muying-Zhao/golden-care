Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      nickname: '点击授权登录',
      avatar: '../../images/login/login.png'
    },
    bannerList: [{
        "id": 1,
        "imgUrl": "../../images/banner/banner_01.png",
        "title": "全部活动",
        "role": 1,
        "status": -1,
        "type": null,
      },
      {
        "id": 2,
        "imgUrl": "../../images/banner/banner_02.png",
        "title": "正在进行",
        "role": 2,
        "status": -1,
        "type": null,
      },
      {
        "id": 3,
        "imgUrl": "../../images//banner/banner_03.png",
        "title": "已完成",
        "role": null,
        "type": 1,
        "status": 0,
      },
      {
        "id": 4,
        "imgUrl": "../../images//banner/banner_04.png",
        "title": "已取消",
        "role": null,
        "type": 2,
        "status": 0,
      }
    ],
    categoryList: [{
      "id": 1,
      "imgIcon": "../../images/mine/service.png",
      "text": "我的活动",
      "imgUrl": "../../images/mine/right.png",
    },
    {
      "id": 2,
      "imgIcon": "../../images/mine/kf.png",
      "text": "客服反馈",
      "imgUrl": "../../images/mine/right.png",
    },
    {
      "id": 3,
      "imgIcon": "../../images/mine/problem.png",
      "text": "问题帮助",
      "imgUrl": "../../images/mine/right.png",
    },
    {
      "id": 4,
      "imgIcon": "../../images/mine/set.png",
      "text": "设置",
      "imgUrl": "../../images/mine/right.png",
    },
  ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  handleToLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  async onShow() {
    const isLogin = wx.getStorageSync('isLogin')
    const userInfo = wx.getStorageSync('userInfo')
      this.setData({
        ['userInfo.nickname']: userInfo.nickname,
        ['userInfo.avatar']: userInfo.avatar,
        isLogin
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})