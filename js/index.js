import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from 'containers/App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('hotelapp'));