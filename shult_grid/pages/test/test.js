// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    second: 0,
    time: '00:00:00',
    arr:[[0,0,0,0,0],
         [0,0,0,0,0],
         [0,0,0,0,0],
         [0,0,0,0,0],
         [0,0,0,0,0],
         [0,0,0,0,0]],
    flag:[[0,0,0,0,0],
           [0,0,0,0,0],
           [0,0,0,0,0],
           [0,0,0,0,0],
           [0,0,0,0,0],
           [0,0,0,0,0]],
    value:[[19,23,26,18,23],
           [34,51,17,34,37],
           [365,356,366,635,365],
           [549,459,495,459,594],
           [1793,7193,7139,7193,1739],
           [8247,8724,8427,8274,8427]],
    //value:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    status: 0, //0 游戏未开始或已经结束； 1 游戏运行中；2 游戏暂停
    score: 0, // 我的得分
    timebegin: 0, //开始时间
  },
  x: 0, // 用户点中的列
  y: 0, // 用户点中的行
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var asd = [[0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]];
    for (var j = 0;j <= 5;j++)
  {
    var random1 = Math.floor(Math.random()*6)
    var random2 = Math.floor(Math.random()*6)
    while (random1 == random2)
    {
      random2 = Math.floor(Math.random()*6)
    }
    asd[j][random1]=1
    asd[j][random2]=1
  }
  this.setData({
    flag:asd
  })
  console.log(this.data.flag)
    var arr = [[0,0,0,0,0],
               [0,0,0,0,0],
               [0,0,0,0,0],
               [0,0,0,0,0],
               [0,0,0,0,0],
               [0,0,0,0,0],];
    this.setData({
      numbers: arr
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

  },
  setcolor: function(e){
    console.log(e.target.id)
    var x = ((e.target.id).split(" "))[0]
    var y = ((e.target.id).split(" "))[1]
    var arr = this.data.numbers
    if(arr[x][y] == 0)
      arr[x][y] = 1
    else if(arr[x][y] == 1)
      arr[x][y] = 0
    this.setData({
      numbers: arr
    })
  }
})