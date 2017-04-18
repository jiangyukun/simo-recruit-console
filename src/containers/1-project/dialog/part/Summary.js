/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import Radio from 'antd/lib/Radio'

import {FlexDiv, Part} from '../../../../components/layout/'

class Summary extends React.Component {
  render() {
    return (
      <div className="form summary-form">
        <FlexDiv className="form-item">
          <Part>疾病名称（最多20汉字）：</Part>
          <Part>
            <input type="text" className="input" placeholder="请输入"/>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>疾病分类：</Part>
          <Part textAlign="right">
            <Radio.Group value={this.props.value} onChange={this.props.onChange}>
              <Radio value="慢病" className="positive">慢病</Radio>
              <span className="vertical-line"></span>
              <Radio value="肿瘤" className="negative">肿瘤</Radio>
              <span className="vertical-line"></span>
              <Radio value="其它" className="all">其它</Radio>
            </Radio.Group>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>状态：</Part>
          <Part textAlign="right">
            <Radio.Group value={this.props.value} onChange={this.props.onChange}>
              <Radio value="进行中" className="positive">进行中</Radio>
              <span className="vertical-line"></span>
              <Radio value="已结束" className="negative">已结束</Radio>
            </Radio.Group>
          </Part>
        </FlexDiv>
        <FlexDiv className="form-item">
          <Part>研究药物（最多20汉字）：</Part>
          <Part>
            <input type="text" className="input" placeholder="请输入"/>
          </Part>
        </FlexDiv>
        <FlexDiv className="form-item">
          <Part>申办方（最多20汉字）：</Part>
          <Part>
            <input type="text" className="input" placeholder="请输入"/>
          </Part>
        </FlexDiv>
      </div>
    )
  }
}

export default Summary
