/**
 * Created by jiangyukun on 2016/12/23.
 */
import React, {Component, PropTypes} from 'react'
import Icon from 'antd/lib/icon'

import FileUpload from './FileUpload'

class AddFile extends Component {
  onFileUploadSuccess = (fileInfo) => {
    this.props.onPictureUpdated(fileInfo)
  }

  render() {
    return (
      <FileUpload className="add-file" onFileUploadSuccess={this.onFileUploadSuccess}>
        <Icon type="plus" className="file-trigger"/>
        <div className="file-upload-tip">
          {this.props.tip}
        </div>
      </FileUpload>
    )
  }
}

AddFile.propTypes = {
  tip: PropTypes.string,
  onPictureUpdated: PropTypes.func
}

export default AddFile
