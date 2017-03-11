import React, { Component } from 'react'
import Nouislider from 'react-nouislider'

export default class Filter extends Component {
  render() {
    return (
      <div className='filter'>
        <p className='sort-by'>Sory By</p>
        <div className='filter-price'>
          <div className='item-title price-title'>Price</div>
          <div className='price-range-slider'>
            <Nouislider
              range={{min: 0, max: 200}}
              start={[0, 100]}
              tooltips
              connect={true}
            />
          </div>
        </div>
      </div>
    )
  }
  // render() {
  //   return (
  //     <div className="Filter">
  //       <div className="FilterPrice">
  //         {this.props.priceRanges.map(range => <Range range={range} handleFilterClick={this.props.handleFilterClick} />)}
  //       </div>
  //       <div className="FilterScore">
  //         {this.props.reviewScores.map(score => <Score score={score} handleFilterClick={this.props.handleFilterClick} />)}
  //       </div>
  //       <div className="FilterLandmark">
  //         {this.props.landmarks.map(landmark => <Landmark landmark={landmark} handleFilterClick={this.props.handleFilterClick} />)}
  //       </div>
  //     </div>
  //   )
  // }
}
