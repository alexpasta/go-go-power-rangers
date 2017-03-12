import React, { Component } from 'react'
import { Image } from 'material-ui-image'
import Checkbox from 'material-ui/Checkbox'
import { FILTER_STYLES } from 'constants/constant'

// for demo
const userIcons = [
  'https://taipeihacks.herokuapp.com/1.jpg',
  'https://taipeihacks.herokuapp.com/2.jpg',
]

// for demo
const labels = [
  'Free WiFi',
  'Airport shuttle',
  'Restarant',
  'Fitness Centre',
  'Parking'
]

export default class FacilityFilter extends Component {
  render() {
    return (
      <div className='filter-facility'>
        <div className='filter-title'>Facilities</div>
        <div>
          {labels.map((label, idx) => (
            <Checkbox
            key={idx}
            label={this.getLaybelLayout(labels[idx], this.props.facilityHistory[idx])}
            style={FILTER_STYLES.radioButton}
            labelStyle={FILTER_STYLES.labelStyle} />
          ))}
        </div>
      </div>
    )

  	// return (
  	// 	<div className='filter-facility'>
	  //     <div className='filter-title'>Facilities</div>
	  //     <div>
		 //      <Checkbox
		 //        label={this.getLaybelLayout("Free WiFi", this.props.facilityHistory[0])}
		 //        style={FILTER_STYLES.radioButton}
		 //        labelStyle={FILTER_STYLES.labelStyle}
		 //      />
		 //      <Checkbox
		 //        label={this.getLaybelLayout("Airport shuttle", this.props.facilityHistory[1])}
		 //        style={FILTER_STYLES.radioButton}
		 //        labelStyle={FILTER_STYLES.labelStyle}
		 //      />
		 //      <Checkbox
		 //        label={this.getLaybelLayout("Restarant", this.props.facilityHistory[2])}
		 //        style={FILTER_STYLES.radioButton}
		 //        labelStyle={FILTER_STYLES.labelStyle}
		 //      />
		 //      <Checkbox
		 //        label={this.getLaybelLayout("Fitness Centre", this.props.facilityHistory[3])}
		 //        style={FILTER_STYLES.radioButton}
		 //        labelStyle={FILTER_STYLES.labelStyle}
		 //      />
		 //      <Checkbox
		 //        label={this.getLaybelLayout("Parking", this.props.facilityHistory[4])}
		 //        style={FILTER_STYLES.radioButton}
		 //        labelStyle={FILTER_STYLES.labelStyle}
		 //      />
		 //  </div>
	  //   </div>
    // )
  }

  getLaybelLayout = (label, history) => {
    let userIds = []
    if (history) userIds = history.user_ids
  	console.log('@@', label, history)
  	return (
	    <div>
	      <div className='inline-block'>{label}</div>
	      <div className='label-user-icons image-rounded-cropper'>
          {userIds.map(id => (<img key={id} src={userIcons[id-1]}/>))}
	      </div>
	    </div>
  )
  }
}
