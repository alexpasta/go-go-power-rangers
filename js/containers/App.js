import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HomeHeader from 'components/HomeHeader'
import HomeBody from 'containers/HomeBody'

export default class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      managerId: '',
      priceRanges: [],
      reviewScores: [],
      landmarks: []
    }
  }

  componentDidMount() {
    let nextState = this.state;
    // request.get(API_ENDPOINT + `/filter/${managerId}`)
    //   .then(res => {
    //     nextState.priceRanges = res.body.filter.priceRanges
    //     nextState.reviewScores = res.body.filter.reviewScores
    //     nextState.landmarks = res.body.filter.landmarks
    //     this.setState(nextState);
    //   });
  }

  handleFilterClick = event => {
    // let nextState = this.state;
    // const target = event.target;
    // nextState[target] = target.value;
    // request.post(API_ENDPOINT + '/filter/update')
    //   .send(filter)
    // this.setState(nextState);
  }

  render(){
    return (
      <div>
      	<MuiThemeProvider>
          <div>
            <HomeHeader />
            <HomeBody />
          </div>
	    </MuiThemeProvider>
	  </div>
    );
  }
}
