// pages/explain/explain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      version: '1.9.5',
      
  },
  imgClick(){
    wx.previewImage({
      current: 'https://cdn.love.daishushu.cn/zanzhu.jpg', // 当前显示图片的http链接
      urls: ['https://cdn.love.daishushu.cn/zanzhu.jpg'] // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let accountInfo = wx.getAccountInfoSync();
    let envVersion = accountInfo.miniProgram.envVersion; // "develop"开发版
    let version = accountInfo.miniProgram.version; // 1.0.0 小程序版本号
    this.setData({
      version: version
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