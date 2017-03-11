import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HotelList from 'containers/HotelList';

export default class App extends React.PureComponent {
  render(){
    return (
      <div>
        <div>Go Go Power Rangers ~~~</div>
      	<MuiThemeProvider>
          <HotelList />
	    </MuiThemeProvider>
	  </div>
    );
  }
}