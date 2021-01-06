//发送ajax请求
import config from './config'
export default (url,data={},method="GET") => {
  return new Promise((resolve,reject) => {
    // 初始化promise实例的状态为pending
    wx.request({
      url: config.host + url,
      data,
      method,
      success: (res) => {
        // console.log("请求成功",res);
        resolve(res.data); //修改promise的状态为成功状态
      },
      fail: (err) => {
        // console.log("请求失败",err);
        reject(err);//修改promise的状态为失败状态
      }
    })
  })
}