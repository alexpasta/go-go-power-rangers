import React from 'react'
import HotelList from 'containers/HotelList'
import Filter from 'components/Filter'
import { API_ENDPOINT } from 'constants/config'
import hotelApi from 'apis/hotelApi'

export default class HomeBody extends React.PureComponent {
  state = {
    hotels: [],
    priceRange: undefined,
    score: undefined
  }

  render() {
  	return (
      <div className='home-body flex'>
        <div className='home-body-left'>
          <Filter 
            priceRange={this.state.priceRange}
            score={this.state.score}
            onScoreChange={this.onScoreChange} />
        </div>
        <div className='home-body-right flex-column flex-fill'>
          <HotelList hotels={this.state.hotels}/>
        </div>
      </div>
     )
  }

  componentDidMount() {
    this.getHotelAvailability()
  }

  getHotelAvailability = () => {
    console.log('@@@@@@@', this.state.score)
    const params = {
      checkin: '2017-06-09',
      checkout: '2017-06-10',
      cityIds: -2637882,
      room1: 'A,A',
      output: 'room_details,hotel_details',
      minReviewScore: this.state.score
    }

    hotelApi.getHotelAvailability(params, res => {
      if (!res || !res.hotels) return

      this.setState({ hotels: res.hotels })
    });
  }

  onScoreChange = (event, score) => {
    this.setState({ score: score }, this.getHotelAvailability)
  }

  updateFilter = () => {
    // TODO
    console.log('TODO', this.state.priceRange, this.state.score)
  }
}
