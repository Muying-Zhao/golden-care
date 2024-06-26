// 使用promise解决回调地狱问题
function wxToPromise(method, options = {}) {
  return new Promise((resolve, reject) => {
    options.success = resolve
    options.fail = err => {
      reject(err)
    }
    wx[method](options)
  })
}

export {
  wxToPromise,
}