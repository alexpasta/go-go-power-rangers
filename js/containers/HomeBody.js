import React from 'react'
import HotelList from 'containers/HotelList'
import Filter from 'components/Filter'
import { API_ENDPOINT } from 'constants/config'
import hotelApi from 'apis/hotelApi'

export default class HomeBody extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {

  	}
  }

  render() {
  	return (
      <div className='home-body flex'>
        <div className='home-body-left'>
          <Filter 
            priceRanges={this.state.priceRanges}
            reviewScores={this.state.reviewScores} />
        </div>
        <div className='home-body-right flex-column flex-fill'>
          <HotelList />
        </div>
      </div>
     )
  }

  componentDidMount() {

  }
}
