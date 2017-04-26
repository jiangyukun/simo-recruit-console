/**
 * Created by jiangyukun on 2017/4/11.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Header from './Header'
import Nav from './Nav'
import PageContent from './PageContent'

class SimoRecruitApp extends Component {
  render() {

    return (
      <div className="app">
        <Header/>
        <div className="app-body">
          <Nav router={this.props.router}/>
          <PageContent match={this.props.match}>{this.props.children}</PageContent>
        </div>
      </div>
    )
  }
}

SimoRecruitApp.propTypes = {
  match: PropTypes.object
}

function mapStateToProps(state) {
  return {
    ...state['app'],
    router: state['router']
  }
}

export default connect(mapStateToProps, {})(SimoRecruitApp)
