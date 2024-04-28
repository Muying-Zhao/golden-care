import {getEventParam} from '../../utils/utils'
// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      type: null,
      title: '',
      category_id: null,
      description: '',
      designated_place: false,
      begin_date: '',
      end_date: '',
      price: '',
      cover_image: null
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  handleSubmit:async function(event){
    let role= wx.getStorageSync('role')
    const formData=getEventParam(event,'formData')
    if(formData.type==2&&role!=1){
      wx.showToast({
        title: '只有服务对象才能寻找服务哦',
        icon:'none'
      })
      return
    }
    if(formData.type==1&&role!=0){
      wx.showToast({
        title: '只有志愿者才能寻找服务哦',
        icon:'none'
      })
      return
    }
    const res= await wx.showModal({
      title: '提示',
      content: '是否确认申请发布该服务？',
      showCancel:true
    })
    if(!res.confirm){
      return
    }
    wx.showLoading({
      title: '正在发布',
      mask:true
    })
    try{
      console.log(formData,'formData')
      wx.setStorageSync('formData', formData)
      this._resetForm()
      wx.navigateTo({
        url: `/pages/publisher-success/publisher-success?type=${formData.type}`
      })
    }catch(e){
      console.log(e)
    }
    wx.hideLoading()
  },

  _resetForm(){
    const formData= {
      type: null,
      title: '',
      category_id: null,
      description: '',
      designated_place: false,
      begin_date: '',
      end_date: '',
      price: '',
      cover_image: null
    }
    this.setData({
      formData
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
  onShow: function () {

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