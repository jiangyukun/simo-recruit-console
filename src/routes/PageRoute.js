/**
 * Created by jiangyu2016 on 16/10/15.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter, Route} from 'react-router-dom'

import SimoRecruitApp from '../containers/_frameset/SimoRecruitApp'

class PageRoute extends React.Component {

  render() {

    let rootPath = ''
    if (process.env.NODE_ENV == 'inline') {
      rootPath = '/simo-recruit-console/inline/'
    } else if (process.env.NODE_ENV == 'dev') {
      rootPath = '/dev'
    } else if (process.env.NODE_ENV == 'production') {
      rootPath = '/simo-recruit-console'
    }

    return (
      <BrowserRouter basename="/">
        <Route path={rootPath} component={SimoRecruitApp}/>
      </BrowserRouter>
    )
  }
}

PageRoute.propTypes = {
  pageList: PropTypes.array
}

export default PageRoute
