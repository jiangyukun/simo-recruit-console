/**
 * Created by jiangyukun on 2017/4/12.
 */
import React from 'react'
import PropTypes from 'prop-types'

import Form from '../element/Form'

class SearchBox extends React.Component {

  render() {
    return (
      <div className="search-box">
        {this.props.children}
        <div className="search-container">
          <Form className="inline-block" onSubmit={() => this.props.beginFetch(1)}>
            <input value={this.props.value}
                   className="search-box-input"
                   placeholder={this.props.placeholder}
                   onChange={e => this.props.onSearchKeyChange(e.target.value)}/>
          </Form>
          <button onClick={() => this.props.beginFetch(1)}>搜索</button>
        </div>
      </div>
    )
  }
}

SearchBox.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onSearchKeyChange: PropTypes.func,
  beginFetch: PropTypes.func
}

export default SearchBox
