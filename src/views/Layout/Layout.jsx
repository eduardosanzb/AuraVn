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
          timeout={location.pathname === '/dress-type' ? 2500 : 200}>
          <Switch location={location}>
            {config.views.map(({ component, exact, to, storeValue, funnelStep }) => {
              const Component = Components[component];
              return (
                <Route
                  location={location}
                  exact={exact}
                  path={to}
                  key={funnelStep}
                  render={({ history }) => (
                    <Component
                      currentSelection={selections[storeValue]}
                      selections={selections}
                      onSelection={updateSelections(storeValue)}
                      updateSelection={updateSelections}
                      currentPath={to}
                      history={history}
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
