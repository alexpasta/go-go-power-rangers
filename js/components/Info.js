import React, { Component } from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog'
import CommentUser from 'components/CommentUser'

export default class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowingModal: false
    }
  }

  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})

  render() {
    return (
      <div className="info">
        <div className="dark-bluev hotel-name">{this.props.hotelName}</div>
        <div className="comment-modal">
          {this.state.isShowingModal &&
            <ModalContainer onClose={this.handleClose}>
              <ModalDialog onClose={this.handleClose}>
                {this.props.comments.map(comment => <CommentUser key={comment.user_id}
                                                                 userId={comment.user_id}
                                                                 text={comment.text}/>)}
              </ModalDialog>
            </ModalContainer>
          }
        </div>
        <div className="comment-button" onClick={this.handleClick}>
          Comments
        </div>
      </div>
    )
  }
}
