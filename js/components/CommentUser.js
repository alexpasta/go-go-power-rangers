import React, { Component } from 'react'
import request from 'superagent'
import { POWER_RANGER_ENDPOINT } from 'constants/config'

export default class CommentUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img_url: ''
    }
  }

  getUserPhoto = userId => {
    let img_url = ''
    request.get(POWER_RANGER_ENDPOINT + '/user/' + userId)
      .then(res => {
        img_url = 'https://taipeihacks.herokuapp.com' + res.body.img_url
        this.setState({img_url})
    })
  }

  componentDidMount() {
    this.getUserPhoto(this.props.userId)
  }

  render() {
    return (
      <div className="comment-user">
        <img src={this.state.img_url} alt={this.props.userId} />
        <div className="comment-text">{this.props.text}</div>
      </div>
    )
  }
}
