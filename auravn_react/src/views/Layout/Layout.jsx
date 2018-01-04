import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../Home';
import Dress from '../Dress';
import Face from '../Face';
import Hair from '../Hair';
import Results from '../Results';

const { DressType, DressStyle } = Dress;

const Layout = props => {
  console.log(props);
  return (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/dress-type" component={DressType} />
    <Route path="/dress-finish" component={DressStyle} />
    <Route path="/face" component={Face} />
    <Route path="/hair" component={Hair} />
    <Route path="/results" component={Results} />
  </div>
  )
}

export default Layout;
