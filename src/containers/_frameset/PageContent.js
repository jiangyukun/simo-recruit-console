/**
 * Created by jiangyukun on 2017/4/12.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class PageContent extends Component {
  render() {
    return (
      <div className="app-page-content">
        {this.props.children}
      </div>
    )
  }
}

PageContent.propTypes = {}

export default PageContent
