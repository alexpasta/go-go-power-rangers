import React, { Component } from 'react'
import PriceFilter from 'components/filters/PriceFilter'
import ScoreFilter from 'components/filters/ScoreFilter'
import FacilityFilter from 'components/filters/FacilityFilter'

export default class Filter extends Component {
  state = {
    checkedList: []
  }

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
            currentFacility={this.props.sharedFilter.currentFilter.facility}
            facilityHistory={this.props.sharedFilter.filterHistory.facility}
            checkedList={this.state.checkedList}
            onCheck={this.onCheck}/>
        </div>
      </div>
    )
  }

  componentDidMount() {
    Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
  }

  onCheck = (idx, event, isChecked) => {
    let checkedList = this.state.checkedList
    if (isChecked) {
      // facilityHistory[idx].userIds.push(1) // for demo
      
      checkedList.push(idx)
    } else {
      checkedList.remove(idx)
    }
    this.setState({
      checkedList
    })
  }
}
