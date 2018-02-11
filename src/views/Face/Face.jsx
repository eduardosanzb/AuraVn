import React from 'react';
import PropTypes from 'prop-types';

import GenericFunnelStep from '../../components/GenericFunnelStep';

const Face = props => (
  <GenericFunnelStep
    headerText={'Tu tipo de rostro 🙆🏻'}
    cardsKey={'faceType'}
    {...props}
  />
);

Face.propTypes = {
  currentSelection: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired
};

export default Face;
