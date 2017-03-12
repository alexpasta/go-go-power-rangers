import React from 'react'
import request from 'superagent'
import HotelList from 'containers/HotelList'
import Filter from 'components/Filter'
import { POWER_RANGER_ENDPOINT } from 'constants/config'
import hotelApi from 'apis/hotelApi'
import powerRangersApi from 'apis/powerRangersApi'

export default class HomeBody extends React.PureComponent {
  state = {
    hotels: [],
    hotelEntities: [],
    sharedFilter: {
      currentFilter: {
        facility: []
      },
      filterHistory: {
        facility: []
      }
    },
    priceRange: undefined, // TODO: use sharedFilter instead
    score: undefined, // TODO: use sharedFilter instead
  }

  render() {
  	return (
      <div className='home-body flex'>
        <div className='home-body-left'>
          <Filter
            sharedFilter={this.state.sharedFilter}
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
    this.getSharedFilter()
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
    request.get(POWER_RANGER_ENDPOINT + '/comments/1112')
      .then(res => hotelEntities = res.body.hotel_entities)

    hotelApi.getHotelAvailability(params, res => {
      if (!res || !res.hotels) return
      // console.log('@@ res.hotels', res)
      this.setState({ hotels: res.hotels, hotelEntities: hotelEntities })
    });
  }

  getSharedFilter = () => {
    const managerId = '1112' // TODO: remove hardcode
    powerRangersApi.getSharedFilter(managerId, res => {
      if (!res) return
      // console.log('@@ res', res)
      this.setState({ sharedFilter: res })
    })
  }

  onScoreChange = (event, score) => {
    this.setState({ score: score }, this.getHotelAvailability)
  }

  updateFilter = () => {
    // TODO
    console.log('TODO', this.state.priceRange, this.state.score)
  }
}
