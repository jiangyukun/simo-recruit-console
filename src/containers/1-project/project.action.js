/**
 * Created by jiangyukun on 2017/4/12.
 */
import {_get, _post} from '../../services/http'
import {PROJECT} from '../../core/constants/types'
import {THREE_PHASE} from '../../middleware/request_3_phase'

import crud, {fileCrud} from '../../core/constants/crud'

export function fetchList(options) {
  return {
    [THREE_PHASE]: {
      type: PROJECT.FETCH_LIST,
      http: () => _post('/backend/project/v1/getProjectList', {body: options}),
      handleResponse: data => ({hasMore: data['hasMore'], list: data['list']})
    }
  }
}

export function add(state) {
  const options = _handleAddOption(state)
  return {
    [THREE_PHASE]: {
      type: PROJECT.ADD_PROJECT,
      http: () => _post('/backend/project/v1/addProject', {body: options}),
      handleResponse: data => ({})
    }
  }
}

export function fetchProjectInfo(projectId) {
  return {
    [THREE_PHASE]: {
      type: PROJECT.FETCH_PROJECT_INFO,
      http: () => _get(`/backend/project/v1/getProjectInfo/${projectId}`),
      handleResponse: data => ({projectInfo: data})
    }
  }
}

export function edit(projectId, state) {
  const options = _handleEditOption(projectId, state)
  return {
    [THREE_PHASE]: {
      type: PROJECT.EDIT_PROJECT,
      http: () => _post('/backend/project/v1/updateProjectInfo', {body: options}),
      handleResponse: data => ({})
    }
  }
}

export function deleteProject(projectId) {
  return {
    [THREE_PHASE]: {
      type: PROJECT.DELETE_PROJECT,
      http: () => _get(`/backend/project/v1/deleteProjectById/${projectId}`)
    }
  }
}

function _handleAddOption(state) {
  const centerList = state.centerList.filter(center => center.crud == crud.ADD).map(center => ({
    city: center['cityName'],
    center_name: center['centerName'],
    pi: center['PI'],
    started_status: center['status'],
  }))

  const fileList = state.fileList.filter(file => file.crud == fileCrud.ADD).map(file => ({
    file_name: file['fileName'],
    file_type: file['fileType'],
    file_url: file['fileUrl'],
  }))

  return {
    ..._handleCommonOption(state),
    'list': centerList,
    'file_list': fileList,
  }
}

function _handleEditOption(projectId, state) {
  const centerList = state.centerList.filter(center => center.crud != crud.DEFAULT).map(center => ({
    project_center_id: center['id'],
    city: center['cityName'],
    center_name: center['centerName'],
    pi: center['PI'],
    started_status: center['status'],
    project_center_status: center.crud
  }))

  const fileList = state.fileList.filter(file => file.crud == fileCrud.ADD || file.crud == fileCrud.DELETE).map(file => ({
    file_id: file['fileId'],
    file_name: file['fileName'],
    file_type: file['fileType'],
    file_url: file['fileUrl'],
    file_status: file.crud
  }))

  return {
    ..._handleCommonOption(state),
    'project_id': projectId,
    'list': centerList,
    'file_list': fileList,
  }
}

function _handleCommonOption(state) {
  return {
    'sickness_name': state.diseaseName,
    'sickness_type': state.diseaseType,
    'sickness_status': state.projectStatus,
    'drug_name': state.researchMedicine,
    'bid_name': state.biddingParty,

    'experiment_title': state.title,
    'people_group': state.crowd,
    'experimental_stage': state.instalment,
    'study_design': state.richText1.getCurrentContent().getPlainText(),
    'test_flow': state.richText2.getCurrentContent().getPlainText(),

    'inclusion_criteria': state.include,
    'exclude_criteria': state.exclude,
    'point_criteria': state.important,

    'check_project': state.checkItem,
    'subsidy_amount': state.subsidy,
    'other_benefit': state.other,

  }
}
