import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

import Hidden from 'material-ui/Hidden';

import Layout from './views/Layout/Layout';
import Menu from './views/Menu/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const MenuWithRouterProps = () => (
  <Route
    path="/"
    render={({ location }) => (
      <Menu content={Layout} location={location}>
        <Layout location={location} />
      </Menu>
    )}
  />
);
class AppState extends React.PureComponent {
  render() {
    return (
      <div>
      <Reboot />
      <Router>
        <div>
          <Hidden mdUp>{MenuWithRouterProps()}</Hidden>
          <Hidden mdDown>
            <Route render={props => <Layout {...props} />} />
          </Hidden>
        </div>
      </Router>
      </div>
    );
  }
}

export default AppState;
