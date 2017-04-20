/**
 * 获取权限，添加clearState action
 * Created by jiangyukun on 2017/3/16.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'

import {clearState} from '../actions/app'
import {getIsCanEdit, getIsCanExport} from './authority'

export default function getAuthority(pageList, currentPageName, Component) {
  let isCanEdit = getIsCanEdit(pageList, currentPageName)
  let isCanExport = getIsCanExport(pageList, currentPageName)
  class WrapAuthority extends React.Component {
    render() {
      return (
        <Component authority={{isCanEdit, isCanExport}} clearState={bindActionCreators(clearState, this.context.store.dispatch)}/>
      )
    }
  }

  WrapAuthority.contextTypes = {
    store: PropTypes.any
  }

  return WrapAuthority
}
