import React, { Component } from 'react'
import PriceFilter from 'components/filters/PriceFilter'
import ScoreFilter from 'components/filters/ScoreFilter'
import FacilityFilter from 'components/filters/FacilityFilter'

export default class Filter extends Component {
  render() {
    return (
      <div>
        <p className='filter-by'>Filter By:</p>
        <hr className="divider"/>
        <div className='filter-container'>
          <PriceFilter />
        </div>
        <hr className="divider"/>
        <div className='filter-container'>
          <ScoreFilter />
        </div>
        <hr className="divider"/>
        <div className='filter-container'>
          <FacilityFilter />
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
