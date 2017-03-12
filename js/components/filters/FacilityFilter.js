import React, { Component } from 'react'
import { Image } from 'material-ui-image'
import Checkbox from 'material-ui/Checkbox'
import { FILTER_STYLES } from 'constants/constant'

export default class FacilityFilter extends Component {
  render() {
  	return (
  		<div className='filter-facility'>
	      <div className='filter-title'>Facilities</div>
	      <div>
		      <Checkbox
		        label={this.getLaybelLayout("Free WiFi")}
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

  getLaybelLayout = (label, userIds) => (
    <div>
      <div className='inline-block'>{label}</div>
      <div className='label-user-icons image-rounded-cropper'>
        <img
          src='https://taipeihacks.herokuapp.com/1.jpg'
        />
      </div>
    </div>
  )
}
