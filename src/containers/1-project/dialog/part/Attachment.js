/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'
import AddFile from '../../../../components/file/AddFile'

import {form6} from '../input-name'
import {fileCrud} from '../../../../core/constants/crud'
import {copyList} from '../../../../core/util/common'

class Attachment extends React.Component {
  handleFileUploaded = (fileInfo) => {
    const fileList = copyList(this.props.fileList)
    fileList.push({
      ...fileInfo, crud: fileCrud.ADD
    })
    this.props.onChange(fileList, form6.fileList)
  }

  removeFile = index => {
    const fileList = copyList(this.props.fileList)
    fileList[index].crud = fileCrud.DELETE
    this.props.onChange(fileList, form6.fileList)
  }

  render() {
    return (
      <div className="form attachment-form">
        <div>上传附件（最多10个）：</div>
        <div className="attachment-container">
          {
            this.props.fileList.map((fileInfo, index) => {
              if (fileInfo.crud == fileCrud.DELETE) {
                return
              }
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
  fileList: []
}

Attachment.propTypes = {
  fileList: PropTypes.array,
  onChange: PropTypes.func,
}

export default Attachment
