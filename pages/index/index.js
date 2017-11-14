//index.js
//获取应用实例
import testDrive from '../../modules/test-drive'
const app = getApp()

Page({
  data: {
    slides: null,
    entities: null
  },
  testDrive,
  readMore(event) {
    wx.navigateTo({
      url: `/pages/vehicles/show?id=${event.target.dataset.id}`
    })
  },
  onLoad() {
    this.setData({
      slides: app.globalData.slides,//幻灯片的获取
      entities: app.globalData.vehicles
    })
  }
})

