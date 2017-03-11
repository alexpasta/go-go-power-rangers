import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import hotelApi from 'apis/hotelApi';
import { CITIES, DEFAULT_CITY }  from 'constants/Constants';

export default class HotelList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      currentPage: 1
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
		    <AutoComplete
  	      floatingLabelText="Type a city name"
  	      filter={AutoComplete.fuzzyFilter}
  	      dataSource={CITIES}
  	      maxSearchResults={5}
          onNewRequest={this.getHotelAvailability}
  	    />

        <BootstrapTable
            data={this.getHotelData()}
            selectRow={selectRow}
            options={options}
            remote={false}
            pagination={true}
          >
            <TableHeaderColumn isKey={true} dataField="key" hidden={true}></TableHeaderColumn>
            <TableHeaderColumn dataField="name" width="240">Name</TableHeaderColumn>
            <TableHeaderColumn dataField="reviewScore" width="240">Review Score</TableHeaderColumn>
            <TableHeaderColumn dataField="price" width="240">Price</TableHeaderColumn>
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
      name: h.hotel_name,
      reviewScore: h.review_score,
      price: h.price
    }))
  }

  getHotelAvailability = () => {
    const params = {
      checkin: '2017-06-09',
      checkout: '2017-06-10',
      cityIds: -2637882,
      room1: 'A,A',
      output: 'room_details,hotel_details'
    }

    hotelApi.getHotelAvailability(params, res => {
      console.log('@@@@@@@', res)
      if (!res || !res.hotels) return

      this.setState({ hotels: res.hotels })
    });
  }
}
