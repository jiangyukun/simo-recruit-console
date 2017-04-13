/**
 * Created by jiangyu2016 on 16/10/15.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

const pageSize = 10

class PaginateList extends Component {
  state = {
    draw: 1,
    currentPage: 1,
    by: '',
    order: 'default'
  }

  sortByList = []

  beginFetch(restart) {
    if (restart) {
      this.setState({currentPage: 1})
    }
    this.setState({draw: this.state.draw + 1}, () => this.props.doFetch())
  }

  addSortBy = (sortBy) => {
    this.sortByList.push(sortBy)
  }

  sort = (by, order) => {
    if (order == 'default') {
      order = ''
    }
    this.setState({by, order}, this.beginFetch(1))
    this.sortByList.forEach(sortBy => sortBy.reset(by))
  }

  loadMore() {
    if (this.props.loadMore) {
      this.setState({currentPage: this.state.currentPage + 1})
    }
  }

  getParams() {
    if (this.state.by && this.state.order) {
      return {
        [this.props.startName]: this.state.currentPage - 1,
        [this.props.lengthName]: pageSize,
        [this.props.drawName]: this.state.draw,
        [this.props.byName]: this.state.by,
        [this.props.orderName]: this.state.order
      }
    }
    return {
      [this.props.startName]: this.state.currentPage - 1,
      [this.props.lengthName]: pageSize,
      [this.props.drawName]: this.state.draw
    }
  }

  render() {
    return (
      <div className="paginate-list" style={this.props.style}>
        {this.props.children}
      </div>
    )
  }

  getChildContext() {
    return {
      addSortBy: this.addSortBy,
      sort: this.sort
    }
  }
}

PaginateList.defaultProps = {
  startName: 'start',
  lengthName: 'length',
  drawName: 'draw',
  byName: 'by',
  orderName: 'order'
}

PaginateList.propTypes = {
  hasMore: PropTypes.bool.isRequired,
  doFetch: PropTypes.func.isRequired,
  loading: PropTypes.bool,

  startName: PropTypes.string,
  lengthName: PropTypes.string,
  drawName: PropTypes.string,
  byName: PropTypes.string,
  orderName: PropTypes.string
}

PaginateList.childContextTypes = {
  addSortBy: PropTypes.func,
  sort: PropTypes.func,
}

export default PaginateList
