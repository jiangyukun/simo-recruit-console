/**
 * Created by jiangyukun on 2017/4/12.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Form from '../element/Form'

class SearchBox extends React.Component {

  render() {
    return (
      <div className="search-box">
        {this.props.children}
        <div className="search-container">
          <Form className="search-form" onSubmit={() => this.props.beginFetch(1)}>
            <button className="search-button" onClick={() => this.props.beginFetch(1)}>
              <i className="search-btn-svg"></i>
            </button>
            <input value={this.props.value}
                   className={classnames('search-box-input', this.props.size)}
                   placeholder={this.props.placeholder}
                   onChange={e => this.props.onSearchKeyChange(e.target.value)}/>
          </Form>
          {
            this.props.showMore && (
              <a className="search-more" onClick={this.props.onMoreChange}>更多筛选</a>
            )
          }
        </div>
      </div>
    )
  }
}

SearchBox.propTypes = {
  value: PropTypes.string,
  size: PropTypes.oneOf(['small', 'middle', 'big']),
  placeholder: PropTypes.string,
  onSearchKeyChange: PropTypes.func,
  showMore: PropTypes.bool,
  onMoreChange: PropTypes.func,
  beginFetch: PropTypes.func
}

export default SearchBox
