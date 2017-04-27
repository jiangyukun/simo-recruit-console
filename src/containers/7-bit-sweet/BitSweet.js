/**
 * Created by jiangyukun on 2017/4/26.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import PaginateList from '../../components/PaginateList'

import {fetchList} from './bit-sweet.action'

class BitSweet extends React.Component {
  state = {
    index: -1
  }

  beginFetch = (restart) => {
    this._paginateList.beginFetch(restart)
  }

  doFetch = () => {
    this.props.fetchList(0)
  }

  componentDidMount() {
    this.beginFetch()
  }

  render() {
    return (
      <div className="app-function-page bit-sweet">
        <div className="well">
          <button className="button" onClick={() => this.setState({showAdd: true})}>新增</button>
        </div>

        <PaginateList ref={c => this._paginateList = c}
                      hasMore={this.props.hasMore}
                      doFetch={this.doFetch}
                      lengthName='limit'
        >
          <div className="album-container">
            {
              this.props.list.map((item, index) => {
                return (
                  <div key={index} className="album-item">
                    <div className="album-picture-container">
                      <img src={item['album_cover']} className="img"/>
                    </div>
                    <div className="album-title">{item['album_title']}</div>
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

BitSweet.propTypes = {}

function mapStateToProps(state) {
  return {
    ...state['bit_sweet']
  }
}

export default connect(mapStateToProps, {fetchList})(BitSweet)
