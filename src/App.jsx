import React from 'react';
import Reboot from 'material-ui/Reboot';

import Hidden from 'material-ui/Hidden';

import Layout from './views/Layout/Layout';
import Menu from './views/Menu/Menu';
import { Route } from 'react-router-dom';

class App extends React.PureComponent {
  state = {
    dressFinish: '',
    dressStyle: '',
    faceType: '',
    hairType: ''
  };

  updateState = key => newValue => {
    // TODO: Add async update
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
      <React.Fragment>
        <Reboot />
        <Hidden mdUp>
          <Route
            exact
            render={({ location }) => (
              <Menu content={Layout} location={location} selections={this.state}>
                <this.HOCLayout location={location} />
              </Menu>
            )}
          />
        </Hidden>
        <Hidden mdDown>
          <Route render={props => <this.HOCLayout {...props} />} />
        </Hidden>
      </React.Fragment>
    );
  }
}

export default App;
