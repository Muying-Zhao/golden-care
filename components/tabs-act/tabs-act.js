// components/tabs-act/tabs-act.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabsList:Object,
    currentTabIndex:Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChangeTab: function (event) {
      const index = event.currentTarget.dataset.index
      // console.log(event.currentTarget.dataset,'dataset')
      const name=event.currentTarget.dataset.name
      if(index === this.data.currentTabIndex){
        return
      }
      this.setData({
        currentTabIndex: index
      })
      this.triggerEvent('change', {index,name})
    },
  }
})
