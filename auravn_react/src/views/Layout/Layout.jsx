import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import config from '../../config';
import Home from '../Home';
import Dress from '../Dress';
import Face from '../Face';
import Hair from '../Hair';
import Results from '../Results';

const Components = {
  Home,
  ...Dress,
  Face,
  Hair,
  Results
};

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
            {config.views.map(({ component, exact, path, storeValue, funnelStep }) => {
              const Component = Components[component];
              return (
                <Route
                  location={location}
                  exact={exact}
                  path={path}
                  key={funnelStep}
                  render={() => (
                    <Component
                      currentSelection={selections[storeValue]}
                      onSelection={updateSelections(storeValue)}
                      results={path === '/results' ? selections : null}
                    />
                  )}
                />
              );
            })}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
export default Layout;
