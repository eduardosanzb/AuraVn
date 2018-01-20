import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import grey from 'material-ui/colors/grey';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[100],
      main: purple[500],
    },
    secondary: {
      main: grey[900]
    },
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
