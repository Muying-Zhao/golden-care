// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
    userInfo: {
      nickname: '守望相助',
      avatar: '../../images/login/login_theme.png'
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  handleLogin: async function () {
    const res = await wx.getUserProfile({
      desc: '完善用户信息',
    })
    wx.showLoading({
      title: '正在授权',
      mask:true
    })

    // 获取令牌可能会有异常处理情况需要处理,使后面的代码执行,(异常会中断后续代码的继续执行,错误不会中断后续代码的执行)

    // try用于捕获操作异常
    try {
      const isLogin=true
      wx.setStorageSync('isLogin', isLogin)
      wx.navigateBack()
    }catch(e){
      wx.showModal({
        title:'注意',
        content:'登陆失败，请稍后重试',
        showCancel:false
      })
      console.log(e)
    }
    wx.hideLoading()
    // 返回上一页
    // wx.navigateBack()
  },
  handleToBack: function () {
    wx.switchTab({
      url:'/pages/home/home'
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
  onShow() {

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