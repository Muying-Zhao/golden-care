import {formatTime} from "../../utils/utils"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    organize:"辽宁科技大学",
    sex:"女"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let date=formatTime(new Date())
    let type = options.type
    this.setData({
      type,date
    })
    if (type == 1) {
      // 给页面添上标题
      wx.setNavigationBarTitle({
        title: '志愿者注册'
      })
    }else{
      // 给页面添上标题
      wx.setNavigationBarTitle({
        title: '服务对象注册'
      })
    }
  },
  handleName(event){
    this.setData({
      name:event.detail.value
    })
  },
  radioChange(event){
    let sex=event.detail.value
    this.setData({
      sex
    })
  },
  bindDateChange(event){
    let date=event.detail.value
    this.setData({
      date
    })
  },
  handleTel(event){
    let telephone=event.detail.value
    this.setData({
      telephone
    })
  },
  handleArea(event){
    let area=event.detail.value
    this.setData({
      area
    })
  },
  handleLikeArea(event){
    let likearea=event.detail.value
    this.setData({
      likearea
    })
  },
  handleOrganize(event){
    let organize=event.detail.value
    this.setData({
      organize
    })
  },

  handleSubmit:async function() {
    const name = this.data.name
    const sex = this.data.sex
    const date = this.data.date
    const telephone = this.data.telephone
    const area = this.data.area
    const likearea = this.data.likearea
    const organize = this.data.organize
    if(!name||!sex||!date||!telephone||!area||!likearea||!organize){
      let err={}
      if(!name){
        err.name=true
      }
      if(!sex){
        err.sex=true
      }
      if(!date){
        err.date=true
      }
      if(!telephone){
        err.telephone=true
      }
      if(!area){
        err.area=true
      }
      if(!likearea){
        err.likearea=true
      }
      if(!organize){
        err.organize=true
      }
      this.setData({
        err
      })
      return
    }
    wx.showToast({
      title: '注册成功,待审核通知',
      icon:'none'
    })
    let userInfo = wx.getStorageSync('userInfo')
    if(this.data.type==1){
      userInfo.role=1
    }else{
      userInfo.role=2
    }
    wx.setStorageSync('userInfo', userInfo)
    setTimeout(function(){
      wx.switchTab({
        url: '/pages/home/home',
      })
    },1000)
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