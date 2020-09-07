// pages/home/home.js
Page({

  
  
  switch2Change: function (e) {
    getApp().changeTab()
    var page = this
    if (e.detail.value == true){
      this.setData({
        content: page.data.en.text
      })
      getApp().globalData.userLanguage = "cn"
    } else if (e.detail.value == false){
      this.setData({
        content: page.data.cn.text
      })
      getApp().globalData.userLanguage = "en"
    }
    
  },

  /**
   * Page initial data
   */
  data: {
      
    "cn": {
      text: "EN ->"
    },

    "en": {
      text: "<- 中文"
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var page = this;
    if (getApp().globalData.userLanguage == "en"){
      this.setData({
         content : page.data.en.text
      })
      
    } else if (getApp().globalData.userLanguage == "cn"){
      this.setData({
        content: page.data.cn.text
      })
    }
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})