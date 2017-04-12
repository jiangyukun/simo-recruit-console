/**
 * Created by jiangyukun on 2017/3/16.
 */
import React from 'react'

import {getIsCanEdit, getIsCanExport} from '../core/authority'

export default function getAuthority(pageList, currentPageName, Component) {
  let isCanEdit = getIsCanEdit(pageList, currentPageName)
  let isCanExport = getIsCanExport(pageList, currentPageName)
  class WrapAuthority extends React.Component {
    render() {
      return (
        <Component authority={{isCanEdit, isCanExport}}/>
      )
    }
  }

  return WrapAuthority
}
