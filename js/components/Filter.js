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
          <ScoreFilter valueSelected={this.props.score} onChange={this.props.onScoreChange}/>
        </div>
        <hr className="divider"/>
        <div className='filter-container'>
          <FacilityFilter 
            currentFacilty={this.props.sharedFilter.currentFilter.facility}
            facilityHistory={this.props.sharedFilter.filterHistory.facility}/>
        </div>
      </div>
    )
  }
}
