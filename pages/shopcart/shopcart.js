// pages/shopcart/shopcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shangpin: [{ imgurl: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/12375520/TB2C0IecMnH8KJjSspcXXb3QFXa_!!12375520.jpg_230x230.jpg', title: '小虫2017秋冬新款女装时尚气质宽松中长款呢子连帽大衣毛呢外套女', price: '598.00', originalPrice:'1798.00',color:'卡其色',size:'M',num:1}]
  },
  jian:function(e){
    var num = e.target.id;
    num--;
    num=num < 1 ? 1 : num;
    wx.request({
      url: 'http://192.168.56.1:3000/upnum?num=' + num + '&pid=' + e.target.dataset.hi,
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        wx.request({
          url: 'http://192.168.56.1:3000/gouwuche',
          data: {
            x: '',
            y: ''
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: (res) => {
            console.log(res.data)
            this.setData({
              shangpin: res.data
            })
          }
        })
      }
    })

  },
  jia:function(e){
    var num = e.target.id;
    num++;
    num = num >= 99 ? 99 : num ;
    wx.request({
      url: 'http://192.168.56.1:3000/upnum?num='+num+'&pid='+e.target.dataset.hi,
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        wx.request({
          url: 'http://192.168.56.1:3000/gouwuche',
          data: {
            x: '',
            y: ''
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: (res) => {
            console.log(res.data)
            this.setData({
              shangpin: res.data
            })
          }
        })
      }
    })

  },
  shanchu:function(e){
    wx.request({
      url: 'http://192.168.56.1:3000/delgwc?pid=' + e.target.dataset.pid,
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        wx.request({
          url: 'http://192.168.56.1:3000/gouwuche',
          data: {
            x: '',
            y: ''
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: (res) => {
            console.log(res.data)
            this.setData({
              shangpin: res.data
            })
          }
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://192.168.56.1:3000/gouwuche', 
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
          shangpin: res.data
        })
      }
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