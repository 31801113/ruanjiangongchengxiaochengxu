// pages/test/test.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seconds: 0,
    time: '00:00:00',
    status: 1, //0 游戏未开始或已经结束； 1 游戏运行中；2 游戏暂停
    score: 0, // 我的得分
    timebegin: 0, //开始时间
    guanshu:1,
    successflag:[0,0,0,0,0,0],
    cost:0
  },
  x: 0, // 用户点中的列
  y: 0, // 用户点中的行
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var temp = [[0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]];
    for (var j = 0;j <= 5;j++)
  {
    var random1 = Math.floor(Math.random()*5)
    var random2 = Math.floor(Math.random()*5)
    while (random1 == random2)
    {
      random2 = Math.floor(Math.random()*5)
    }
    temp[j][random1]=1
    temp[j][random2]=1
  }
  this.setData({
    flag:temp
  })



  var temp1 = [[0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]];
  for (var i = 0;i <= 1;i++)
  {
    var samenumber = Math.floor(10 + Math.random() * 90)
    var numbers = [0,0,0]
    var a = Math.floor(samenumber % 10)
    var b = Math.floor((samenumber / 10) % 10)
    while (a == b)
    {
      samenumber = Math.floor(10 + Math.random() * 90)
      a = Math.floor(samenumber % 10)
      b = Math.floor((samenumber / 10) % 10)
    }
    var number = Math.floor(10 + Math.random() * 90)
    var a = Math.floor(number % 10)
    var b = Math.floor((number / 10) % 10)
    while (number == samenumber || a == b)
    {
        number = Math.floor(10 + Math.random() * 90)
        a = Math.floor(number % 10)
        b = Math.floor((number / 10) % 10)
    }
    numbers[0] = number
    var number = Math.floor(10 + Math.random() * 90)
    var a = Math.floor(number % 10)
    var b = Math.floor((number / 10) % 10)
    while (number == samenumber || number == numbers[0] || a == b)
    {
        number = Math.floor(10 + Math.random() * 90)
        a = Math.floor(number % 10)
        b = Math.floor((number / 10) % 10)
    }
    numbers[1] = number
    var number = Math.floor(10 + Math.random() * 90)
    var a = Math.floor(number % 10)
    var b = Math.floor((number / 10) % 10)
    while (number == samenumber || number == numbers[0] || number == numbers[1] || a == b)
    {
        number = Math.floor(10 + Math.random() * 90)
        a = Math.floor(number % 10)
        b = Math.floor((number / 10) % 10)
    }
    numbers[2] = number
    var count = 0
    for (var j = 0;j <= 4;j++)
    {
      if (this.data.flag[i][j] == 1)
      {
        temp1[i][j] = samenumber
      }
      else
      {
        temp1[i][j] = numbers[count]
        count++
      }
    }
  }





  for (var i = 2;i <= 3;i++)
  {
    var samenumber = Math.floor(100 + Math.random() * 900)
    var numbers = [0,0,0]
    var temps = [0,0,0]
    var a = Math.floor(samenumber % 10)
    var b = Math.floor((samenumber / 10) % 10)
    var c = Math.floor((samenumber / 100) % 10)
    while (a == b || a == c || b == c || a == 0 || b == 0 || c == 0)
    {
      samenumber = Math.floor(100 + Math.random() * 900)
      a = Math.floor(samenumber % 10)
      b = Math.floor((samenumber / 10) % 10)
      c = Math.floor((samenumber / 100) % 10)
    }
    temps[0] = a
    temps[1] = b
    temps[2] = c
    temps = randoms(temps)
    var number = temps[0] * 100 + temps[1] * 10 + temps[2]
    while (number == samenumber)
    {
        temps = randoms(temps)
        number = temps[0] * 100 + temps[1] * 10 + temps[2]
    }
    numbers[0] = number
    temps = randoms(temps)
    var number = temps[0] * 100 + temps[1] * 10 + temps[2]
    while (number == samenumber || number == numbers[0])
    {
      temps = randoms(temps)
      number = temps[0] * 100 + temps[1] * 10 + temps[2]
    }
    numbers[1] = number
    temps = randoms(temps)
    var number = temps[0] * 100 + temps[1] * 10 + temps[2]
    while (number == samenumber || number == numbers[0] || number == numbers[1])
    {
        temps = randoms(temps)
        number = temps[0] * 100 + temps[1] * 10 + temps[2]
    }
    numbers[2] = number
    var count = 0
    for (var j = 0;j <= 4;j++)
    {
      if (this.data.flag[i][j] == 1)
      {
        temp1[i][j] = samenumber
      }
      else
      {
        temp1[i][j] = numbers[count]
        count++
      }
    }
  }





  for (var i = 4;i <= 5;i++)
  {
    var samenumber = Math.floor(1000 + Math.random() * 9000)
    var numbers = [0,0,0]
    var temps = [0,0,0,0]
    var a = Math.floor(samenumber % 10)
    var b = Math.floor((samenumber / 10) % 10)
    var c = Math.floor((samenumber / 100) % 10)
    var d = Math.floor((samenumber / 1000) % 10)
    while (a == b || a == c || b == c || a == 0 || b == 0 || c == 0 || d == 0)
    {
      samenumber = Math.floor(1000 + Math.random() * 9000)
      a = Math.floor(samenumber % 10)
      b = Math.floor((samenumber / 10) % 10)
      c = Math.floor((samenumber / 100) % 10)
      d = Math.floor((samenumber / 1000) % 10)
    }
    temps[0] = a
    temps[1] = b
    temps[2] = c
    temps[3] = d
    temps = randoms(temps)
    var number = temps[0] * 1000 + temps[1] * 100 + temps[2] * 10 + temps[3]
    while (number == samenumber)
    {
        temps = randoms(temps)
        number = temps[0] * 1000 + temps[1] * 100 + temps[2] * 10 + temps[3]
    }
    numbers[0] = number
    temps = randoms(temps)
    var number = temps[0] * 1000 + temps[1] * 100 + temps[2] * 10 + temps[3]
    while (number == samenumber || number == numbers[0])
    {
      temps = randoms(temps)
      number = temps[0] * 1000 + temps[1] * 100 + temps[2] * 10 + temps[3]
    }
    numbers[1] = number
    temps = randoms(temps)
    var number = temps[0] * 1000 + temps[1] * 100 + temps[2] * 10 + temps[3]
    while (number == samenumber || number == numbers[0] || number == numbers[1])
    {
        temps = randoms(temps)
        number = temps[0] * 1000 + temps[1] * 100 + temps[2] * 10 + temps[3]
    }
    numbers[2] = number
    var count = 0
    for (var j = 0;j <= 4;j++)
    {
      if (this.data.flag[i][j] == 1)
      {
        temp1[i][j] = samenumber
      }
      else
      {
        temp1[i][j] = numbers[count]
        count++
      }
    }
  }
  this.setData({
    value:temp1
  })



    var arr = [[0,0,0,0,0],
               [0,0,0,0,0],
               [0,0,0,0,0],
               [0,0,0,0,0],
               [0,0,0,0,0],
               [0,0,0,0,0]];
    this.setData({
      numbers: arr,
    })
    timing(this);
    charging(this);
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
    //console.log(e.target.id)
    var x = ((e.target.id).split(" "))[0]
    var y = ((e.target.id).split(" "))[1]
    var arr = this.data.numbers
    var charge = this.data.flag
    var flag = this.data.successflag
    var sum = 0;
    var count = 0;
    if(arr[x][y] > 0)
    {
      arr[x][y] = 0
    }
    else if(arr[x][y] == 0 && charge[x][y] == 1)
    {
      arr[x][y] = 2
    }
    else if (arr[x][y] == 0 && charge[x][y] == 0)
    {
      arr[x][y] = 1
    }
    for (var i = 0;i <= 4;i++)
      {
        if (arr[x][i] != 0)
        {
          count++
        }
        sum = sum + arr[x][i]
      }
      if (count == 2 && sum != 4 || count > 2)
      {
        for (var i = 0;i <= 4;i++)
        {
          arr[x][i] = 0
        }
      }
      else if (count == 2 && sum == 4)
      {
        flag[x] = 1
      }
      //console.log(sum)
      //console.log(count)
      //console.log(arr)
    this.setData({
      numbers: arr,
      successflag:flag
    })
    var count = this.data.guanshu
    var i;
    for (i = 0;i <= 5;i++)
    {
      if (this.data.successflag[i] == 0)
      {
          break;
      }
    }
    if (i == 6)
    {
      count++
      //var now = new Date();
      //var leave = (now.getTime() - this.data.timebegin.getTime()) / 1000;
      //app.globalData.temptime = app.globalData.temptime + leave
      if (count == 4)
      {
        app.globalData.finalscore[1] = Math.floor(this.data.seconds)
        this.modalcnt(Math.floor(this.data.seconds), this);
        this.setData({
          status:2
        })
      }
      else
      {
      this.setData({
        guanshu:count,
        successflag:[0,0,0,0,0,0]
      })
      this.onLoad()
      }
    }
  },

  modalcnt: function (s, that) {
    var temp = 0
    app.globalData.finalscore[1] = s
    app.globalData.temptime = 0
    //console.log(app.globalData.finalscore[1])
    if (app.globalData.age == 1)
    {
    if (s < 60)
    {
      temp = 10
    }
    else if (s >= 60 && s < 80)
    {
      temp = 8
    }
    else if (s >= 80 && s < 100)
    {
      temp = 6
    }
    else
    {
      temp = 4
    }
    }
    else
    {
      if (s < 70)
    {
      temp = 10
    }
    else if (s >= 70 && s < 90)
    {
      temp = 8
    }
    else if (s >= 90 && s < 110)
    {
      temp = 6
    }
    else
    {
      temp = 4
    }
    }
    app.globalData.Presult[1] = temp
    //console.log(app.globalData.Presult[1])
    wx.showModal({
      title: '恭喜你成功完成！',
      content: '你用了' + s + ' 秒就完成了测试，太厉害了！',
      cancelText: '再来一次',
      confirmText: '查看结果',
      success: function (res) {
        if (res.confirm) {
          //console.log('用户点击确定');
          that.goforward();
        } else if (res.cancel) {
          //console.log('用户点击取消');
          that.goBack();
        }
      }
    })
  },
  goBack: function () {
    // 切换页面
    wx.redirectTo({
      url: '../Pindex2/index2'
    });
  },

  goforward: function() {
    wx.redirectTo({
      url: '../result/result',
    })
  }
});

// 数组，洗牌算法
function randoms(send) {
  //var r = new Random();
  var temp1, temp2;
  var len = send.length;
  var n = len;
  var returnValue = new Array();
  for (var i = 0; i < n; i++) {
    temp1 = Math.random() * len | 0;
    returnValue[i] = send[temp1];
    temp2 = send[temp1];
    send[temp1] = send[len - 1];
    send[len - 1] = temp2;
    len--;
  }
  return returnValue;
}

function timing(that) {
  var seconds = that.data.seconds
  if (seconds > 21599) {
    that.setData({
      time: '时间到，游戏已停止'
    });
    return;
  }
  if (that.data.status == 1) {
    setTimeout(function () {
      that.setData({
        seconds: seconds + 1
      });
      timing(that);
    }, 1000)
    formatSeconds(that)
  }
}

function formatSeconds(that) {
  var mins = 0,
    hours = 0,
    seconds = that.data.seconds,
    time = ''
  if (seconds < 60) {

  } else if (seconds < 3600) {
    mins = parseInt(seconds / 60)
    seconds = seconds % 60
  } else {
    mins = parseInt(seconds / 60)
    seconds = seconds % 60
    hours = parseInt(mins / 60)
    mins = mins % 60
  }
  that.setData({
    time: formatTime(hours) + ':' + formatTime(mins) + ':' + formatTime(seconds)
  });
}

function formatTime(num) {
  if (num < 10)
    return '0' + num
  else
    return num + ''
}

function charging(that) {
  that.data.timebegin = new Date();
  that.data.status = 1;
  if (that.data.seconds < 600) {
    that.data.cost = 1
  }
}