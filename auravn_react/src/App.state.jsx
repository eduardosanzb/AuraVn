import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './views/Home'
import Dress from './views/Dress'
import Face from './views/Face'
import Hair from './views/Hair'
import Results from './views/Results'

const { DressType, DressStyle } = Dress;

class AppState extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dress-type">Dress 1</Link>
            </li>
            <li>
              <Link to="/dress-finish">Dress 2</Link>
            </li>
            <li>
              <Link to="/face">Type of Face</Link>
            </li>
            <li>
              <Link to="/hair">Hair style</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/dress-type" component={DressType} />
          <Route path="/dress-finish" component={DressStyle} />
          <Route path="/face" component={Face} />
          <Route path="/hair" component={Hair} />
          <Route path="/results" component={Results} />
        </div>
      </Router>
    );
  }
}

export default AppState;
