// pages/my-order/my-order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname:"赵小曼",
    actList: [{
        "title": "全部订单"
      }, {
        "title": "待同意"
      }, {
        "title": "待支付"
      },
      {
        "title": "待确认"
      },
      {
        "title": "待评价"
      }
    ],
    panelList: [
    {
      id:'3',
      status:"待同意",
      title: '护理陪伴',
      cover_image: "../../images/slider/huli.jpg",
      price: '5',
    }],
    currentTabIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  handleTabChange(event){
    console.log(event.detail.index)
    const index=event.detail.index
    this.setData({
      currentTabIndex:index
    })
    if(this.data.currentTabIndex==0||this.data.currentTabIndex==1){
      this.setData({
        panelList: [{
          id:'3',
          status:"待同意",
          title: '护理陪伴',
          cover_image: "../../images/slider/huli.jpg",
          price: '5',
        }]
      })
    }else{
      this.setData({
        panelList: []
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