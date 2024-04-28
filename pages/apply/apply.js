Page({

  /**
   * 页面的初始数据
   */
  data: {
    actList:[{
      "id": 1,
      "title":"消息",
      "name":"news"
    },{
      "id": 2,
      "title":"待办",
      "name":"backlog"
    }],
    panelList: [],
    tabName:"news",
    currentTabIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    
  },

  handleTabChange:function(event){
    const tabName= event.detail.name
    this.setData({
      tabName
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