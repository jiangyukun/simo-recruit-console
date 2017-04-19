/**
 * Created by jiangyukun on 2017/4/19.
 */
export function upload(file) {
  const form = new FormData()
  form.append('file', file)

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('post', '/backend/user/v1/upload', true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const result = eval('(' + xhr.responseText + ')')
        if (result.statusCode == 0) {
          let returnedFileInfo = result['data'][0]
          let fileInfo = {
            fileName: returnedFileInfo['file_name'],
            fileType: returnedFileInfo['file_type'],
            fileUrl: returnedFileInfo['file_url'],
          }
          resolve(fileInfo)
          return
        }
        reject(result['rspMsg'])
      }
    }
    // xhr.setRequestHeader('Accept', 'application/json;charset=utf-8')
    xhr.send(form)
  })

}
