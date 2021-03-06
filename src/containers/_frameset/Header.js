/**
 * Created by jiangyukun on 2017/4/12.
 */
import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../components/element/Button'

class Header extends React.Component {
  render() {
    return (
      <div className="app-header">
        <div className="app-icon">
          思默招募交流平台
        </div>
        <div className="header-tool">
          <div className="log-out">
            <Button>退出</Button>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {}

export default Header
