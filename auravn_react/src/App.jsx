import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';

import Hidden from 'material-ui/Hidden';

import Layout from './views/Layout/Layout';
import Menu from './views/Menu/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const MenuWithRouterProps = () => (
  <Route
    path="/"
    render={props => (
      <Menu {...props} content={Layout}>
        {' '}
        <Layout />
      </Menu>
    )}
  />
);
class AppState extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Hidden mdUp>{MenuWithRouterProps()}</Hidden>
          <Hidden mdDown>
            <Layout />
          </Hidden>
        </div>
      </Router>
    );
  }
}

export default AppState;
