import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';

import Hidden from 'material-ui/Hidden';

import Layout from './views/Layout/Layout';
import Menu from './views/Menu/Menu';
import { BrowserRouter as Router } from 'react-router-dom';

class AppState extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Hidden mdUp>
            <Menu content={Layout} />
          </Hidden>
          <Layout />
        </div>
      </Router>
    );
  }
}

export default AppState;
