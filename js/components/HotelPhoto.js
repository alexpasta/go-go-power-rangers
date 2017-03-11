import React from 'react'
import { Image } from 'material-ui-image'
import hotelApi from 'apis/hotelApi'

export default class HotelPhoto extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hotelPhotoUrl: undefined 
  	}
  }

  render() {
    // return <Image src='http://aff.bstatic.com/images/hotel/max300_watermarked_standard/1c3/1c35406a6ed32a8d1eef9500d35b29526584d055.jpg'/>;
  	if (!this.state.hotelPhotoUrl) return null
    return <Image src={this.state.hotelPhotoUrl} />
  }

  componentDidMount() {
    this.getHotelPhotoUrl(this.props.hotelId);
  }

  getHotelPhotoUrl = hotelId => {
    hotelApi.getHotelPhotoUrl(hotelId, res => {
      if (!res) return
      this.setState({ hotelPhotoUrl: res })
    })
  }
}
