//首页
const citys = {
  辽宁省: ['沈阳市','大连市','鞍山市','抚顺市','本溪市','丹东市','锦州市','营口市','辽阳市','盘锦市','铁岭市','朝阳市','葫芦岛市','阜新市']
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serviceOfferList:[
      {
        id:'1',
        type: "1",
        title: '陪老人聊天',
        category: "情感慰藉",
        description: '善解人意',
        designated_place: "鞍山市",
        begin_date: '2024-02-21 13:35:07',
        end_date: '2024-12-30',
        price: '5',
        cover_image: "../../images/chat.jpg",
        solded:"0",
        score:"4",
        publish_acatar:'https://cdn.love.daishushu.cn/tmp/qzSjz09hWwtcabefe7549141cef2943286e73a9fbc85.jpeg-ff',
        publish_nickname:"小炑"
      },
      {
        id:'2',
        type: "1",
        title: '健康知识讲座',
        category: "健康科普",
        description: '科普健康知识，共同保护长辈健康。组织老人学习心理保健知识,提高老人自我调节保健能力，正确认识老年病，做到理解接纳、自我调适及控制、更好地认识自己，促进自我身心健康的发展。',
        designated_place: "鞍山市",
        begin_date: '2024-02-05 15:00:07',
        end_date: '2024-12-30',
        price: '1',
        cover_image: "../../images/health.jpg",
        solded:"2",
        score:"3",
        publish_acatar:'https://cdn.love.daishushu.cn/tmp/qzSjz09hWwtcabefe7549141cef2943286e73a9fbc85.jpeg-ff',
        publish_nickname:"小炑"
      },
      {
        id:'3',
        type: "1",
        title: '下棋',
        category: "文体活动",
        description: '下棋可以锻炼思维，提高智力。通过不断下棋，防止细胞衰退。',
        designated_place: "鞍山市",
        begin_date: '2024-01-01 10:00:20',
        end_date: '2024-12-30',
        price: '1',
        cover_image: "../../images/literaryform.jpg",
        solded:"2",
        score:"5",
        publish_acatar:'https://cdn.love.daishushu.cn/tmp/qzSjz09hWwtcabefe7549141cef2943286e73a9fbc85.jpeg-ff',
        publish_nickname:"小炑"
      },
      {
        id:'4',
        type: "1",
        title: '送餐',
        category: "协助服务",
        description: '该项目旨在为老年人提供卫生、可口、健康的餐食，特别是可以给不方便的老人送餐到家',
        designated_place: "鞍山市",
        begin_date: '2023-12-04 22:17:07',
        end_date: '2024-12-30',
        price: '2',
        cover_image: "../../images/delivered.jpg",
        solded:"1",
        score:"3",
        publish_acatar:'https://cdn.love.daishushu.cn/tmp/qzSjz09hWwtcabefe7549141cef2943286e73a9fbc85.jpeg-ff',
        publish_nickname:"小炑"
      }
    ],
    serviceSeekList:[
      {
        id:'1',
        type: "2",
        title: '寻找保洁阿姨',
        category: "协助服务",
        description: '室内房屋打扫，卫生消毒',
        designated_place: "鞍山市",
        begin_date: '2024-02-18 17:35:07',
        end_date: '2024-12-30',
        price: '5',
        cover_image: "http://qinchenju.com/homemaking/storage/20230409/7ecdecabf9e07d14419bd852b741abbc.jpg",
        solded:"0",
        score:"4",
        publish_acatar:'https://thirdwx.qlogo.cn/mmopen/vi_32/GHPicuIwH1F2h0DcQFicCSAMe8HJ0V8y8RQZA6t7icuBEBYEqp0g8u0nFLZ7n1UGAKphhicwv0fOiaE4Xc0psfia02Jw/132',
        publish_nickname:"赵小曼"
      },
      {
        id:'2',
        type: "2",
        title: '养老保险顾问',
        category: "法律援助",
        description: '城乡医疗保险政策咨询',
        designated_place: "鞍山市",
        begin_date: '2024-01-15 13:00:07',
        end_date: '2024-12-30',
        price: '3',
        cover_image: "../../images/slider/baoxian.jpeg",
        solded:"1",
        score:"2",
        publish_acatar:'https://thirdwx.qlogo.cn/mmopen/vi_32/eiaW6nDJ3BSoZCtQoVXFMAEPoMnyVIcRW6zwuOVaw52WEYFzxHoxNXNSib6gcJPicNUF1f14NzFu527pRNzTOIdSA/132',
        publish_nickname:"卜算"
      },
      {
        id:'3',
        type: "2",
        title: '护理陪伴',
        category: "文体活动",
        description: '帮忙推车去公园遛弯',
        designated_place: "鞍山市",
        begin_date: '2024-01-11 09:35:07',
        end_date: '2024-12-30',
        price: '5',
        cover_image: "../../images/slider/huli.jpg",
        solded:"0",
        score:"2",
        publish_acatar:'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLUqaOLnLDxwPmkD5iatbWyQZTuWz1E7BSpMibIWF76nnia7TUnXQfQK0nkeEgcDY2d20zQlSGOTtokg/132',
        publish_nickname:"小希望"
      },
      {
        id:'1',
        type: "2",
        title: '健康体检陪同',
        category: "协助服务",
        description: '去医院检查身体',
        designated_place: "鞍山市",
        begin_date: '2024-01-01 10:00:07',
        end_date: '2024-12-30',
        price: '3',
        cover_image: "../../images/slider/tijian.jpg",
        solded:"0",
        score:"4",
        publish_acatar:'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI5QcSvcJFxqTXE8UCk1exICaeLSb686vrBJjn5AvDeneGsz6NyvzsbIX6naKRAQqBJKj7iaVVrlAA/132',
        publish_nickname:"龙溪"
      },
    ],
    //role 1是志愿者，2是服务对象
    selectedCity:"鞍山市",
    isShowSelcetCity:false,
    columns: [
      {
        values: Object.keys(citys),
        className: 'column1',
      },
      {
        values: citys['辽宁省'],
        className: 'column2',
        defaultIndex: 2,
      },
    ],
  },
  onChange(event) {
    const { picker, value, index } = event.detail;
    picker.setColumnValues(1, citys[value[0]]);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    
  },
  // 选择地方
  handleSelectCity:function(){
    this.setData({
      isShowSelcetCity:true
    })
  },
  handleCloseSelectCity(){
    this.setData({
      isShowSelcetCity:false
    })
  },
  onCancel(){
    this.setData({
      isShowSelcetCity:false
    })
  },
  onChange:function(event){
     const selectCity=event.detail.value[1]
     this.setData({
      selectCity
     })
  },
  onConfirm(){
    this.setData({
      selectedCity:this.data.selectCity,
      isShowSelcetCity:false
    })
  },
  //服务
  handleService(event){
    if(!this.data.userInfo){
      wx.showToast({
        title: '请先完成登录',
        icon:'none'
      })
      setTimeout(function(){
        wx.navigateTo({
          url: '/pages/login/login',
        })
      },1000)
      return
    }
    if(!this.data.userInfo.role){
      wx.showToast({
        title: '您还未进行个人注册，请前往去提交申请',
        icon:'none'
      })
      setTimeout(function(){
        wx.navigateTo({
          url: '/pages/register/register',
        })
      },1000)
      return
    }
    const type= event.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/service/service?type='+type,
    })
  },

  handlePublish:function(){
    wx.switchTab({
      url: '/pages/publish/publish',
    })
  },
  
  handleYuFang: function () {
    wx.navigateTo({
      url: '/pages/yufang/yufang',
    })
  },
  handleRegister:function(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  handleServiceDetail(event){
    console.log(event.currentTarget.dataset.cur,'event')
    let index=event.currentTarget.dataset.cur
    let serviceDetail=this.data.serviceOfferList[index]
    wx.setStorageSync('serviceDetail', serviceDetail)
    wx.navigateTo({
      url: '/pages/service-detail/service-detail?type='+'1'+"&index="+index,
    })

  },
  
  handleServiceSeek(event){
    let index=event.currentTarget.dataset.cur
    let serviceDetail=this.data.serviceSeekList[index]
    wx.setStorageSync('serviceDetail', serviceDetail)
    wx.navigateTo({
      url: '/pages/service-detail/service-detail?type='+'1'+"&index="+index,
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
    let userInfo= wx.getStorageSync('userInfo')
    let role= wx.getStorageSync('role')
    this.setData({
      userInfo,role
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