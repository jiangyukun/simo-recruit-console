/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/lib/Modal'
import Tabs from 'react-bootstrap/lib/Tabs'
import Tab from 'react-bootstrap/lib/Tab'
import {EditorState, ContentState} from 'draft-js'

import Button from '../../../components/element/Button'
import Summary from './part/Summary'
import ResearchIntroduce from './part/ResearchIntroduce'
import Condition from './part/Condition'
import ProjectCenter from './part/ProjectCenter'
import PatientBenefit from './part/PatientBenefit'
import Attachment from './part/Attachment'

let rich = '<img src="http://localhost:9999/pictures/search.svg"/>'

class AddProject extends React.Component {
  state = {
    show: true,
    valid: false,

    diseaseName: '肝癌',
    diseaseType: '慢病',
    projectStatus: '1',
    researchMedicine: '1',
    biddingParty: '1',

    title: '1',
    crowd: '患者',
    instalment: 'BE',
    richText1: EditorState.createWithContent(ContentState.createFromText(rich)),
    richText2: EditorState.createWithContent(ContentState.createFromText(rich)),

    include: '1',
    exclude: '1',
    important: '1',

    centerList: [{cityName: '杭州', centerName: '南方医科大学附属南方医院', PI: '刘志华', status: '已启动'}],

    checkItem: '1',
    subsidy: '1',
    other: '1',

    fileList: [{fileName: 'a', fileUrl: 'a', fileType: 'png'}],
  }

  close = () => {
    this.setState({show: false})
  }

  checkValid = () => {
    let valid = true

    Object.keys(this.state).forEach(key => {
      const value = this.state[key]
      if (typeof value == 'string' && !this.state[key]) {
        valid = false
      }
      if (value instanceof Array && value.length == 0) {
        valid = false
      }
      if (value instanceof EditorState) {
        let v = value.toJS()
        if (v.selection.hasFocus) {
          console.log(v.selection)
        }
      }
    })

    if (this.state.valid != valid) {
      this.setState({valid})
    }
  }

  onChange = (value, type) => {
    this.setState({[type]: value}, this.checkValid)
  }

  render() {
    const {diseaseName, diseaseType, projectStatus, researchMedicine, biddingParty} = this.state
    const {title, crowd, instalment, richText1, richText2} = this.state
    const {include, exclude, important} = this.state
    const {centerList} = this.state
    const {checkItem, subsidy, other} = this.state
    const {fileList} = this.state

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
              <Summary diseaseName={diseaseName}
                       diseaseType={diseaseType}
                       researchMedicine={researchMedicine}
                       projectStatus={projectStatus}
                       biddingParty={biddingParty}
                       onChange={this.onChange}/>
            </Tab>
            <Tab title="研究介绍" eventKey={2}>
              <ResearchIntroduce
                title={title}
                crowd={crowd}
                instalment={instalment}
                richText1={richText1}
                richText2={richText2}
                onChange={this.onChange}/>
            </Tab>
            <Tab title="入排条件" eventKey={3}>
              <Condition
                include={include}
                exclude={exclude}
                important={important}
                onChange={this.onChange}/>
            </Tab>
            <Tab title="项目中心" eventKey={4}>
              <ProjectCenter
                centerList={centerList}
                onChange={this.onChange}/>
            </Tab>
            <Tab title="患者获益" eventKey={5}>
              <PatientBenefit
                checkItem={checkItem}
                subsidy={subsidy}
                other={other}
                onChange={this.onChange}/>
            </Tab>
            <Tab title="附件" eventKey={6}>
              <Attachment
                fileList={fileList}
                onChange={this.onChange}/>
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
                      disabled={!this.state.valid}>
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
