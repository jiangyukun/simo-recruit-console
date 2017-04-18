/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'

import {FlexDiv, Part} from '../../../../components/layout/'

class PatientBenefit extends React.Component {

  render() {
    return (
      <div className="form patient-benefit-form">
        <FlexDiv className="form-item">
          <Part>检查项目（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="form-control" placeholder="请输入检查项目"></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>补贴金额（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="form-control" placeholder="请输入补贴金额"></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>其它获益（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="form-control" placeholder="请输入补贴金额"></textarea>
          </Part>
        </FlexDiv>
      </div>
    )
  }
}

export default PatientBenefit
