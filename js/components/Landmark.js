import React, { Component } from 'react';

export default class Landmark extends Component {
  render() {
    return (
      <div className="Landmark" onClick={this.props.handleFilterClick}>
        <div>{this.props.landmark}</div>
        <div>{this.props.landmark.users.map(user => user.img_url)}</div>
      </div>
    )
  }
}
