/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Radio from 'antd/lib/Radio'

import {form1} from '../input-name'
import {FlexDiv, Part} from '../../../../components/layout/'

class Summary extends React.Component {
  render() {
    return (
      <div className="form summary-form">
        <FlexDiv className="form-item">
          <Part>疾病名称（最多20汉字）：</Part>
          <Part>
            <input type="text" className="input" placeholder="请输入"
                   value={this.props.diseaseName} onChange={e => this.props.onChange(e.target.value, form1.diseaseName)}/>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>疾病分类：</Part>
          <Part textAlign="right">
            <Radio.Group value={this.props.diseaseType} onChange={e => this.props.onChange(e.target.value, form1.diseaseType)}>
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
            <Radio.Group value={this.props.projectStatus} onChange={e => this.props.onChange(e.target.value, form1.projectStatus)}>
              <Radio value="进行中" className="positive">进行中</Radio>
              <span className="vertical-line"></span>
              <Radio value="已结束" className="negative">已结束</Radio>
            </Radio.Group>
          </Part>
        </FlexDiv>
        <FlexDiv className="form-item">
          <Part>研究药物（最多20汉字）：</Part>
          <Part>
            <input type="text" className="input" placeholder="请输入"
                   value={this.props.researchMedicine} onChange={e => this.props.onChange(e.target.value, form1.researchMedicine)}/>
          </Part>
        </FlexDiv>
        <FlexDiv className="form-item">
          <Part>申办方（最多20汉字）：</Part>
          <Part>
            <input type="text" className="input" placeholder="请输入"
                   value={this.props.biddingParty} onChange={e => this.props.onChange(e.target.value, form1.biddingParty)}/>
          </Part>
        </FlexDiv>
      </div>
    )
  }
}

Summary.defaultProps = {
  diseaseName: '',
  diseaseType: '',
  projectStatus: '',
  researchMedicine: '',
  biddingParty: '',
}

Summary.propTypes = {
  diseaseName: PropTypes.string,
  diseaseType: PropTypes.string,
  projectStatus: PropTypes.string,
  researchMedicine: PropTypes.string,
  biddingParty: PropTypes.string,
  onChange: PropTypes.func,
}

export default Summary
