import {wxToPromise} from "./wx";
import Http from "./http";


class FileUploader extends Http {
  static async upload(filePath, key = 'file') {
    let res
    try {
      res = await wxToPromise('uploadFile', {
        url: 'https://qinchenju.com/homemaking//v1/file',
        filePath: filePath,
        name: key,
      })
    } catch (e) {
      console.log(e)
      FileUploader._showError(-1)
      throw new Error(e.errMsg)
    }

    const serverData = JSON.parse(res.data)

    if (res.statusCode !== 201) {
      FileUploader._showError(serverData.error_code, serverData.message)
      throw new Error(serverData.message)
    }

    return serverData.data
  }
}

export default FileUploader