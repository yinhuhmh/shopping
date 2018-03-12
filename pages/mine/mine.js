// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    payment: [{ img: '../../images/fukuan.png', cont: '待付款' }, { img: '../../images/fahuo.png', cont: '待发货' }, { img: '../../images/shouhuo.png', cont: '待收货' }, { img: '../../images/shouhou.png', cont: '售后' }],
    kefu_arr: [{ img: '../../images/kefu2.png', cont: '客服' }, { img: '../../images/youhui.png', cont: '优惠券' }, { img: '../../images/shoucang.png', cont: '我的收藏' }]
  },
  qbdd:function(){
    wx.navigateTo({
      url: '../order/order',
    })
  },
  payment_tap:function(e){
    wx.navigateTo({
      url: '../order/order?index=' + (e.currentTarget.dataset.index+1),
    })
  },
  address:function(){
    wx.navigateTo({
      url: '../address/address',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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