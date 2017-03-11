import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HotelList from 'containers/HotelList'
import HomeHeader from 'components/HomeHeader'

export default class App extends React.PureComponent {
  render(){
    return (
      <div>
      	<MuiThemeProvider>
          <div>
            <HomeHeader />
            <HotelList />
          </div>
	    </MuiThemeProvider>
	  </div>
    );
  }
}