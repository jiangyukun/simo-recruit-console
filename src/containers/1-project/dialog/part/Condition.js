/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'

import {FlexDiv, Part} from '../../../../components/layout/'

class Condition extends React.Component {

  render() {
    return (
      <div className="form condition-form">
        <FlexDiv className="form-item">
          <Part>入选标准（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="form-control" placeholder="请输入"></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>排除标准（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="form-control" placeholder="请输入"></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>重点入排（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="form-control" placeholder="请输入"></textarea>
          </Part>
        </FlexDiv>
      </div>
    )
  }
}

export default Condition
