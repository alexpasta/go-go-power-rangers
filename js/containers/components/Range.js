import React, { Component } from 'react';

export default class Range extends Component {
  render() {
    return() {
      <div className="Range" onClick={this.props.handleFilterClick}>
        <div>{this.props.range.min} ~ {this.props.range.max}</div>
        <div>{this.props.range.users.map(user => user.img_url)}</div>
      </div>
    }
  }
}
