import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import grey from 'material-ui/colors/grey';

import App from './AppState';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: grey,
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
