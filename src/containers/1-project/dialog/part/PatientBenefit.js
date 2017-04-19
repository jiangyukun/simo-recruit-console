/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'

import {FlexDiv, Part} from '../../../../components/layout/'

class PatientBenefit extends React.Component {
  constructor(props) {
    super()
    this.state = {
      checkItem: props.checkItem,
      subsidy: props.subsidy,
      other: props.other,
    }
  }

  render() {
    return (
      <div className="form patient-benefit-form">
        <FlexDiv className="form-item">
          <Part>检查项目（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="input" placeholder="请输入检查项目"
                      value={this.state.checkItem} onChange={e => this.setState({checkItem: e.target.value})}></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>补贴金额（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="input" placeholder="请输入补贴金额"
                      value={this.state.subsidy} onChange={e => this.setState({subsidy: e.target.value})}></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>其它获益（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="input" placeholder="请输入其它获益"
                      value={this.state.other} onChange={e => this.setState({other: e.target.value})}></textarea>
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
}

export default PatientBenefit
