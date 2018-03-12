// pages/sousuo/sousuo.js
var timer;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lishi:[],
    remen:['韩版','针织衫','毛衣','羽绒服','毛呢大衣','打底衫'],
    inputvalue:'',
    seen:false
  },
  bindupInput:function(e){
    this.setData({
      inputvalue:e.detail.value
    })
  },
  ssresult:function(){
    if (this.data.inputvalue==''){
      this.setData({
        seen:true
      })
      clearInterval(timer);
      timer=setInterval(()=>{
        this.setData({
          seen: false
        })
      },2000)
    }else{
      wx.navigateTo({
        url: '../ssresult/ssresult?value=' + this.data.inputvalue
      })
      var arr = this.data.lishi;
      arr.unshift(this.data.inputvalue);
      console.log(arr)
      wx.setStorage({
        key: "key",
        data: arr
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'key',
      success:  (res)=> {
        var newArr = [];
        for (var i = 0; i < res.data.length&&i<10; i++) {
          if (newArr.indexOf(res.data[i]) == -1) {
              newArr.push(res.data[i]);
          　　}
        }
        this.setData({
          lishi: newArr
        })
      }
    })
  },
  shanchu:function(){
    this.setData({
      lishi: []
    })
    wx.removeStorage({
      key: 'key'
    })
  },
  nav_lishi:function(e){
    wx.navigateTo({
      url: '../ssresult/ssresult?value=' + e.target.dataset.item,
    })
  },
  nav_remen: function (e) {
    wx.navigateTo({
      url: '../ssresult/ssresult?value=' + e.target.dataset.item,
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