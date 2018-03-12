// pages/ssresult/ssresult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    tab:['综合','销量','新品'],
    crindex:0,
    fx:true,
    rexiao_imgUrls: [{ imgUrls: 'https://img.alicdn.com/bao/uploaded/i2/263817957/TB15nQJiL2H8KJjy1zkXXXr7pXa_!!0-item_pic.jpg_b.jpg', title: '韩都衣舍韩版宽松连帽套头加绒卫衣', price: '199.00', originalPrice: '￥419.00' }, { imgUrls: 'https://img.alicdn.com/bao/uploaded/i2/263817957/TB15nQJiL2H8KJjy1zkXXXr7pXa_!!0-item_pic.jpg_b.jpg', title: '韩都衣舍韩版宽松连帽套头加绒卫衣', price: '199.00', originalPrice: '￥419.00' }, { imgUrls: 'https://img.alicdn.com/bao/uploaded/i2/263817957/TB15nQJiL2H8KJjy1zkXXXr7pXa_!!0-item_pic.jpg_b.jpg', title: '韩都衣舍韩版宽松连帽套头加绒卫衣', price: '199.00', originalPrice: '￥419.00' }, { imgUrls: 'https://img.alicdn.com/bao/uploaded/i2/263817957/TB15nQJiL2H8KJjy1zkXXXr7pXa_!!0-item_pic.jpg_b.jpg', title: '韩都衣舍韩版宽松连帽套头加绒卫衣', price: '199.00', originalPrice: '￥419.00' }, { imgUrls: 'https://img.alicdn.com/bao/uploaded/i2/263817957/TB15nQJiL2H8KJjy1zkXXXr7pXa_!!0-item_pic.jpg_b.jpg', title: '韩都衣舍韩版宽松连帽套头加绒卫衣', price: '199.00', originalPrice: '￥419.00' }]
  },
  xuan:function(e){
    this.setData({
      crindex: e.target.dataset.index
    })
  },
  jiage:function(){
    this.setData({
      fx:!this.data.fx
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      value: options.value
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
    wx.navigateBack({
      delta: 1
    })
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