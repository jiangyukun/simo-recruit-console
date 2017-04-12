/**
 * Created by jiangyukun on 2017/4/12.
 */
import React, {PropTypes, Component} from 'react'

import Button from '../../components/element/Button'

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="app-icon">
          思默招聘交流平台
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
