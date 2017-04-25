/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/lib/Modal'
import Tabs from 'react-bootstrap/lib/Tabs'
import Tab from 'react-bootstrap/lib/Tab'
import {EditorState, ContentState, convertToRaw} from 'draft-js'

import Button from '../../../components/element/Button'
import Summary from './part/Summary'
import ResearchIntroduce from './part/ResearchIntroduce'
import Condition from './part/Condition'
import ProjectCenter from './part/ProjectCenter'
import PatientBenefit from './part/PatientBenefit'
import Attachment from './part/Attachment'

import curd, {fileCrud} from '../../../core/constants/crud'

class EditProject extends React.Component {
  state = {
    show: true,
    valid: false,
    currentTab: 1,

    diseaseName: '',
    diseaseType: '',
    projectStatus: '',
    researchMedicine: '',
    biddingParty: '',

    title: '',
    crowd: '',
    instalment: '',
    richText1: EditorState.createWithContent(ContentState.createFromText('')),
    richText2: EditorState.createWithContent(ContentState.createFromText('')),

    include: '',
    exclude: '',
    important: '',

    centerList: [],

    checkItem: '',
    subsidy: '',
    other: '',

    fileList: [],
  }

  handleSelect = (key) => {
    this.setState({currentTab: key})
  }

  close = () => {
    this.setState({show: false})
  }

  checkValid = () => {
    let valid = true

    Object.keys(this.state).forEach(key => {
      if (key == 'show' || key == 'valid' || key == 'currentTab') {
        return
      }

      const value = this.state[key]
      if (typeof value == 'string' && !this.state[key]) {
        valid = false
      }
      if (value instanceof Array && value.length == 0) {
        valid = false
      }
      if (value instanceof EditorState) {
        let richText = value.getCurrentContent().getPlainText('<br>')
        if (!richText || !richText.trim()) {
          valid = false
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

  edit = () => {
    this.props.edit(this.props.projectId, this.state)
  }

  deleteProject = () => {
    this.props.deleteProject(this.props.projectId)
  }

  componentDidMount() {
    this.props.fetchProjectInfo(this.props.projectId)
  }

  componentWillReceiveProps(nextProps) {
    const projectInfo = nextProps.projectInfo || {}

    const centerList = projectInfo['list'].map(center => ({
      id: center['project_center_id'],
      cityName: center['city'] || '',
      centerName: center['center_name'] || '',
      PI: center['pi'] || '',
      status: center['started_status'] || '',
      crud: curd.DEFAULT
    }))

    const fileList = projectInfo['file_list'].map(fileInfo => ({
      fileId: fileInfo['file_id'],
      fileUrl: fileInfo['file_url'] || '',
      fileName: fileInfo['file_name'] || '',
      fileType: fileInfo['file_type'] || '',
      crud: fileCrud.DEFAULT
    }))

    this.setState({
      diseaseName: projectInfo['sickness_name'],
      diseaseType: projectInfo['sickness_type'],
      projectStatus: projectInfo['sickness_status'],
      researchMedicine: projectInfo['drug_name'],
      biddingParty: projectInfo['bid_name'],

      title: projectInfo['experiment_title'],
      crowd: projectInfo['people_group'],
      instalment: projectInfo['experimental_stage'],
      richText1: EditorState.createWithContent(ContentState.createFromText(projectInfo['study_design'] || '')),
      richText2: EditorState.createWithContent(ContentState.createFromText(projectInfo['test_flow'] || '')),

      include: projectInfo['inclusion_criteria'],
      exclude: projectInfo['exclude_criteria'],
      important: projectInfo['point_criteria'],

      centerList: centerList,

      checkItem: projectInfo['check_project'],
      subsidy: projectInfo['subsidy_amount'],
      other: projectInfo['other_benefit'],

      fileList: fileList,
    })
  }

  componentDidUpdate() {
    if (this.props.closeSignal) {
      this.close()
    }
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
          <Modal.Title>编辑项目</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs id="tabs" activeKey={this.state.currentTab} onSelect={this.handleSelect}>
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
              <Button type="full closed" onClick={this.deleteProject}>删除</Button>
            </div>
            <div className="button-item">
              <Button type="full" onClick={this.edit}
                      disabled={!this.state.valid}>
                保存
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    )
  }
}

EditProject.propTypes = {
  projectId: PropTypes.string,
  fetchProjectInfo: PropTypes.func,
  projectInfo: PropTypes.object,
  edit: PropTypes.func,
  deleteProject: PropTypes.func,
  closeSignal: PropTypes.bool,
  onExited: PropTypes.func
}

export default EditProject
