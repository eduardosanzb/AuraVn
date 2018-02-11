import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import config from '../../config';

import Home from '../Home';
import DressStyle from '../Dress/DressStyle';
import DressFinish from '../Dress/DressFinish';
import Face from '../Face';
import Hair from '../Hair';
import Results from '../Results';

const Components = {
  Home,
  DressStyle,
  DressFinish,
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
          timeout={location.pathname === '/dress-style' ? 2500 : 200}>
          <Switch location={location}>
            {config.views.map(
              ({ component, exact, to, storeValue, funnelStep }) => {
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
              }
            )}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

Layout.propTypes = {
  location: PropTypes.shape({}).isRequired,
  selections: PropTypes.shape({}).isRequired,
  updateSelections: PropTypes.func.isRequired
};

export default Layout;
