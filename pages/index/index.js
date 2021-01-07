import request from '../../utils/request' //引入通用网络请求js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],
    recommendList:[],
    topList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
  //轮播图片数据
  let bannerListData = await request('/banner',{type: 2});
  this.setData({
    bannerList:bannerListData.banners
  })
  //获取推荐歌单数据
  let recommendListData = await request('/personalized',{limit: 10});
  this.setData({
    recommendList:recommendListData.result
  })
  //获取排行榜数据
  // idx的取值范围是0-20，需要0-4，发生五次请求
  let index = 0;
  let resultArr = [];
  while(index <5){
    let topListData = await request('/top/list',{idx: index++});
    let topListItem = {name:topListData.playlist.name,tracks:topListData.playlist.tracks.slice(0,3)}
    resultArr.push(topListItem);
    //放在此处不需要循环请求结束才更新，用户体验好，但渲染次数会多一些
    this.setData({
      topList:resultArr
    })
  }
  //更新值 放在此处会导致发生请求的时间过长，页面长时间白屏
  // this.setData({
  //   topList:resultArr
  // })
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