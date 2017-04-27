/**
 * Created by jiangyukun on 2017/4/25.
 */
import React from 'react'
import PropTypes from 'prop-types'

import Tag from '../../../components/Tag'

class QuestionAnswerItem extends React.Component {

  render() {
    const item = this.props.item
    return (
      <div className="list-item">
        <div className="flex">
          <div className="item-contents">
            <div className="content-row">
              <div className="flex">
                <Tag>{item['question_type']}</Tag>
                <div className="ml-10 flex1">{item['question_content']}</div>
              </div>
            </div>
            <div className="content-row">
              <div className="flex">
                <div className="flex1">
                  {item['name']}
                  <span className="time">{item['question_create_time']}</span>
                </div>
                <div>{item['question_count']}</div>
              </div>
            </div>
          </div>
          <div className="item-buttons">
            <div>
              <button className="button default">取消推荐</button>
            </div>
            <div className="mt-5">
              <button className="button default">修改</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

QuestionAnswerItem.propTypes = {
  item: PropTypes.object
}

export default QuestionAnswerItem
