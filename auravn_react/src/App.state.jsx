import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';

import Layout from './views/Layout/Layout';
import Menu from './views/Menu/Menu';
import { BrowserRouter as Router } from 'react-router-dom';

class AppState extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          <Menu />
          <Layout />
        </div>
      </Router>
    );
  }
}

export default AppState;
