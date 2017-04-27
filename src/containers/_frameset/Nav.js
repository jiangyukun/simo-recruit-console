/**
 * Created by jiangyukun on 2017/4/12.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Menu from 'antd/lib/menu'

import {getPath} from '../../core/env'

class Nav extends Component {
  render() {
    const {SubMenu, Item} = Menu
    const pathname = this.props.router.location.pathname

    const project = getPath('project')

    const questionAnswer = getPath('question-answer')

    const process = getPath('process')
    const training = getPath('training')
    const knowledge = getPath('knowledge')

    const experience = getPath('experience')

    const monthlyRating = getPath('monthly-rating')

    const monthlyPerformance = getPath('monthly-performance')

    const bitSweet = getPath('bit-sweet')

    const accountManage = getPath('account-manage')

    return (
      <div className="app-nav-wrap">
        <div className="app-nav">
          <div className="navigate-title">导航</div>
          <Menu theme="dark"
                className="mt-15"
                defaultOpenKeys={[]}
                selectedKeys={[pathname]}
                mode="inline"
          >
            <Item key={project}>
              <Link to={project}>
                项目
              </Link>
            </Item>
            <SubMenu key="study" title="学习">
              <Item key={process}>
                <Link to={process}>
                  流程
                </Link>
              </Item>
              <Item key={training}>
                <Link to={training}>
                  培训
                </Link>
              </Item>
              <Item key={knowledge}>
                <Link to={knowledge}>
                  知识
                </Link>
              </Item>
            </SubMenu>

            <Item key={questionAnswer}>
              <Link to={questionAnswer}>
                问答
              </Link>
            </Item>

            <Item key={experience}>
              <Link to={experience}>
                经验
              </Link>
            </Item>

            <Item key={monthlyRating}>
              <Link to={monthlyRating}>
                每月评比
              </Link>
            </Item>

            <Item key={monthlyPerformance }>
              <Link to={monthlyPerformance}>
                每月业绩
              </Link>
            </Item>

            <Item key={bitSweet }>
              <Link to={bitSweet}>
                点滴甜蜜
              </Link>
            </Item>

            <Item key={accountManage}>
              <Link to={accountManage}>
                账号管理
              </Link>
            </Item>
          </Menu>
        </div>
      </div>
    )
  }
}

Nav.propTypes = {
  pageList: PropTypes.array,
  router: PropTypes.any
}

export default Nav
