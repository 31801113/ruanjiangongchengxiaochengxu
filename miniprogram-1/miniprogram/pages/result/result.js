// pages/result/result.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grade:'A'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var temp = 0
    temp = app.globalData.Presult[0] + app.globalData.Presult[1]
    if (temp > 16)
    {
      app.globalData.Pfinalscore = 'A'
      app.globalData.Pfinalscorenumber = 3
      this.setData({
        grade:'A'
      })
    }
    else if (temp > 12 && temp <= 16)
    {
      app.globalData.Pfinalscore = 'B'
      app.globalData.Pfinalscorenumber = 2
      this.setData({
        grade:'B'
      })
    }
    else if (temp > 8 && temp <= 12)
    {
      app.globalData.Pfinalscore = 'C'
      app.globalData.Pfinalscorenumber = 1
      this.setData({
        grade:'C'
      })
    }
    else
    {
      app.globalData.Pfinalscore = 'D'
      app.globalData.Pfinalscorenumber = 0
      this.setData({
        grade:'D'
      })
    }
    //console.log(app.globalData.Pfinalscorenumber)
    const db = wx.cloud.database();
    db.collection('user').add({
      data:{
          "a": temp / 2.0 * 10
      }
  })
  .then(res=>{
    console.log(res)
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})