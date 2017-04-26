/**
 * Created by jiangyukun on 2017/4/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {merge} from 'lodash'
import classnames from 'classnames'

import Button from '../../components/element/Button'
import SearchBox from '../../components/ui/SearchBox'
import {QueryFilter, FilterItem, SelectedFilter, SelectedItem} from '../../components/query-filter/'
import PaginateList from '../../components/PaginateList'
import AddProject from './dialog/AddProject'
import EditProject from './dialog/EditProject'

import {DISEASE_TYPE, CROWD, INSTALMENT, STATUS} from '../../core/pages/project'
import {project} from '../../core/constants/types'
import {fetchList, add, edit, fetchProjectInfo, deleteProject} from './project.action'

class Project extends React.Component {
  state = {
    index: -1,
    searchMore: false,

    diseaseValue: '',
    crowdValue: '',
    instalmentValue: '',
    statusValue: '',

    filterInfo: [],
    showAdd: false,
    showEdit: false,
  }

  beginFetch = (restart) => {
    this._paginateList.beginFetch(restart)
  }

  doFetch = () => {
    this.props.fetchList(merge({}, this._paginateList.getParams(), {"key_Words": this.state.searchKey}))
  }

  componentDidMount() {
    this.beginFetch()
  }

  componentDidUpdate() {
    if (this.props.addProjectSuccess) {
      this.props.clearState(project.ADD_PROJECT)
    }
    if (this.props.updateProjectSuccess) {
      this.props.clearState(project.EDIT_PROJECT)
    }
    if (this.props.deleteProjectSuccess) {
      this.props.clearState(project.DELETE_PROJECT)
    }
  }

  render() {
    const item = this.props.list[this.state.index]

    const hasFilter = !!(this.state.diseaseValue || this.state.crowdValue || this.state.instalmentValue || this.state.statusValue)

    return (
      <div className="app-function-page project">

        {
          this.state.showAdd && (
            <AddProject
              add={this.props.add}
              closeSignal={this.props.addProjectSuccess}
              onExited={() => {
                this.setState({showAdd: false, index: -1})
                this.beginFetch(true)
              }}/>
          )
        }

        {
          this.state.showEdit && this.state.index != -1 && (
            <EditProject
              projectId={item['project_id']}
              fetchProjectInfo={this.props.fetchProjectInfo}
              projectInfo={this.props.projectInfo}
              edit={this.props.edit}
              deleteProject={this.props.deleteProject}
              closeSignal={this.props.updateProjectSuccess || this.props.deleteProjectSuccess}
              onExited={() => {
                this.setState({showEdit: false, index: -1})
                this.beginFetch()
              }}/>
          )
        }

        <div className="query-filter">
          <SearchBox value={this.state.searchKey}
                     size="big"
                     placeholder="输入关键字查询疾病、申办方或药物"
                     showMore={true}
                     onSearchKeyChange={key => this.setState({searchKey: key})}
                     onMoreChange={() => this.setState({searchMore: !this.state.searchMore})}
                     beginFetch={this.beginFetch}
          >
            <Button type="add" onClick={() => this.setState({showAdd: true})}>新增</Button>
          </SearchBox>

          <div className={classnames('more-filter', {'hide': !this.state.searchMore})}>
            <FilterItem value={this.state.diseaseValue} label={DISEASE_TYPE.label}
                        itemList={DISEASE_TYPE.itemList} onChange={value => this.setState({diseaseValue: value})}/>

            <FilterItem value={this.state.crowdValue} label={CROWD.label}
                        itemList={CROWD.itemList} onChange={value => this.setState({crowdValue: value})}/>

            <FilterItem value={this.state.instalmentValue} label={INSTALMENT.label}
                        itemList={INSTALMENT.itemList} onChange={value => this.setState({instalmentValue: value})}/>

            <FilterItem value={this.state.statusValue} label={STATUS.label}
                        itemList={STATUS.itemList} onChange={value => this.setState({statusValue: value})}/>
          </div>

          {
            (this.state.searchMore || hasFilter) && (
              <SelectedFilter clearAll={() => this.setState({diseaseValue: '', crowdValue: '', instalmentValue: '', statusValue: ''})}
                              notEmpty={hasFilter}
                              beginFilter={this.beginFilter}>
                <SelectedItem label={DISEASE_TYPE.label} value={this.state.diseaseValue}
                              itemList={DISEASE_TYPE.itemList} onReset={() => this.setState({diseaseValue: ''})}/>

                <SelectedItem label={CROWD.label} value={this.state.crowdValue}
                              itemList={CROWD.itemList} onReset={() => this.setState({crowdValue: ''})}/>

                <SelectedItem label={INSTALMENT.label} value={this.state.instalmentValue}
                              itemList={INSTALMENT.itemList} onReset={() => this.setState({instalmentValue: ''})}/>

                <SelectedItem label={STATUS.label} value={this.state.statusValue}
                              itemList={STATUS.itemList} onReset={() => this.setState({statusValue: ''})}/>
              </SelectedFilter>
            )
          }

        </div>

        <PaginateList ref={c => this._paginateList = c}
                      hasMore={this.props.hasMore}
                      doFetch={this.doFetch}
                      lengthName='limit'
        >
          <div className="project-list">
            {
              this.props.list.map((item, index) => {
                  return (
                    <div key={item['project_id']} className="project-item">
                      <div className="project-item-preview">
                        <div className="project-category-info clearfix">
                          <div className="project-type">
                            {item['sickness_type']}
                          </div>
                          <div className="project-category-name">
                            {item['sickness_name']}
                          </div>
                          <div className={classnames('project-status', item['sickness_status'] ? 'ongoing' : 'closed')}>
                            {item['sickness_status'] ? '进行中' : '已结束'}
                          </div>
                        </div>
                        <div className="project-content">
                          {item['experiment_title']}
                        </div>
                        <div className="project-desc clearfix">
                          <div className="bidding-party">
                            申办方：{item['bid_name']}
                          </div>
                          <div className="research-medicine">
                            研究药物：{item['drug_name']}
                          </div>
                        </div>
                      </div>
                      <div className="edit-project">
                        <div className="center-block">
                          <Button type="default" onClick={() => this.setState({showEdit: true, index})}>修改</Button>
                        </div>
                      </div>
                    </div>
                  )
                }
              )
            }
          </div>
        </PaginateList>
      </div>
    )
  }
}

Project.propTypes = {
  clearState: PropTypes.func
}

function mapStateToProps(state) {
  return {
    ...state['project']
  }
}

export default connect(mapStateToProps, {fetchList, add, edit, fetchProjectInfo, deleteProject})(Project)
