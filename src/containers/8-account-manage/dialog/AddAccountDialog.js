/**
 * Created by jiangyukun on 2017/4/13.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/lib/Modal'

import {InputGroup, InputLabel, InputContainer} from '../../../components/form/'
import Button from '../../../components/element/Button'
import Select1 from '../../../components/ui/Select1'

const userTypeList = [
  {value: '1', text: '管理员'},
  {value: '2', text: '领导（兼PM）'},
  {value: '3', text: '领导'},
  {value: '4', text: 'PM'},
  {value: '5', text: '普通'},
]

const yesOrNo = [
  {value: '1', text: '是'},
  {value: '0', text: '否'},
]

class AddAccountDialog extends React.Component {
  state = {
    show: true,
    email: '',
    username: '',
    userType: '',
    isInOffice: ''
  }

  closeType = 'default'

  close = () => {
    this.setState({show: false})
  }

  add = () => {
    this.props.addAccount(this.state.email, this.state.username, this.state.userType, this.state.isInOffice)
  }

  componentDidUpdate() {
    if (this.props.closeSignal) {
      this.closeType = 'add'
      this.close()
    }
  }

  render() {
    return (
      <Modal show={this.state.show}
             backdrop="static"
             onHide={this.close}
             onExited={() => this.props.onExited(this.closeType)}
      >
        <Modal.Header closeButton={true}>
          <Modal.Title>新建账号</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <InputGroup>
              <InputLabel>账号（公司邮箱）：</InputLabel>
              <InputContainer>
                <input className="input" placeholder="请输入账号" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
              </InputContainer>
            </InputGroup>

            <InputGroup>
              <InputLabel>姓名（最多10个汉字）：</InputLabel>
              <InputContainer>
                <input className="input" placeholder="请输入姓名" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
              </InputContainer>
            </InputGroup>

            <InputGroup>
              <InputLabel>身份：</InputLabel>
              <InputContainer>
                <Select1 value={this.state.userType} options={userTypeList} onSelect={value => this.setState({userType: value})}/>
              </InputContainer>
            </InputGroup>

            <InputGroup>
              <InputLabel>是否在职：</InputLabel>
              <InputContainer>
                <Select1 value={this.state.isInOffice} options={yesOrNo} onSelect={value => this.setState({isInOffice: value})}/>
              </InputContainer>
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="button-group">
            <div className="button-item">
              <Button type="full closed" onClick={this.close}>取消</Button>
            </div>
            <div className="button-item">
              <Button type="full" onClick={this.add}
                      disabled={!this.state.email || !this.state.username || !this.state.userType || !this.state.isInOffice}>
                创建
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    )
  }
}

AddAccountDialog.propTypes = {
  closeSignal: PropTypes.bool,
  addAccount: PropTypes.func,
  onExited: PropTypes.func
}

export default AddAccountDialog
