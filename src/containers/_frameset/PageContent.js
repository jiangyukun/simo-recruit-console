/**
 * Created by jiangyukun on 2017/4/12.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

import IndexPage from './IndexPage'
import IllegalAuthority from './IllegalAuthority'

import {pageNames} from '../../core/constants/page'
import account__manage from '../../routes/lazy-page/account__manage'
import __project from '../../routes/lazy-page/project'

class PageContent extends Component {
  render() {
    const pageList = this.context.pageList
    const {match} = this.props

    const {accountManage, project} = pageNames
    const mapper = {
      [accountManage]: account__manage(pageList, accountManage),
      [project]: __project(pageList, project),
    }

    return (
      <div className="app-page-content">
        <Route path={`${match.url}/index`} component={IndexPage}/>
        {
          pageList.map(page => {
            const pageName = page['pageName']
            return (
              <Route key={pageName} path={`${match.url}/${pageName}`} getComponent={mapper[pageName]}/>
            )
          })
        }
        <Route path=':pathname' component={IllegalAuthority}/>
      </div>
    )
  }
}

PageContent.contextTypes = {
  pageList: PropTypes.array
}

PageContent.propTypes = {
  match: PropTypes.object
}

export default PageContent
