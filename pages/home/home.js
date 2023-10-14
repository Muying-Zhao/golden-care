Page({

  /**
   * 页面的初始数据
   */
  data: {
    panelList: [{
      "id": 1,
      "imgUrl": "../../images/slider/baoxian.jpeg",
      "title": "养老资料整理",
      "apply": 0,
      "category": "活动类型",
      "time": "time",
      "aera": "活动地点",
    }, {
      "id": 2,
      "imgUrl": "../../images/slider/huli.jpg",
      "title": "养老资料整理",
      "apply": 0,
      "category": "活动类型",
      "time": "time",
      "aera": "活动地点",
    }, {
      "id": 3,
      "imgUrl": "../../images/slider/tijian.jpg",
      "title": "养老资料整理",
      "apply": 0,
      "category": "活动类型",
      "time": "time",
      "aera": "活动地点",
    }, {
      "id": 4,
      "imgUrl": "../../images/slider/yufang.jpg",
      "title": "养老资料整理",
      "apply": 0,
      "category": "活动类型",
      "time": "time",
      "aera": "活动地点",
    }, {
      "id": 5,
      "imgUrl": "../../images/slider/baoxian.jpeg",
      "title": "养老资料整理",
      "apply": 0,
      "category": "活动类型",
      "time": "time",
      "aera": "活动地点",
    }, {
      "id": 6,
      "imgUrl": "../../images/slider/baoxian.jpeg",
      "title": "养老资料整理",
      "apply": 0,
      "category": "活动类型",
      "time": "time",
      "aera": "活动地点",
    }, {
      "id": 7,
      "imgUrl": "../../images/slider/baoxian.jpeg",
      "title": "养老资料整理",
      "apply": 0,
      "category": "活动类型",
      "time": "time",
      "aera": "活动地点",
    }],
    tabsList:[{
      "id": 1,
      "title":"推荐活动"
    },{
      "id": 2,
      "title":"近期活动"
    },{
      "id": 3,
      "title":"往期活动"
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  handleCheckTab:function(event){
    console.log(event.detail.index)
  },
  handleYuFang: function () {
    wx.navigateTo({
      url: '/pages/yufang/yufang',
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