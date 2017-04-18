/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'

import {FlexDiv, Part} from '../../../../components/layout/'

class ProjectCenter extends React.Component {

  render() {
    return (
      <div className="form project-center-form">
        <FlexDiv className="form-item">
          <Part textAlign="center">城市</Part>
          <Part textAlign="center">中心名</Part>
          <Part textAlign="center">PI</Part>
          <Part textAlign="center">启动状态</Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>
            <div className="padding-15">
              <input className="form-control"/>
            </div>
          </Part>
          <Part>
            <div className="padding-15">
              <input className="form-control"/>
            </div>
          </Part>
          <Part>
            <div className="padding-15">
              <input className="form-control"/>
            </div>
          </Part>
          <Part>
            <div className="padding-15">
              <input className="form-control"/>
            </div>
          </Part>
        </FlexDiv>
      </div>
    )
  }
}

export default ProjectCenter
