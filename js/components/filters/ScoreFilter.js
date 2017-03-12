import React, { Component } from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { FILTER_STYLES } from 'constants/constant'

export default class ScoreFilter extends Component {
  render() {
  	return (
  		<div className='filter-score'>
	      <div className='filter-title'>Review Score</div>
	      <div>
		    <RadioButtonGroup name="score" defaultSelected={this.props.score} onChange={this.props.onChange}>
		      <RadioButton
		        value={9}
		        label="Wonderful: 9+"
		        style={FILTER_STYLES.radioButton}
		        labelStyle={FILTER_STYLES.labelStyle}
		      />
		      <RadioButton
		        value={8}
		        label="Very Good: 8+"
		        style={FILTER_STYLES.radioButton}
		        labelStyle={FILTER_STYLES.labelStyle}
		      />
		      <RadioButton
		        value={7}
		        label="Good: 7+"
		        style={FILTER_STYLES.radioButton}
		        labelStyle={FILTER_STYLES.labelStyle}
		      />
		      <RadioButton
		        value={6}
		        label="Preasant: 6+"
		        style={FILTER_STYLES.radioButton}
		        labelStyle={FILTER_STYLES.labelStyle}
		      />
		    </RadioButtonGroup>
		  </div>
	    </div>
    )
  }
}
