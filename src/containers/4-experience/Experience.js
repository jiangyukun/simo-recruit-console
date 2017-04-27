/**
 * Created by jiangyukun on 2017/4/26.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {merge} from 'lodash'

import Tag from '../../components/Tag'
import SearchBox from '../../components/ui/SearchBox'
import Button from '../../components/element/Button'
import PaginateList from '../../components/PaginateList'

import {fetchList} from './experience.action'

class Experience extends React.Component {
  state = {
    index: -1,
    searchKey: '',
    showAdd: false
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

  render() {
    return (
      <div className="app-function-page experience">
        <SearchBox className="well" value={this.state.searchKey} placeholder="输入关键字"
                   onSearchKeyChange={key => this.setState({searchKey: key})}
                   showMore={false}
                   beginFetch={this.beginFetch}
        >
          <Button type="add" onClick={() => this.setState({showAdd: true})}>新增</Button>
        </SearchBox>

        <PaginateList ref={c => this._paginateList = c}
                      hasMore={this.props.hasMore}
                      doFetch={this.doFetch}
                      lengthName='limit'
        >
          <div className="list-container">
            {
              this.props.list.map((item, index) => {

                return (
                  <div key={item['experience_id']} className="list-item">
                    <div className="flex">
                      <div className="item-contents">
                        <div className="content-row">
                          <Tag>{item['experience_type']}</Tag>
                          <span className="ml-10">{item['experience_title']}</span>
                        </div>
                        <div className="content-row">
                          {item['experience_content']}
                        </div>
                        <div className="content-row">
                          <div className="flex">
                            <div className="flex1">{item['name']}</div>
                            <div>{item['discuss_count']}</div>
                          </div>
                        </div>
                      </div>
                      <div className="item-buttons">
                        <button className="button default">修改</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </PaginateList>
      </div>
    )
  }
}

Experience.propTypes = {}

function mapStateToProps(state) {
  return {
    ...state['experience']
  }
}

export default connect(mapStateToProps, {fetchList})(Experience)
