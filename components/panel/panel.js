// components/panel/panel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    panelList: Array,
    tabName:String,
    tabsName:String
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
    handlePanelItem: function (event) {
      // console.log(event.currentTarget.dataset.id,'panelItem')
      const panelId = event.currentTarget.dataset.id
      this.triggerEvent('panel',{panelId:panelId})
    },
  }
})