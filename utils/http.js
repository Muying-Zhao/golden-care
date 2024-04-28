/**
 * @Created by WebStorm
 * @Author:炑焸
 * @Desc:
 */
import APIConfig from "../config/api"
import exceptionMessage from "../config/exception-message"
import {
  wxToPromise
} from "./wx"

class Http {
  // 使用静态static方法后，实例化时不需要使用new
  static async request({
    url,
    data,
    method = 'GET',
    // refetch = true
  }) {
    let res
    try {
      res = await wxToPromise('request', {
        url: APIConfig.baseUrl + url,
        data,
        method,
      })
    } catch (e) {
      Http._showError(-1)
      // 跑出错误异常
      throw new Error(e.errMsg)
    }
    if (res.statusCode < 400) {
      return res.data.data
    }
    // TODO请求失败
    if (res.statusCode === 401) {
      this.timLogout()
    }
    // console.log(res.data, '8888')
    Http._showError(res.data.error_code, res.data.message)
    const error = Http._generateMessage(res.data.message)
    throw Error(error)
  }

  static _showError(errorCode, message = '') {
    let title = ''
    const errorMessage = exceptionMessage[errorCode]
    title = errorMessage || message || '未知异常'
    title = Http._generateMessage(title)
    // console.log(errorMessage)
    wx.showToast({
      title,
      icon: 'none',
      // duration错误展示3s
      duration: 3000
    })
  }

  static _generateMessage(message) {
    return typeof message === 'object' ?
      Object.values(message).join(';') :
      message
  }
}

export default Http