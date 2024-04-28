// pages/register/register.js
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
  handleRegister:function(event){
    let userInfo = wx.getStorageSync('userInfo')
    if(userInfo.role){
      wx.showToast({
        title: '您已完成过注册',
        icon:'none'
      })
      setTimeout(function(){
        wx.switchTab({
          url: '/pages/home/home',
        })
      },1000)
      return
    }
    let type=event.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/register-form/register-form?type='+type,
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