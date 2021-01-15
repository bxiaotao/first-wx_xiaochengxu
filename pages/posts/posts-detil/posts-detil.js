var postsData=require('../../../data/posts_database')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId=options.id
    this.data.currentPostId=postId
    //console.log(postId)
    var postData=postsData.postList[postId]
    this.setData({postData})

    //var postsCollected=wx.getStorageSync("postsCollected")
    //console.log(postsCollected)
    /*if(postsCollected){
    this.setData({collected:postsCollected[postId]})
    }
    else{
      var postsCollected={}
      postsCollected[postId]=false
      wx.setStorageSync('postsCollected', postsCollected)
    }*/
  },

  onCollectionTap:function(){
    var postsCollected=wx.getStorageSync('postsCollected')
    var collected=postsCollected[this.data.currentPostId]
    collected=!postsCollected
    postsCollected[this.data.currentPostId]=collected
    wx.setStorageSync('postsCollected', postsCollected)
    this.setData({collected})
   // console.log("success")

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