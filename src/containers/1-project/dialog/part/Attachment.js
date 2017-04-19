/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'
import AddFile from '../../../../components/file/AddFile'

import {FlexDiv, Part} from '../../../../components/layout/'

class Attachment extends React.Component {
  constructor(props) {
    super()
    this.state = {
      fileList: props.fileList
    }
  }

  handleFileUploaded = (fileInfo) => {
    const fileList = this.state.fileList
    fileList.push(fileInfo)
    this.setState({fileList})
  }

  removeFile = index => {
    const fileList = this.state.fileList
    fileList.splice(index, 1)
    this.setState({fileList})
  }

  render() {
    return (
      <div className="form attachment-form">
        <div>上传附件（最多10个）：</div>
        <div className="attachment-container">
          {
            this.state.fileList.map((fileInfo, index) => {
              if (fileInfo.fileType == 'png') {

              }
              return (
                <div key={index} className="uploaded-file">
                  <div className="remove-uploaded-file" onClick={() => this.removeFile(index)}>
                    <i className="minus-red-svg"></i>
                  </div>
                  <div className="uploaded-file-type-icon">
                    <i className="file-svg"></i>
                  </div>
                  <div className="uploaded-file-name">{fileInfo.fileName}</div>
                </div>
              )
            })
          }
          <AddFile tip="添加文件" onPictureUpdated={this.handleFileUploaded}/>
        </div>
      </div>
    )
  }
}

Attachment.defaultProps = {
  fileList: [
    {fileName: 'a', fileUrl: 'a', fileType: 'png'},
  ]
}

Attachment.propTypes = {
  fileList: PropTypes.array
}

export default Attachment
