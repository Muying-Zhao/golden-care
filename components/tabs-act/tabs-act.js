// components/tabs-act/tabs-act.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabsList:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTabsIndex:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChangeTab: function (event) {
      const index = event.currentTarget.dataset.index
      if(index === this.data.currentTabsIndex){
        return
      }
      this.setData({
        currentTabsIndex: index
      })
      this.triggerEvent('change', {index})
    },
  }
})
