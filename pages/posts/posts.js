
// pages/posts/posts.js
var postData=require('../../data/posts_database.js')
//console.log(postData)
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
data: {

  },

onLoad: function(options){

  this.setData({return1:postData.postList})
},
onpostTap:function(event){
  //console.log(event)
  var postId=event.currentTarget.dataset.postid
  wx.navigateTo({
    url: 'posts-detil/posts-detil?id='+postId,
  })
},
  /**
   * 组件的方法列表
   */
  methods: {

  }

})
