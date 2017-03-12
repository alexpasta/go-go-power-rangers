import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HomeHeader from 'components/HomeHeader'
import HomeBody from 'containers/HomeBody'

export default class App extends React.PureComponent {
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
