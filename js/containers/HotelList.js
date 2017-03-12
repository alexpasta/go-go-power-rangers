import React from 'react'
import { Image } from 'material-ui-image'
import AutoComplete from 'material-ui/AutoComplete'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import HotelPhoto from 'components/HotelPhoto'
import hotelApi from 'apis/hotelApi'
import { CITIES, DEFAULT_CITY }  from 'constants/constant'

export default class HotelList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
        <BootstrapTable
            data={this.getHotelData()}
            selectRow={selectRow}
            options={options}
            remote={false}
            pagination={true}
          >
            <TableHeaderColumn isKey={true} dataField="key" hidden={true}></TableHeaderColumn>
            <TableHeaderColumn dataField="photo" dataFormat={this.photoDataFormat}>Photo</TableHeaderColumn>
            <TableHeaderColumn dataField="name" width="200">Name</TableHeaderColumn>
            <TableHeaderColumn dataField="reviewScore" width="130" dataSort>Review Score</TableHeaderColumn>
            <TableHeaderColumn dataField="price" width="130" dataSort>Price</TableHeaderColumn>
          </BootstrapTable>
      </div>
    );
  }

  getHotelData() {
    if (!this.props.hotels || this.props.hotels.length === 0) return []
    
    let key = 0
    return this.props.hotels.map(h => ({
      key: key++,
      photo: h.hotel_id,
      name: h.hotel_name,
      reviewScore: parseFloat(h.review_score),
      price: parseFloat(h.price)
    }))
  }

  photoDataFormat = hotelId => {
    return <HotelPhoto hotelId={hotelId}/>
  }
}
