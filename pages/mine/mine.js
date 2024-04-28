Page({
  // {
  //   "id": 4,
  //   "imgIcon": "../../images/mine/kf.png",
  //   "text": "问题反馈",
  //   "imgUrl": "../../images/mine/right.png",
  // },
  data: {
    bannerList: [{
        "id": 1,
        "imgUrl": "../../images/banner/banner_01.png",
        "title": "我发布的",
        "role": 1,
        "status": -1,
        "type": null,
      },
      {
        "id": 2,
        "imgUrl": "../../images/banner/banner_02.png",
        "title": "时间币",
        "role": 2,
        "status": -1,
        "type": null,
      },
      {
        "id": 3,
        "imgUrl": "../../images/banner/banner_03.png",
        "title": "我的服务",
        "role": null,
        "type": 1,
        "status": 0,
      },
      {
        "id": 4,
        "imgUrl": "../../images/banner/banner_04.png",
        "title": "我的预约",
        "role": null,
        "type": 2,
        "status": 0,
      }
    ],
    functionList: [
      {
        "id": 1,
        "imgIcon": "../../images/mine/register.png",
        "text": "个人注册",
      },
      {
        "id": 2,
        "imgIcon": "../../images/mine/prove.png",
        "text": "荣誉证明",
      },
      {
        "id": 3,
        "imgIcon": "../../images/mine/problem.png",
        "text": "常见问题",
      },
      {
        "id": 4,
        "imgIcon": "../../images/mine/set.png",
        "text": "设置",
      },
    ],
    isShowChangeUserInfo: false
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
  handleBannerList: function (event) {
    const userInfo = this.data.userInfo
    if (!userInfo) {
      wx.navigateTo({
        url: `/pages/login/login`,
      })
      return
    }
    const index = event.currentTarget.dataset.index
    if(index==0){
      wx.navigateTo({
        url: '/pages/my-publish/my-publish',
      })
    }else if(index==1){
      wx.navigateTo({
        url: '/pages/timecoin/timecoin',
      })
    }else if(index==2){
      wx.navigateTo({
        url: '/pages/my-service/my-service',
      })
    }else{
      wx.navigateTo({
        url: '/pages/my-order/my-order',
      })
    }
  },
  handleFunctionList: function (event) {
    const categoryIndex = event.currentTarget.dataset.index
    if (categoryIndex == 0) {
      if (!this.data.userInfo) {
        wx.navigateTo({
          url: `/pages/login/login`,
        })
        return
      }
      wx.navigateTo({
        url: `/pages/register/register`,
      })
    } else if (categoryIndex == 1) {
      if (!this.data.userInfo) {
        wx.navigateTo({
          url: `/pages/login/login`,
        })
        return
      }
      wx.showToast({
        title: '暂无证书',
        icon:'none'
      })
    } else if (categoryIndex == 2) {
      wx.navigateTo({
        url: `/pages/evaluate/evaluate`,
      })
    }else {
      wx.navigateTo({
        url: `/pages/set/set`,
      })
    }
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
    const userInfo = wx.getStorageSync('userInfo')
    console.log(userInfo,'userInfo')
    this.setData({
      userInfo
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