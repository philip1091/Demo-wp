// pages/home/home.js
Page({
  data: {
    "cn": {
      text: "<- EN"
    },
    "en": {
      text: "中文 ->"
    }
  },

  switch2Change: function (e) {
    var page = this
    if (e.detail.value === false) {
      this.setData({
        content: page.data.en.text
      })
      getApp().globalData.userLanguage = "en"
    } else if (e.detail.value === true) {
      this.setData({
        content: page.data.cn.text
      })
      getApp().globalData.userLanguage = "cn"
    }
    getApp().changeTab()
  },

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

  onReady: function () {

  },

 
  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})