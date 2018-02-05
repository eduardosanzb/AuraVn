import React from 'react';
import PropTypes from 'prop-types';

import GenericFunnelStep from '../../components/GenericFunnelStep';

const DressType = props => (
  <GenericFunnelStep
    headerText={'Your Dress type'}
    cardsKey={'dressType'}
    defaultCurrentSelectionLabel={'Select the typ fo your dress'}
    {...props}
  />
);

DressType.propTypes = {
  currentSelection: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired
};

export default DressType;
