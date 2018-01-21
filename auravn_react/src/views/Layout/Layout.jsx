import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
    Component: Home,
  },
  {
    path: '/dress-type',
    Component: DressType,
    storeValue: 'dressType',
  },
  {
    path: '/dress-finish',
    Component: DressStyle,
    storeValue: 'dressStyle',
  },
  {
    path: '/face',
    Component: Face,
    storeValue: 'faceType',
  },
  {
    path: '/hair',
    Component: Hair,
    storeValue: 'hairType',
  },
  {
    path: '/results',
    Component: Results,
  },
];

const Layout = ({ location, selections, updateSelections }) => {
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
            {routes.map(({ Component, exact, path, storeValue }) => (
              <Route
                location={location}
                exact={exact}
                path={path}
                key={path}
                render={() => (
                  <Component
                    currentSelection={selections[storeValue]}
                    onSelection={updateSelections.bind(null, storeValue)}
                    results={path === '/results' ? selections : null}
                  />
                )}
              />
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
export default Layout;
