/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Radio from 'antd/lib/Radio'

import {FlexDiv, Part} from '../../../../components/layout/'

class ResearchIntroduce extends React.Component {
  constructor(props) {
    super()
    this.state = {
      title: props.title,
      crowd: props.crowd,
      instalment: props.instalment,
      richText1: props.richText1,
      richText2: props.richText2
    }
  }

  render() {
    return (
      <div className="form research-introduce-form">
        <FlexDiv className="form-item">
          <Part>试验标题（最多500汉字）：</Part>
          <Part>
            <textarea className="input" rows="3"
                      value={this.state.title} onChange={e => this.setState({title: e.target.value})}></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>人群：</Part>
          <Part textAlign="right">
            <Radio.Group value={this.state.crowd} onChange={e => this.setState({crowd: e.target.value})}>
              <Radio value="患者" className="positive">患者</Radio>
              <span className="vertical-line"></span>
              <Radio value="健康志愿者" className="negative">健康志愿者</Radio>
            </Radio.Group>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>试验分期：</Part>
          <Part weight={4} textAlign="right">
            <Radio.Group value={this.state.instalment} onChange={e => this.setState({instalment: e.target.value})}>
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
        <div className="form-item">
          <div>研究设计：</div>
          <div className="rich-text-container">
            <pre contentEditable={true} className="input"
                 value={this.state.richText1} onChange={e => this.setState({richText1: e.target.value})}>
            </pre>
          </div>
        </div>

        <div className="form-item">
          <div>试验流程：</div>
          <div className="rich-text-container">
            <pre contentEditable={true} className="input"
                 value={this.state.richText2} onChange={e => this.setState({richText2: e.target.value})}></pre>
          </div>
        </div>
      </div>
    )
  }
}

ResearchIntroduce.defaultProps = {
  title: '',
  crowd: '',
  instalment: '',
  richText1: '',
  richText2: '',
}

ResearchIntroduce.propTypes = {
  title: PropTypes.string,
  crowd: PropTypes.string,
  instalment: PropTypes.string,
}

export default ResearchIntroduce
