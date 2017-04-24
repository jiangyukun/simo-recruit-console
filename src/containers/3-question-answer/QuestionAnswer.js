/**
 * Created by jiangyukun on 2017/4/24.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {merge} from 'lodash'

import {FlexDiv, Part, Width} from '../../components/layout/'
import SearchBox from '../../components/ui/SearchBox'
import Button from '../../components/element/Button'
import PaginateList from '../../components/PaginateList'

import {fetchList} from './question-answer.action'

class QuestionAnswer extends React.Component {
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
      <div className="app-function-page question-answer">
        <SearchBox value={this.state.searchKey} placeholder="输入关键字查询问题"
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

            <div className="recommend-list">
              <header>推荐</header>
              {
                this.props.recommendList.map((item, index) => {
                  return (
                    <div key={item['question_id']} className="list-item">
                      <FlexDiv>
                        <Part>
                          xx
                        </Part>
                        <Width width="150px">
                          xx
                        </Width>
                      </FlexDiv>
                    </div>
                  )
                })
              }
            </div>

            <div>
              {
                this.props.list.map((item, index) => {
                  return null
                })
              }
            </div>

          </div>
        </PaginateList>
      </div>
    )
  }
}

QuestionAnswer.propTypes = {
  clearState: PropTypes.func
}

function mapStateToProps(state) {
  return {
    ...state['question_answer']
  }
}

export default connect(mapStateToProps, {fetchList})(QuestionAnswer)
