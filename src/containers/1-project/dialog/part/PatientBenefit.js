/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'

import {form5} from '../input-name'
import {FlexDiv, Part} from '../../../../components/layout/'

class PatientBenefit extends React.Component {
  render() {
    return (
      <div className="form patient-benefit-form">
        <FlexDiv className="form-item">
          <Part>检查项目（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="input" placeholder="请输入检查项目"
                      value={this.props.checkItem} onChange={e => this.props.onChange(e.target.value, form5.checkItem)}></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>补贴金额（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="input" placeholder="请输入补贴金额"
                      value={this.props.subsidy} onChange={e => this.props.onChange(e.target.value, form5.subsidy)}></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>其它获益（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="input" placeholder="请输入其它获益"
                      value={this.props.other} onChange={e => this.props.onChange(e.target.value, form5.other)}></textarea>
          </Part>
        </FlexDiv>
      </div>
    )
  }
}

PatientBenefit.defaultProps = {
  checkItem: '',
  subsidy: '',
  other: '',
}

PatientBenefit.propTypes = {
  checkItem: PropTypes.string,
  subsidy: PropTypes.string,
  other: PropTypes.string,
  onChange: PropTypes.func,
}

export default PatientBenefit
