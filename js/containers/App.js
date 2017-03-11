import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HotelList from 'containers/HotelList';
import Filter from './components/Filter';
import request from 'supertest';
import API_ENDPOINT from './config';

export default class App extends React.PureComponent {
  constructor(props) {
    this.state = {
      manager_id: '',
      priceRanges: [],
      reviewScores: [],
      landmarks: []
    }
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  componentDidMount() {
    let nextState = this.state;
    request.get(API_ENDPOINT + `/filter/${manager_id}`)
      .withCredentials()
      .then(res => {
        nextState.priceRanges = res.body.filter.priceRanges
        nextState.reviewScores = res.body.filter.reviewScores
        nextState.landmarks = res.body.filter.landmarks
        this.setState(nextState);
      });
  }

  handleFilterClick(event) {
    let nextState = this.state;
    const target = event.target;
    nextState[target] = target.value;
    request.post(API_ENDPOINT + '/filter/update')
      .withCredentials()
      .send(filter)
    this.setState(nextState);
  }

  render(){
    return (
      <div>
        <div>Go Go Power Rangers ~~~</div>
      	<MuiThemeProvider>
          <Filter priceRanges={this.priceRanges}
                  reviewScores={this.reviewScores}
                  landmarks={this.landmarks}
                  handleFilterChange={this.handleFilterClick} />
          <HotelList />
	    </MuiThemeProvider>
	  </div>
    );
  }
}
