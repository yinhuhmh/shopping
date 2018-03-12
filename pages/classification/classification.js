// pages/classification/classification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav:['正在流行','外套','上衣','裙装','裤装','配饰','套装','中老','活动','家居'],
    rexiao_imgUrls: [{ imgUrls: 'https://gd4.alicdn.com/imgextra/i2/TB1OdLvOpXXXXbHapXXYXGcGpXX_M2.SS2', title: '韩都衣舍韩版宽松连帽套头加绒卫衣', price: '199.00', originalPrice: '419.00' }, { imgUrls: 'https://gd1.alicdn.com/imgextra/i4/2816721683/TB287P.g4rI8KJjy0FpXXb5hVXa_!!2816721683.jpg', title: '韩都衣舍韩版宽松连帽套头加绒卫衣', price: '199.00', originalPrice: '419.00' }, { imgUrls: 'https://img.alicdn.com/bao/uploaded/i2/263817957/TB15nQJiL2H8KJjy1zkXXXr7pXa_!!0-item_pic.jpg_b.jpg', title: '韩都衣舍韩版宽松连帽套头加绒卫衣', price: '199.00', originalPrice: '419.00' }, { imgUrls: 'https://gd4.alicdn.com/imgextra/i4/137228449/TB2NU.xXAfb_uJjSsrbXXb6bVXa_!!137228449.jpg', title: '韩都衣舍韩版宽松连帽套头加绒卫衣', price: '199.00', originalPrice: '419.00' }, { imgUrls: 'https://gd2.alicdn.com/imgextra/i2/2759214285/TB2UFallCYH8KJjSspdXXcRgVXa_!!2759214285.jpg', title: '韩都衣舍韩版宽松连帽套头加绒卫衣', price: '199.00', originalPrice: '419.00' }],
    crindex:0,
    crindex2: 0,
    tabar_arr:['综合','销量','新品']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      crindex: options.index
    })
  },
  navtap:function(e){
    this.setData({
      crindex: e.target.id
    })
  },
  tabar:function(e){
    this.setData({
      crindex2: e.target.dataset.index
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