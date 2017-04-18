/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import Radio from 'antd/lib/Radio'

import {FlexDiv, Part} from '../../../../components/layout/'

class ResearchIntroduce extends React.Component {

  render() {
    return (
      <div className="form research-introduce-form">
        <FlexDiv className="form-item">
          <Part>试验标题（最多500汉字）：</Part>
          <Part>
            <textarea className="form-control" rows="3"></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>人群：</Part>
          <Part textAlign="right">
            <Radio.Group value={this.props.value} onChange={this.props.onChange}>
              <Radio value="患者" className="positive">患者</Radio>
              <span className="vertical-line"></span>
              <Radio value="健康志愿者" className="negative">健康志愿者</Radio>
            </Radio.Group>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>试验分期：</Part>
          <Part weight={4} textAlign="right">
            <Radio.Group value={this.props.value} onChange={this.props.onChange}>
              <Radio value="BE" className="positive">BE</Radio>
              <span className="vertical-line"></span>
              <Radio value="PK/PD" className="negative">PK/PD</Radio>
              <span className="vertical-line"></span>
              <Radio value="Ⅰ期" className="negative">Ⅰ期</Radio>
              <span className="vertical-line"></span>
              <Radio value="Ⅱ期" className="negative">Ⅱ期</Radio>
              <span className="vertical-line"></span>
              <Radio value="Ⅲ期" className="negative">Ⅲ期</Radio>
              <span className="vertical-line"></span>
              <Radio value="Ⅳ期" className="negative">Ⅳ期</Radio>
            </Radio.Group>
          </Part>
        </FlexDiv>
      </div>
    )
  }
}

export default ResearchIntroduce
