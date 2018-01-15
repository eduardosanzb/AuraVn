import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import Button from 'material-ui/Button';
import Icon from 'material-ui-icons/PlayArrow';

import Grid from 'material-ui/Grid';

const IconPath = './icon.png';
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  image: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '80%'
  }
});

function Home(props) {
  const { classes } = props;
  return (
    <Grid
      className={classes.root}
      container
      alignContent="center"
      justify="center">
      <Grid item xs={12}>
        <img src={IconPath} className={classes.image} />
      </Grid>
      <Grid item>
        <Button
          className={classes.button}
          raised
          color="primary"
          component={Link}
          to="/dress-type">
          Start
          <Icon />
        </Button>
      </Grid>
    </Grid>
  );
}

Home.defaultProps = {};

Home.propTypes = {};

export default withStyles(styles, withWidth())(Home);
