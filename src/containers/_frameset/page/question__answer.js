/**
 * Created by jiangyukun on 2017/3/17.
 */
import React from 'react'

import getAuthority from '../../../core/getAuthority'

export default function (pageList, pageName) {
  class Chunk extends React.Component {
    state = {
      loaded: false
    }

    Component = null

    componentDidMount() {
      require.ensure([], (require) => {
        this.Component = require('../../../containers/3-question-answer/QuestionAnswer').default
        this.setState({loaded: true})
      })
    }

    render() {
      if (!this.state.loaded) {
        return null
      }
      const Component = getAuthority(pageList, pageName, this.Component)
      return <Component/>
    }
  }
  return Chunk
}
