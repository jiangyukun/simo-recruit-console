/**
 * Created by jiangyukun on 2017/4/12.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link, routerShape} from 'react-router'
import Menu from 'antd/lib/menu'

import {getPath} from '../../core/env'

class Nav extends Component {
  render() {
    const {SubMenu, Item} = Menu

    const accountManage = getPath('account-manage')
    const project = getPath('project')

    return (
      <div className="app-nav-wrap">
        <div className="app-nav">
          <div className="navigate-title">导航</div>
          <Menu theme="dark"
                defaultOpenKeys={[]}
                selectedKeys={['']}
                mode="inline"
          >
            <Item key="1">
              <Link to={accountManage}>
                账号管理
              </Link>
            </Item>
            <Item key="8">
              <Link to={project}>
                项目
              </Link>

            </Item>
          </Menu>
        </div>
      </div>
    )
  }
}

Nav.contextTypes = {
  router: routerShape
}

Nav.propTypes = {
  pageList: PropTypes.array,
}

export default Nav
