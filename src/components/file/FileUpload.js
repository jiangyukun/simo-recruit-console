/**
 * Created by jiangyukun on 2016/12/23.
 */
import React, {Component, PropTypes} from 'react'
import Upload from 'antd/lib/upload'

import {upload} from './file-ajax'

class FileUpload extends Component {
  beforeUpload = (file) => {
    return status == 0
  }

  customRequest = (fileInfo) => {
    upload(fileInfo.file).then(url => fileInfo.onSuccess(url), err => fileInfo.onError(err))
  }

  handleChange = (info) => {
    if (info.file.status === 'done') {
      this.props.onFileUploadSuccess(info.file.response)
    } else {
      this.props.onFileUploadFailure()
    }
  }

  render() {
    return (
      <Upload className={this.props.className}
              showUploadList={false}
              beforeUpload={this.beforeUpload}
              customRequest={this.customRequest}
              onChange={this.handleChange}
      >
        {this.props.children}
      </Upload>
    )
  }
}

FileUpload.defaultProps = {
  onFileUploadFailure: () => {}
}

FileUpload.propTypes = {
  onFileUploadSuccess: PropTypes.func.isRequired,
  onFileUploadFailure: PropTypes.func
}

export default FileUpload
