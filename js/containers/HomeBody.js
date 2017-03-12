import React from 'react'
import request from 'superagent'
import HotelList from 'containers/HotelList'
import Filter from 'components/Filter'
import { API_ENDPOINT } from 'constants/config'
import hotelApi from 'apis/hotelApi'

export default class HomeBody extends React.PureComponent {
  state = {
    hotels: [],
    hotelEntities: [],
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
          <HotelList hotels={this.state.hotels} hotelEntities={this.state.hotelEntities}/>
        </div>
      </div>
     )
  }

  componentDidMount() {
    this.getHotelAvailability()
  }

  getHotelAvailability = () => {
    const params = {
      checkin: '2017-06-09',
      checkout: '2017-06-10',
      cityIds: -2637882,
      room1: 'A,A',
      output: 'room_details,hotel_details',
      minReviewScore: this.state.score
    }
    let hotelEntities = []
    request.get(API_ENDPOINT + '/comments/1112')
      .then(res => hotelEntities = res.body.hotel_entities)

    hotelApi.getHotelAvailability(params, res => {
      if (!res || !res.hotels) return
      console.log('@@ res.hotels', res)
      this.setState({ hotels: res.hotels, hotelEntities: hotelEntities })
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
