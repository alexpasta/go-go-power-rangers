import React, { Component } from 'react'
import Nouislider from 'react-nouislider'

export default class PriceFilter extends Component {
  render() {
  	return (
  		<div className='filter-price'>
	      <div className='filter-title'>Your Budget</div>
	      <div className='price-range-slider'>
	        <Nouislider
	          range={{min: 0, max: 2000}}
	          start={[0, 1000]}
	          tooltips
	          connect={true}
	        />
	      </div>
	    </div>
    )
  }
}
