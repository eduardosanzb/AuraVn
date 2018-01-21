import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

import Hidden from 'material-ui/Hidden';

import Layout from './views/Layout/Layout';
import Menu from './views/Menu/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dressType: null,
      dressStyle: null,
      faceType: null,
      hairType: null,
    };
  }

  updateState = (key, newValue) => {
    // TODO: Add async update
    console.log('key: ', key);
    this.setState(state => ({ ...this.state, [key]: newValue }));
  };

  HOCLayout = props => {
    return (
      <Layout
        {...props}
        selections={this.state}
        updateSelections={this.updateState}
      />
    );
  };

  render() {
    return (
      <div>
        <Reboot />
        <Router>
          <div>
            <Hidden mdUp>
              <Route
                path="/"
                render={({ location }) => (
                  <Menu content={Layout} location={location}>
                    <this.HOCLayout location={location} />
                  </Menu>
                )}
              />
            </Hidden>
            <Hidden mdDown>
              <Route render={props => <this.HOCLayout {...props} />} />
            </Hidden>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
