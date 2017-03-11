import React from 'react'
import hotelApi from 'apis/hotelApi'

export default class HomeHeader extends React.PureComponent {
  render() {
    // return <Image src='http://aff.bstatic.com/images/hotel/max300_watermarked_standard/1c3/1c35406a6ed32a8d1eef9500d35b29526584d055.jpg'/>;
  	return (
      <div className='home-header'>
        <div className='company-name'>
          <span className='dark-blue'>Booking</span>
          <span className='light-blue'>.com</span>
        </div>
        <div className='title-block'>
          <p className='title'>Travel Together</p>
          <p className='sub-title'>Share your Lists ❤ With Friend & Family</p>
        </div>
      </div>
     )
  }
}
