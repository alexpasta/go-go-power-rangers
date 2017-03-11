export default {
  getHotelAvailability: (param, cb) => {
  	const options = {
      headers:{'Authorization': ''}
    }

    const paramString = `?checkin=${param.checkin}&checkout=${param.checkout}&city_ids=${param.cityIds}&room1=${param.room1}&output=${param.output}`
  	const api = `https://distribution-xml.booking.com/json/getHotelAvailabilityV2${paramString}`

    fetch(api, options)
      .then(response => response.json())
      .then(json => {
      	cb(json)
      	// console.log('@@', json)
      })
  }
}