import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Zoom from 'material-ui/transitions/Zoom';
import Typography from 'material-ui/Typography';
import NextIcon from 'material-ui-icons/NavigateNext';
import Button from 'material-ui/Button';

import List, { ListItem } from 'material-ui/List';

import config from '../config';
import AuraCard from './AuraCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paperRoot: {
    position: 'fixed',
    top: 0,
    zIndex: 1,
    width: '100%',
    height: 70,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: { textAlign: 'center' },
  list: {
    display: 'relative',
    overflow: 'auto',
  },
  fab: {
    position: 'fixed',
    bottom: 60,
    right: theme.spacing.unit * 2,
  },
});

const mockCards = (cardsKey, classes, onClick, currentSelection) => {
  if (!Object.keys(config.cards).includes(cardsKey)) {
    throw new Error(`The cardsKey ${cardsKey} is not in the configuration file`);
  }

  return config.cards[cardsKey].map(props => (
    <ListItem key={`${props.name}`}>
      <AuraCard {...props} onClick={onClick} selected={currentSelection === props.name} />
    </ListItem>
  ));
};

const nextButton = ({
  classes, transitionDuration, currentSelection, currentPath,
}) => (
  <Zoom
    key="next-view"
    in={!!currentSelection}
    timeout={transitionDuration}
    style={{
      transitionDelay: currentSelection ? transitionDuration.exit : 0,
    }}
    unmountOnExit
  >
    <Button
      component={Link}
      to={config.locationMatchStep[currentPath].nextFunnelStep}
      variant="fab"
      className={classes.fab}
      color="primary"
    >
      <NextIcon />
    </Button>
  </Zoom>
);

const GenericFunnelStep = ({
  headerText,
  cardsKey,
  classes,
  theme,
  currentSelection,
  onSelection,
  currentPath,
}) => {
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      ref={(el) => {
        this.top = el;
      }}
    >
      <Paper className={classes.paperRoot}>
        <Typography variant="title" className={classes.header}>
          {headerText}
        </Typography>

        {currentSelection && <Typography>Haz seleccionado: {currentSelection}!</Typography>}
      </Paper>
      <Grid item xs={12}>
        <List className={classes.list}>
          {mockCards(cardsKey, classes, onSelection, currentSelection)}
        </List>
      </Grid>
      {currentPath !== '/hair' &&
        nextButton({
          classes,
          currentSelection,
          transitionDuration,
          currentPath,
        })}
    </Grid>
  );
};

GenericFunnelStep.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  headerText: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  cardsKey: PropTypes.string.isRequired,
  currentSelection: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(GenericFunnelStep);
