// GET请求
function GET (requestHandler) {
  if (typeof requestHandler === 'string') {
    requestHandler = {
      url: String(requestHandler),
      params: {}
    }
  }
  return request('GET', requestHandler)
}
// POST请求
function POST (requestHandler) {
  return request('POST', requestHandler)
}
// request
function request (method, requestHandler) {
  // 加密
  let params = requestHandler.params
  wx.showLoading && wx.showLoading({title: 'Loading...'})
  return new Promise((resolve, reject) => {
    wx.request({
      url: requestHandler.url,
      data: params,
      method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        //解密
        resolve(res.data)
      },
      fail: function () {
        reject('Network request failed')
      },
      complete: function () {
        wx.hideLoading && wx.hideLoading()
      }
    })
  })
}

module.exports = {
  get: GET,
  post: POST
}