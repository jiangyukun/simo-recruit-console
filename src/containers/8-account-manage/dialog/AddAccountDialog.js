/**
 * Created by jiangyukun on 2017/4/13.
 */
import React from 'react'
import Modal from 'react-bootstrap/lib/Modal'

class AddAccountDialog extends React.Component {
  state = {
    show: true
  }

  close = () => {
    this.setState({show: false})
  }

  render() {
    return (
      <Modal show={this.state.show}
             backdrop="static"
             onHide={this.close}
             onExited={this.props.onExited}
      >
        <Modal.Header closeButton={true}>
          <Modal.Title>新增</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-info" onClick={this.add}>新增</button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default AddAccountDialog
