/**
 * Created by jiangyukun on 2017/4/21.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Editor, EditorState, AtomicBlockUtils} from 'draft-js'
import Button from 'antd/lib/button'
import Icon  from 'antd/lib/icon'

import FileUpload from '../../components/file/FileUpload'
import Media from './Media'

// let imgUrl = 'http://localhost:9999/pictures/search.svg'

class RichText extends React.Component {
  addImage = (uploadFileInfo) => {
    const imageUrl = uploadFileInfo.fileUrl

    const {editorState} = this.props
    let contentState = editorState.getCurrentContent()
    let contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', {src: imageUrl})
    let entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    let newEditorState = EditorState.set(editorState, {currentContent: contentStateWithEntity})

    this.props.onChange(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '))
  }

  mediaBlockRenderer = (block) => {
    if (block.getType() === 'atomic') {
      return {
        component: Media,
        editable: false,
      }
    }
    return null
  }

  render() {
    return (
      <div className="rich-text">
        <div className="editor">
          <Editor
            blockRendererFn={this.mediaBlockRenderer}
            editorState={this.props.editorState}
            onChange={editorState => this.props.onChange(editorState)}
          />
        </div>
        <div className="mt-5">
          <FileUpload accept="image/*" onFileUploadSuccess={this.addImage}>
            <Button>
              <Icon type="upload"/> 上传图片
            </Button>
          </FileUpload>
        </div>
      </div>
    )
  }
}

RichText.propTypes = {
  editorState: PropTypes.any,
  onChange: PropTypes.func
}

export default RichText
