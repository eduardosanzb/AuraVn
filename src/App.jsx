import React from 'react';
import Reboot from 'material-ui/Reboot';

import Hidden from 'material-ui/Hidden';
import withWidth from 'material-ui/utils/withWidth';

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
    console.log(this.props.width);
    return (
      <React.Fragment>
        <Reboot />
        <Hidden only={['md', 'lg', 'xl']} >
          <Route
            exact
            render={({ location }) => (
              <Menu content={Layout} location={location} selections={this.state}>
                <this.HOCLayout location={location} />
              </Menu>
            )}
          />
        </Hidden>
        <div style={{ display: 'flex', justifyContent: 'center'}} >
        <div style={{ maxWidth: 800, maxHeight: 1200}}>
        <Hidden only={['xs', 'sm']} >
          <Route render={props => <this.HOCLayout {...props} />} />
        </Hidden>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withWidth()(App);
