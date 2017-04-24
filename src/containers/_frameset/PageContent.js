/**
 * Created by jiangyukun on 2017/4/12.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

import IndexPage from './IndexPage'
import IllegalAuthority from './IllegalAuthority'

import {pageNames} from '../../core/constants/page'
import __project from './page/project'
import question__answer from './page/question__answer'
import account__manage from './page/account__manage'

class PageContent extends Component {
  render() {
    const pageList = this.context.pageList
    const {match} = this.props

    const {accountManage, project, questionAnswer} = pageNames
    const mapper = {
      [project]: __project(pageList, project),
      [questionAnswer]: question__answer(pageList, questionAnswer),
      [accountManage]: account__manage(pageList, accountManage),
    }

    return (
      <div className="app-page-content">
        <Route path={`${match.url}/index`} component={IndexPage}/>
        {
          pageList.map(page => {
            const pageName = page['pageName']
            return (
              <Route key={pageName} path={`${match.url}/${pageName}`} component={mapper[pageName]}/>
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
