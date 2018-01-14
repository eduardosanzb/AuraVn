import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Home from '../Home';
import Dress from '../Dress';
import Face from '../Face';
import Hair from '../Hair';
import Results from '../Results';

const { DressType, DressStyle } = Dress;

const routes = [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    path: '/dress-type',
    component: DressType
  },
  {
    path: '/dress-finish',
    component: DressStyle
  },
  {
    path: '/face',
    component: Face
  },
  {
    path: '/hair',
    component: Hair
  },
  {
    path: '/results',
    component: Results
  }
];

const PageWithTransition = Page => props => (
  <div className="page">
    <ReactCSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={600}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}
      transitionName={props.match.path === '/results' ? 'SlideIn' : 'SlideOut'}>
      <Page {...props} />
    </ReactCSSTransitionGroup>
  </div>
);
const Layout = ({ location }) => {
  return (
    <React.Fragment>
      {routes.map(route => (
        <Route
          exact={route.exact}
          path={route.path}
          key={route.path}
          component={PageWithTransition(route.component)}
        />
      ))}
    </React.Fragment>
  );
};
export default Layout;
