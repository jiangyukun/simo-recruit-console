/**
 * Created by jiangyukun on 2016/12/29.
 */
import React from 'react'
import {Route} from 'react-router'

import SimoRecruitApp from '../containers/_frameset/SimoRecruitApp'
import IndexPage from '../containers/_frameset/IndexPage'
import IllegalAuthority from '../containers/_frameset/IllegalAuthority'

import {pageNames} from '../core/constants/page'
import account__manage from './lazy-page/account__manage'

export default function getPageRoute(path, pageList) {
  const {accountManage} = pageNames
  const mapper = {
    [accountManage]: account__manage(pageList, accountManage)
  }

  let rootPath = '/html-redirect'
  if (process.env.NODE_ENV == 'inline') {
    rootPath += '/inline/'
  }

  return (
    <Route path={rootPath} component={SimoRecruitApp}>
      <Route path='index' component={IndexPage}/>
      {
        pageList.map(page => {
          const pageName = page['pageName']
          return (
            <Route key={pageName} path={pageName} getComponent={mapper[pageName]}/>
          )
        })
      }
      <Route path=':pathname' component={IllegalAuthority}/>
    </Route>
  )
}
