// pages/service-detail/service-detail.js
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
    console.log(options,'options')
  },
  async handleOrder(){
    const res=await wx.showModal({
      title: '注意',
      content: '是否确认预约该服务',
    })
    if(!res.confirm){
      return
    }

    wx.showLoading({
      title: '正在预约',
      // 遮罩，放置用户重复点击
      mask:true
    })

    // 处理异常情况
    try{
      wx.navigateTo({
        url: '/pages/order-success/order-success',
      })
    }catch(e){
      wx.showModal({
        title: '错误',
        content: '预约失败，请稍后重试',
      })
       console.log(e)
    }
    wx.hideLoading()
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
    let serviceDetail=wx.getStorageSync('serviceDetail')
    this.setData({
      res:serviceDetail
    })
    console.log(serviceDetail,'serviceDetail')
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