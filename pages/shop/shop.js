// pages/shop/shop.js
Page({

  data: {
    "cn": {
      text: "商店"
    },
    "en": {
      text: "Shop"
    }
  },

  onLoad: function (options) {
    
  },

  onReady: function () {

  },

  onShow: function () {
    if (getApp().globalData.userLanguage === "en") {
      this.setData({
        content: this.data.en.text
      })
    } else if (getApp().globalData.userLanguage === "cn") {
      this.setData({
        content: this.data.cn.text
      })
    }
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