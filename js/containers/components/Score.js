import React, { Component } from 'react';

export default class Score extends Component {
  render() {
    return() {
      <div className="Score" onClick={this.props.handleFilterClick}>
        <div>{this.props.score}</div>
        <div>{this.props.score.users.map(user => user.img_url)}</div>
      </div>
    }
  }
}
