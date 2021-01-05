//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      traceUser: true,
    })
  },
  globalData: {
    age:1,
    userInfo: null,
    finalscore:[0,0],
    temptime:0,
    Presult:[0,0],
    Pfinalscore:'',//最终P测试等第
    Pfinalscorenumber:0//最终P测试分数
  }
})