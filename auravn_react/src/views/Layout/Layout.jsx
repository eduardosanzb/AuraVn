import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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

const Layout = ({ location }) => {
  return (
    <div style={{ padding: 10 }}>
      <TransitionGroup>
        <CSSTransition
          key={location.pathname.split('/')[1]}
          classNames="fade"
          mountOnEnter={true}
          unmountOnExit={true}
          exit={false}
          timeout={location.pathname === '/dress-type' ? 5000 : 200}>
          <Switch location={location}>
            {routes.map(route => (
              <Route
                location={location}
                exact={route.exact}
                path={route.path}
                key={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
export default Layout;
