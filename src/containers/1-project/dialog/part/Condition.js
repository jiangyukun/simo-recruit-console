/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'

import {FlexDiv, Part} from '../../../../components/layout/'

class Condition extends React.Component {
  constructor(props) {
    super()
    this.state = {
      include: props.include,
      exclude: props.exclude,
      important: props.important,
    }
  }

  render() {
    return (
      <div className="form condition-form">
        <FlexDiv className="form-item">
          <Part>入选标准（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="input" placeholder="请输入入选标准"
                      value={this.state.include} onChange={e => this.setState({include: e.target.value})}></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>排除标准（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="input" placeholder="请输入排除标准"
                      value={this.state.exclude} onChange={e => this.setState({exclude: e.target.value})}></textarea>
          </Part>
        </FlexDiv>

        <FlexDiv className="form-item">
          <Part>重点入排（最多500汉字）：</Part>
          <Part>
            <textarea rows="5" className="input" placeholder="请输入重点入排"
                      value={this.state.important} onChange={e => this.setState({important: e.target.value})}></textarea>
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
}

export default Condition
