import {BOOKING_ENDPOINT} from 'constants/config'

const options = {
  headers:{'Authorization': 'Basic aGFja2VyMjM0OjhocU5XNkh0ZlU='}
}

export default {
  getHotelAvailability: (param, cb) => {
    const paramString = `?checkin=${param.checkin}&checkout=${param.checkout}&city_ids=${param.cityIds}&room1=${param.room1}&output=${param.output}`
  	const api = `${BOOKING_ENDPOINT}/getHotelAvailabilityV2${paramString}`

    fetch(api, options)
      .then(response => response.json())
      .then(json => {
      	cb(json)
      })
  },

  getHotelPhotoUrl: (hotelId, cb) => {
    const api = `${BOOKING_ENDPOINT}/bookings.getHotelDescriptionPhotos?hotel_ids=${hotelId}`

    fetch(api, options)
      .then(response => response.json())
      .then(json => {
        cb(json[0].url_max300)
      })
  }
}