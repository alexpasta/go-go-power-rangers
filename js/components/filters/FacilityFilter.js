import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox';
import { FILTER_STYLES } from 'constants/constant'

export default class FacilityFilter extends Component {
  render() {
  	return (
  		<div className='filter-facility'>
	      <div className='filter-title'>Facility</div>
	      <div>
		      <Checkbox
		        label="Free WiFi"
		        style={FILTER_STYLES.radioButton}
		        labelStyle={FILTER_STYLES.labelStyle}
		      />
		      <Checkbox
		        label="Airport shuttle"
		        style={FILTER_STYLES.radioButton}
		        labelStyle={FILTER_STYLES.labelStyle}
		      />
		      <Checkbox
		        label="Restarant"
		        style={FILTER_STYLES.radioButton}
		        labelStyle={FILTER_STYLES.labelStyle}
		      />
		      <Checkbox
		        label="Fitness Centre"
		        style={FILTER_STYLES.radioButton}
		        labelStyle={FILTER_STYLES.labelStyle}
		      />
		      <Checkbox
		        label="Parking"
		        style={FILTER_STYLES.radioButton}
		        labelStyle={FILTER_STYLES.labelStyle}
		      />
		  </div>
	    </div>
    )
  }
}
