/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Radio from 'antd/lib/Radio'
import {Editor, EditorState} from 'draft-js'

import RichText from '../../../../components/txt/RichText'
import {FlexDiv, Part} from '../../../../components/layout/'

import {form2} from '../input-name'

class ResearchIntroduce extends React.Component {
  render() {
    return (
      <div className="form research-introduce-form">
        <FlexDiv className="form-item">
          <Part>试验标题（最多500汉字）：</Part>
          <Part>
            <textarea className="input" rows="3"
                      value={this.props.title} onChange={e => this.props.onChange(e.target.value, form2.title)}></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>人群：</Part>
          <Part textAlign="right">
            <Radio.Group value={this.props.crowd} onChange={e => this.props.onChange(e.target.value, form2.crowd)}>
              <Radio value="患者" className="positive">患者</Radio>
              <span className="vertical-line"></span>
              <Radio value="健康志愿者" className="negative">健康志愿者</Radio>
            </Radio.Group>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>试验分期：</Part>
          <Part weight={4} textAlign="right">
            <Radio.Group value={this.props.instalment} onChange={e => this.props.onChange(e.target.value, form2.instalment)}>
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
            <RichText editorState={this.props.richText1} onChange={editorState => this.props.onChange(editorState, form2.richText1)}/>
          </div>
        </div>

        <div className="form-item">
          <div>试验流程：</div>
          <div className="rich-text-container">
            <RichText editorState={this.props.richText2} onChange={editorState => this.props.onChange(editorState, form2.richText2)}/>
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
  onChange: PropTypes.func,
}

export default ResearchIntroduce
