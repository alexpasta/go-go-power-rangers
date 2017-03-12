import React from 'react'
import { Image } from 'material-ui-image'
import AutoComplete from 'material-ui/AutoComplete'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import HotelPhoto from 'components/HotelPhoto'
import hotelApi from 'apis/hotelApi'
import { CITIES, DEFAULT_CITY }  from 'constants/constant'
import Info from 'components/Info'
import request from 'superagent'
import { API_ENDPOINT } from 'constants/config'

export default class HotelList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      hotelPhotoUrls: {},
      currentPage: 1,
      hotel_entities: []
    };
  }

  render() {
    const selectRow = {
      clickToSelect: false
    }

    const options = {
      paginationShowsTotal: true,
      page: this.state.currentPage,
      sizePerPage: 15
    }

    return (
      <div>
        <BootstrapTable
            data={this.getHotelData()}
            selectRow={selectRow}
            options={options}
            remote={false}
            pagination={true}
          >
            <TableHeaderColumn isKey={true} dataField="key" hidden={true}></TableHeaderColumn>
            <TableHeaderColumn dataField="photo" dataFormat={this.photoDataFormat}>Photo</TableHeaderColumn>
            <TableHeaderColumn dataField="info" width="200" dataFormat={this.infoDataFormat}>Info</TableHeaderColumn>
            <TableHeaderColumn dataField="reviewScore" width="130" dataSort>Review Score</TableHeaderColumn>
            <TableHeaderColumn dataField="price" width="130" dataSort>Price</TableHeaderColumn>
          </BootstrapTable>
      </div>
    );
  }

  componentDidMount() {
    this.getHotelAvailability();
  }

  getHotelData() {
    if (!this.state.hotels || this.state.hotels.length === 0) return []
    console.log('hotels: ', this.state.hotels)

    let key = 0
    return this.state.hotels.map(h => ({
      key: key++,
      photo: h.hotel_id,
      info: { hotelId: h.hotel_id, hotelName: h.hotel_name },
      reviewScore: parseFloat(h.review_score),
      price: parseFloat(h.price)
    }))
  }

  photoDataFormat = hotelId => {
    return <HotelPhoto hotelId={hotelId}/>
  }

  infoDataFormat = info => {
    info['comments'] = []
    for (var i = 0; i < this.state.hotel_entities.length; i++) {
      if (info.hotelId = this.state.hotel_entities[i].hotel_id) {
        info.comments = this.state.hotel_entities[i].comments
        break
      }
    }
    return <Info hotelId={info.hotelId}
                 hotelName={info.hotelName}
                 comments={info.comments}/>
  }

  getHotelAvailability = () => {
    const params = {
      checkin: '2017-06-09',
      checkout: '2017-06-10',
      cityIds: -2637882,
      room1: 'A,A',
      output: 'room_details,hotel_details'
    }
    let hotel_entities = []
    request.get(API_ENDPOINT + '/comments/1112')
      .then(res => hotel_entities = res.body.hotel_entities)

    hotelApi.getHotelAvailability(params, res => {
      console.log('@@@@@@@', res)
      if (!res || !res.hotels) return

      this.setState({ hotels: res.hotels, hotel_entities })
    });
  }
}
