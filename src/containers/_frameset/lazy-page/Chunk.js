/**
 * Created by jiangyukun on 2017/4/27.
 */
import React from 'react'
import PropTypes from 'prop-types'

import getAuthority from '../../../core/getAuthority'

class Chunk extends React.Component {
  state = {
    lazyComponent: null
  }

  componentDidMount() {
    if (!this.state.lazyComponent) {
      this.props.load(lazyComponent => this.setState({lazyComponent: lazyComponent.default}))
    }
  }

  render() {
    if (!this.state.lazyComponent) {
      return null
    }
    const Component = getAuthority(this.props.pageList, this.props.pageName, this.state.lazyComponent)
    return <Component/>
  }
}

Chunk.propTypes = {
  load: PropTypes.func,
  pageName: PropTypes.string,
  pageList: PropTypes.array,
}

export default Chunk
