// pages/shopcart/shopcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: ['首页', '外套', '上衣', '裙装', '裤装', '配饰', '套装', '中老','活动','运动'],
    imgUrls: ['https://gw.alicdn.com/bao/uploaded/TB1S8dqSVXXXXcxXFXXSutbFXXX.jpg', 'https://gw.alicdn.com/bao/uploaded/TB1TxBGi26H8KJjy0FjSuuXepXa.jpg','https://img.alicdn.com/bao/uploaded/i2/263817957/TB15nQJiL2H8KJjy1zkXXXr7pXa_!!0-item_pic.jpg_b.jpg'],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 700,
    rexiao_imgUrls: [{ imgUrls: 'https://gd4.alicdn.com/imgextra/i2/TB1OdLvOpXXXXbHapXXYXGcGpXX_M2.SS2', title: '白线流/这件毛呢外套比电影上看到的那些好看多了 中长款毛呢外套', price: '229.00', originalPrice: '419.00' }, { imgUrls: 'https://gd1.alicdn.com/imgextra/i4/2816721683/TB287P.g4rI8KJjy0FpXXb5hVXa_!!2816721683.jpg', title: '2017冬新品韩国连帽超大毛领羽绒服女中长款宽松刺绣字母加厚外套', price: '899.00', originalPrice: '999.00' }, { imgUrls: 'https://img.alicdn.com/bao/uploaded/i2/263817957/TB15nQJiL2H8KJjy1zkXXXr7pXa_!!0-item_pic.jpg_b.jpg', title: '韩都衣舍韩版宽松连帽套头加绒卫衣', price: '199.00', originalPrice: '419.00' }, { imgUrls: 'https://gd2.alicdn.com/imgextra/i2/2759214285/TB2UFallCYH8KJjSspdXXcRgVXa_!!2759214285.jpg', title: '格子大衣女中长款2017冬装新款韩版时尚修身显瘦加厚过膝毛呢外套', price: '699.00', originalPrice: '819.00' }, { imgUrls: 'https://gd4.alicdn.com/imgextra/i4/137228449/TB2NU.xXAfb_uJjSsrbXXb6bVXa_!!137228449.jpg', title: '安妮陈毛呢外套女中长款韩版2017新款秋冬季收腰呢子大衣学生时尚', price: '129.00', originalPrice: '423.00' }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://192.168.56.1:3000/shangpin', 
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:  (res)=> {
        console.log(res.data)
        this.setData({
          rexiao_imgUrls:res.data
        })
        
      }
    })
  },
  navtap:function(e){
    wx.switchTab({
      url: '../classification/classification',
    })
  },
  sousuo:function(){
    wx.navigateTo({
      url: '../sousuo/sousuo',
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