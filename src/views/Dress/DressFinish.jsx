import React from 'react';
import PropTypes from 'prop-types';

import GenericFunnelStep from '../../components/GenericFunnelStep';

const DressType = props => (
  <GenericFunnelStep
    headerText={'Acabado de tu vestido 💎'}
    cardsKey={'dressFinish'}
    {...props}
  />
);

DressType.propTypes = {
  currentSelection: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired
};

export default DressType;
