/**
 * Created by jiangyukun on 2017/4/12.
 */
import React from 'react'
import PropTypes from 'prop-types'

import Form from '../element/Form'

class SearchBox extends React.Component {

  render() {
    return (
      <div className="toolbar">
        {this.props.children}
        <div className="search-container">
          <Form className="inline-block" onSubmit={() => this.beginFetch(1)}>
            <input placeholder="输入分组名称" onChange={e => this.setState({searchRoleName: e.target.value})}/>
          </Form>
          <button onClick={() => this.beginFetch(1)}>搜索</button>
        </div>
      </div>
    )
  }
}

SearchBox.propTypes = {}

export default SearchBox
