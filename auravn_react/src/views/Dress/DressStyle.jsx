import React from 'react';
import PropTypes from 'prop-types';

import GenericFunnelStep from '../../components/GenericFunnelStep';

const DressStyle = props => (
  <GenericFunnelStep
    headerText={'Your dress style'}
    cardsKey={'dressStyle'}
    defaultCurrentSelectionLabel={'Select the style of your dress'}
    {...props}
  />
);

DressStyle.propTypes = {
  currentSelection: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired
};

export default DressStyle;
