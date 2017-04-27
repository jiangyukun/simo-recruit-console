/**
 * Created by jiangyukun on 2017/4/12.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

import IndexPage from './IndexPage'
import IllegalAuthority from './IllegalAuthority'

import {pageNames} from '../../core/constants/page'
import Chunk from './lazy-page/Chunk'
import Project from 'bundle-loader?lazy!../1-project/Project'
import QuestionAnswer from 'bundle-loader?lazy!../3-question-answer/QuestionAnswer'
import Experience from 'bundle-loader?lazy!../4-experience/Experience'
import MonthlyRating from 'bundle-loader?lazy!../5-monthly-rating/MonthlyRating'
import MonthlyPerformance from 'bundle-loader?lazy!../6-monthly-performance/MonthlyPerformance'
import BitSweet from 'bundle-loader?lazy!../7-bit-sweet/BitSweet'
import AccountManage from 'bundle-loader?lazy!../8-account-manage/AccountManage'

class PageContent extends Component {
  render() {
    const {match, pageList} = this.props

    const {
      project,
      process, training, knowledge,
      questionAnswer,
      experience,
      monthlyRating,
      monthlyPerformance,
      bitSweet,
      accountManage
    } = pageNames

    const mapper = {
      [project]: () => <Chunk pageList={pageList} pageName={project} load={Project}/>,
      [questionAnswer]: () => <Chunk pageList={pageList} pageName={questionAnswer} load={QuestionAnswer}/>,
      [experience]: () => <Chunk pageList={pageList} pageName={experience} load={Experience}/>,
      [monthlyRating]: () => <Chunk pageList={pageList} pageName={monthlyRating} load={MonthlyRating}/>,
      [monthlyPerformance]: () => <Chunk pageList={pageList} pageName={monthlyPerformance} load={MonthlyPerformance}/>,
      [bitSweet]: () => <Chunk pageList={pageList} pageName={bitSweet} load={BitSweet}/>,
      [accountManage]: () => <Chunk pageList={pageList} pageName={accountManage} load={AccountManage}/>,
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

PageContent.propTypes = {
  match: PropTypes.object,
  pageList: PropTypes.array,
}

export default PageContent
