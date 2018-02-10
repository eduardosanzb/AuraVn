import React from 'react';
import PropTypes from 'prop-types';

import GenericFunnelStep from '../../components/GenericFunnelStep';

const Hair = props => (
  <GenericFunnelStep
    headerText={'Hair style of the big day!'}
    cardsKey={'hairStyle'}
    defaultCurrentSelectionLabel={'Select a hair style'}
    {...props}
  />
);

Hair.propTypes = {
  currentSelection: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired
};

export default Hair;
