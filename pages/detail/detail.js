// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 500,
    detaildata: { title: '中老年2017秋冬长袖连衣裙中长款宽松百搭舒适打底衫', price: '199.00', originalPrice: '259.00'},
    detaildata1: {
      imgUrls: ['https://gd4.alicdn.com/imgextra/i3/272081940/TB25KPNjm0mpuFjSZPiXXbssVXa_!!272081940.jpg', 'https://gd4.alicdn.com/imgextra/i4/272081940/TB2JJ4PiDnI8KJjSszgXXc8ApXa_!!272081940.jpg', 'https://gd3.alicdn.com/imgextra/i3/272081940/TB254mDir_I8KJjy1XaXXbsxpXa_!!272081940.jpg', 'https://gd3.alicdn.com/imgextra/i3/272081940/TB25NKKcjgy_uJjSZLeXXaPlFXa_!!272081940.jpg'], kuaidi: '0', xiaoshou: '99', kucun: '600', detailurl: ['https://gd4.alicdn.com/imgextra/i3/272081940/TB25KPNjm0mpuFjSZPiXXbssVXa_!!272081940.jpg', 'https://gd4.alicdn.com/imgextra/i4/272081940/TB2JJ4PiDnI8KJjSszgXXc8ApXa_!!272081940.jpg', 'https://gd3.alicdn.com/imgextra/i3/272081940/TB254mDir_I8KJjy1XaXXbsxpXa_!!272081940.jpg', 'https://gd3.alicdn.com/imgextra/i3/272081940/TB25NKKcjgy_uJjSZLeXXaPlFXa_!!272081940.jpg']
    },
    imgUrls: ['https://gd4.alicdn.com/imgextra/i3/272081940/TB25KPNjm0mpuFjSZPiXXbssVXa_!!272081940.jpg', 'https://gd4.alicdn.com/imgextra/i4/272081940/TB2JJ4PiDnI8KJjSszgXXc8ApXa_!!272081940.jpg', 'https://gd3.alicdn.com/imgextra/i3/272081940/TB254mDir_I8KJjy1XaXXbsxpXa_!!272081940.jpg', 'https://gd3.alicdn.com/imgextra/i3/272081940/TB25NKKcjgy_uJjSZLeXXaPlFXa_!!272081940.jpg']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    wx.request({
      url: 'http://192.168.56.1:3000/shangpindetail?id='+options.id, 
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
          detaildata: res.data[0]
        })
      }
    })
    wx.request({
      url: 'http://192.168.56.1:3000/detail?id=' + options.id,
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
          detaildata1: res.data[0]
        })
        var imgurl = res.data[0].imgUrls.split(',')
        this.setData({
          imgUrls: imgurl
        })
      }
    })

  },
  jiaru:function(){
    console.log(1)
    wx.showToast({
      title: '成功加入购物车!',
      icon: 'success',
      duration: 1000
    })
  },
  shouye:function(){
    wx.switchTab({
      url: '../index/index'
    })
  },
  shopcart: function () {
    wx.switchTab({
      url: '../shopcart/shopcart'
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