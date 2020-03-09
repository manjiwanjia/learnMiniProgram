// component/x-tab-contrl/x-tab-contrl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex:0,

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event){
      // 去除index
      const index=event.currentTarget.dataset.index;
      // 确定好index的值后修改currentindex
      this.setData({
        currentindex:index
      })
      // 通知页面内部的点击事件
      this.triggerEvent("itemclick", { index, title: this.properties.title[index] }, {})
    }
   

  }
})
