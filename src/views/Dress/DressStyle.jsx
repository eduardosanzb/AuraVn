import React from 'react';
import PropTypes from 'prop-types';

import GenericFunnelStep from '../../components/GenericFunnelStep';

const DressStyle = props => (
  <GenericFunnelStep
    headerText={'Estilo de tu vestido 👸🏻'}
    cardsKey={'dressStyle'}
    {...props}
  />
);

DressStyle.propTypes = {
  currentSelection: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired
};

export default DressStyle;
