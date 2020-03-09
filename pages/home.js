// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow:true

  },
  // 这种是直接在page内修改组件内的值，不合理（不推荐）
  handleContrlClick(event){
    console.log(event)
  },
  handeleSubClick(event){
    const y_sel = this.selectComponent(".dealevent")
    y_sel.setData({
      counter:y_sel.data.counter-20
    })

  },
  // 这种是在组件内留接口，然后不直接通过page更改counter值，而是通过接口修改counter更合理（推荐）
  handeleBtnClick(event){
    // 通过home内找到组件，再通过组件修改counter
    const x_sel=this.selectComponent(".dealevent")
    x_sel.subductionCounter(50)

  },
  changeShow(){
    this.setData({
      isshow:!this.data.isshow
    })
  }
})
