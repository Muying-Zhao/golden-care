// pages/set/set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  handleYufang:function(){
    wx.navigateTo({
      url: '/pages/yufang/yufang',
    })
  },
  authInfo: function () {
    wx.navigateTo({
      url: '/pages/explain/explain',
    })
  },
  logout: async function () {
    if (!this.data.userInfo) {
      wx.showToast({
        title: '请先完成登录',
        icon:'none'
      })
      return
    }
    if (wx.getStorageSync('isLogin')) {
      const modals = await wx.showModal({
        content: '是否退出登录',
        showCancel: true
      })
      // console.log(modals.confirm,'modals')
      if (!modals.confirm) return

      wx.showLoading({
        title: '正在退出登录...',
        mask: true
      })
      try {
        const isLogin = false
        wx.setStorageSync('isLogin', isLogin)
        wx.setStorageSync('userInfo', {})
        wx.switchTab({
          url: '/pages/home/home'
        })
      } catch (e) {
        return
      }
      wx.hideLoading()
      return
    }else{
      wx.showModal({
      title: '请先完成登录',
      // 遮罩，放置用户重复点击
      mask:true
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
  onShow() {
   let userInfo= wx.getStorageSync('userInfo')
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