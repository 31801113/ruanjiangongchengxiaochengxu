// pages/grid/grid.js
var app = getApp()
Page({

  data: {
    seconds: 0,
    time: '00:00:00',
    cost: 0,
    mimeMap: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15]
    ],
    sx25: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    rndInt: [],
    status: 0, //0 游戏未开始或已经结束； 1 游戏运行中；2 游戏暂停
    score: 0, // 我的得分
    timebegin: 0 //开始时间
  },
  x: 0, // 用户点中的列
  y: 0, // 用户点中的行

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setmap(this);
    charging(this);
    timing(this);
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

digGold: function (event) { // 不直接判断，而把坐标传给后台判断
    // 取到这格的坐标
    this.x = parseInt(event.target.dataset.x);
    this.y = parseInt(event.target.dataset.y);
    this.value = parseInt(event.target.dataset.value);
    //console.log(this.x, this.y, this.value, this.data.score);
    // 上报坐标
    if (this.value - this.data.score == 1) {
      //console.log(this.data.score);
      this.reportMyChoice(this.value);
      // 游戏结束
      if (this.value == 25) {
        this.setData({
          status: 0
        });
        //var now = new Date();
        //var leave = (now.getTime() - this.data.timebegin.getTime()) / 1000;
        //console.log(leave);
        this.modalcnt(Math.floor(this.data.seconds), this);
        //console.log(newMaxScore);
      }
    }
  },

  reportMyChoice: function (value) {
    this.setData({
      score: this.value
    });
    //console.log(this.value);
  },

  modalcnt: function (s, that) {
    s = Math.floor(s)
    var temp = 0
    app.globalData.finalscore[0] = s
    //console.log(app.globalData.finalscore[0])
    if (app.globalData.age = 1)
    {
    if (s < 45)
    {
      temp = 10
    }
    else if (s >= 45 && s < 60)
    {
      temp = 8
    }
    else if (s >= 60 && s < 80)
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
      if (s < 55)
    {
      temp = 10
    }
    else if (s >= 55 && s < 70)
    {
      temp = 8
    }
    else if (s >= 70 && s < 90)
    {
      temp = 6
    }
    else
    {
      temp = 4
    }
    }
    app.globalData.Presult[0] = temp
    //console.log(app.globalData.Presult[0])
    wx.showModal({
      title: '恭喜你成功完成！',
      content: '你用了' + s + ' 秒就完成了测试，太厉害了！',
      cancelText: '再来一次',
      confirmText: '下个测试',
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
      url: '../Pindex/index'
    });
  },

  goforward: function() {
    wx.redirectTo({
      url: '../Pindex2/index2',
    })
  }

});//page

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


function formatSeconds(that) {
  console.log()
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

function charging(that) {
  that.data.timebegin = new Date();
  that.data.status = 1;
  if (that.data.seconds < 600) {
    that.data.cost = 1
  }
}

function setmap(that) {
  let baseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  baseArray = randoms(baseArray);
  //console.log(baseArray);
  let len = baseArray.length;
  let n = 5; //假设每行显示5个
  let lineNum = len % n === 0 ? len / n : Math.floor((len / n) + 1);
  let res = [];
  for (let i = 0; i < lineNum; i++) {
    // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
    let temp = baseArray.slice(i * n, i * n + n);
    res.push(temp);
  }
  //console.log(res);
  that.setData({
    mimeMap: res,
    score: 0,
    seconds: 0
  });
}