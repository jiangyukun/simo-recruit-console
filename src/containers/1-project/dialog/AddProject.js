/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/lib/Modal'
import Tabs from 'react-bootstrap/lib/Tabs'
import Tab from 'react-bootstrap/lib/Tab'

import Button from '../../../components/element/Button'
import Summary from './part/Summary'
import ResearchIntroduce from './part/ResearchIntroduce'
import Condition from './part/Condition'
import ProjectCenter from './part/ProjectCenter'
import PatientBenefit from './part/PatientBenefit'
import Attachment from './part/Attachment'

class AddProject extends React.Component {
  state = {
    show: true
  }

  close = () => {
    this.setState({show: false})
  }

  render() {
    return (
      <Modal show={this.state.show}
             backdrop="static"
             onHide={this.close}
             onExited={this.props.onExited}
      >
        <Modal.Header closeButton={true}>
          <Modal.Title>新建项目</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs id="tabs" activeKey={this.state.key} onSelect={this.handleSelect}>
            <Tab title="简介" eventKey={1}>
              <Summary/>
            </Tab>
            <Tab title="研究介绍" eventKey={2}>
              <ResearchIntroduce/>
            </Tab>
            <Tab title="入排条件" eventKey={3}>
              <Condition/>
            </Tab>
            <Tab title="项目中心" eventKey={4}>
              <ProjectCenter/>
            </Tab>
            <Tab title="患者获益" eventKey={5}>
              <PatientBenefit/>
            </Tab>
            <Tab title="附件" eventKey={6}>
              <Attachment/>
            </Tab>
          </Tabs>
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

AddProject.propTypes = {
  onExited: PropTypes.func
}

export default AddProject
