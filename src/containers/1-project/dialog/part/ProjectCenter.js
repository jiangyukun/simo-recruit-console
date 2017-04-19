/**
 * PI 研究组织者
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'

import {FlexDiv, Part} from '../../../../components/layout/'

class ProjectCenter extends React.Component {
  constructor(props) {
    super()
    this.state = {
      centerList: props.centerList
    }
  }

  addItem = () => {
    const centerList = this.state.centerList
    centerList.push({
      cityName: '',
      centerName: '',
      PI: '',
      status: '',
    })
    this.setState({centerList})
  }

  removeCenter = (index) => {
    const centerList = this.state.centerList
    centerList.splice(index, 1)
    this.setState({centerList})
  }

  handleCenterItemChange = (e, index, key) => {
    const centerList = this.state.centerList
    centerList[index][key] = e.target.value
    this.setState({centerList})
  }

  render() {
    return (
      <div className="form project-center-form">
        <FlexDiv className="form-item">
          <Part weight={2} textAlign="center">城市</Part>
          <Part weight={2} textAlign="center">中心名</Part>
          <Part weight={2} textAlign="center">PI</Part>
          <Part weight={2} textAlign="center">启动状态</Part>
          <Part></Part>
        </FlexDiv>

        {
          this.state.centerList.map((center, index) => {
            return (
              <FlexDiv key={index} className="form-item">
                <Part weight={2}>
                  <div className="padding-15">
                    <input className="input"
                           value={center.cityName} onChange={(e) => this.handleCenterItemChange(e, index, 'cityName')}/>
                  </div>
                </Part>
                <Part weight={2}>
                  <div className="padding-15">
                    <input className="input"
                           value={center.centerName} onChange={(e) => this.handleCenterItemChange(e, index, 'centerName')}/>
                  </div>
                </Part>
                <Part weight={2}>
                  <div className="padding-15">
                    <input className="input"
                           value={center.PI} onChange={(e) => this.handleCenterItemChange(e, index, 'PI')}/>
                  </div>
                </Part>
                <Part weight={2}>
                  <div className="padding-15">
                    <input className="input"
                           value={center.status} onChange={(e) => this.handleCenterItemChange(e, index, 'status')}/>
                  </div>
                </Part>
                <Part>
                  <div className="remove-center-icon" onClick={() => this.removeCenter(index)}>
                    <i className="minus-svg"></i>
                  </div>
                </Part>
              </FlexDiv>
            )
          })
        }
        <div className="add-center-icon" onClick={this.addItem}>
          <i className="add-svg"></i>
        </div>
      </div>
    )
  }
}

ProjectCenter.defaultProps = {
  centerList: []
}

ProjectCenter.propTypes = {
  centerList: PropTypes.array
}

export default ProjectCenter
