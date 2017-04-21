/**
 * Created by jiangyukun on 2017/4/21.
 */
import React from 'react'

const Media = (props) => {
  const entity = props.contentState.getEntity(props.block.getEntityAt(0))
  const {src} = entity.getData()
  const type = entity.getType()

  let media
  if (type === 'image') {
    media = <img src={src} className="rich-text-image"/>
  }
  return media
}

export default Media
