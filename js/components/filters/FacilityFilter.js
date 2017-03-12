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
  state = {
    facilityHistory: []
  }

  render() {
    return (
      <div className='filter-facility'>
        <div className='filter-title'>Facilities</div>
        <div>
          {labels.map((label, idx) => (
            <Checkbox
            key={idx}
            checked={this.props.currentFacility.includes(idx)}
            label={this.getLaybelLayout(labels[idx], this.props.facilityHistory[idx])}
            style={FILTER_STYLES.radioButton}
            labelStyle={FILTER_STYLES.labelStyle}
            onCheck={(event, isChecked) => this.onCheck(idx, event, isChecked)} />
          ))}
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.setState({ facilityHistory: this.props.facilityHistory })
  }

  onCheck = (idx, event, isChecked) => {
    if (isChecked) {
      facilityHistory[idx].userIds.push(1) // for demo
    }
  }

  getLaybelLayout = (label, history) => {
    let userIds = []
    if (history) userIds = history.user_ids
  	// console.log('@@', label, history)
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
