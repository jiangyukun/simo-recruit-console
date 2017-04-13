/**
 * Created by jiangyukun on 2017/4/11.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Nav from './Nav'
import PageContent from './PageContent'

class SimoRecruitApp extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="app-body">
          <Nav/>
          <PageContent>{this.props.children}</PageContent>
        </div>
      </div>
    )
  }
}

SimoRecruitApp.propTypes = {}

export default SimoRecruitApp
