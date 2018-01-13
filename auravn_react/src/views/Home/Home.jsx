import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';

import Grid from 'material-ui/Grid';

const IconPath = './icon.png';
const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
  },

});
function Home(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <img src={IconPath} style={{ maxWidth: '80%' }}/>
    </div>
  );
}

Home.defaultProps = {};

Home.propTypes = {};

export default withStyles(styles, withWidth())(Home);
