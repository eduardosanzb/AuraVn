import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import Button from 'material-ui/Button';
import Icon from 'material-ui-icons/PlayArrow';

import Grid from 'material-ui/Grid';

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
        <img src={'./icon.png'} className={classes.image} alt={'logo'}/>
      </Grid>
      <Grid item>
        <Button
          className={classes.button}
          variant="raised"
          raised="true"
          color="primary"
          component={Link}
          to="/dress-type">
          Encuentra tu velo perfecto
          <Icon />
        </Button>
      </Grid>
    </Grid>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, withWidth())(Home);
