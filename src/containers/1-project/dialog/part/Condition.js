/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'

import {form3} from '../input-name'
import {FlexDiv, Part} from '../../../../components/layout/'

class Condition extends React.Component {
  render() {
    return (
      <div className="form condition-form">
        <FlexDiv className="form-item">
          <Part>入选标准（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="input" placeholder="请输入入选标准"
                      value={this.props.include} onChange={e => this.props.onChange(e.target.value, form3.include)}></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>排除标准（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="input" placeholder="请输入排除标准"
                      value={this.props.exclude} onChange={e => this.props.onChange(e.target.value, form3.exclude)}></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>重点入排（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="input" placeholder="请输入重点入排"
                      value={this.props.important} onChange={e => this.props.onChange(e.target.value, form3.important)}></textarea>
          </Part>
        </FlexDiv>
      </div>
    )
  }
}

Condition.defaultProps = {
  include: '',
  exclude: '',
  important: '',
}

Condition.propTypes = {
  include: PropTypes.string,
  exclude: PropTypes.string,
  important: PropTypes.string,
  onChange: PropTypes.func,
}

export default Condition
