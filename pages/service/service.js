// pages/service/service.js
Page({
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    let type=options.type
    this.setData({
      type
    })
    if (type == 1) {
      // 给页面添上标题
      wx.setNavigationBarTitle({
        title: '提供服务'
      })
    }else{
      // 给页面添上标题
      wx.setNavigationBarTitle({
        title: '寻找服务'
      })
    }
  },
  handleOfferSelect:function(event){
    const index=event.currentTarget.dataset.index
    let serviceOfferList=this.data.serviceOfferList
    let serviceDetail=serviceOfferList[index]
    wx.setStorageSync('serviceDetail', serviceDetail)
    wx.navigateTo({
      url: '/pages/service-detail/service-detail?type='+this.data.type+"&index="+index,
    })
  },
  handleSeekSelect:function(event){
    const index=event.currentTarget.dataset.index
    let serviceSeekList=this.data.serviceSeekList
    let serviceDetail=serviceSeekList[index]
    wx.setStorageSync('serviceDetail', serviceDetail)
    wx.navigateTo({
      url: '/pages/service-detail/service-detail?type='+this.data.type+"&index="+index,
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