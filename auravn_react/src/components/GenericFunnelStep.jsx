import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Zoom from 'material-ui/transitions/Zoom';
import Typography from 'material-ui/Typography';
import InfoIcon from 'material-ui-icons/InfoOutline';
import NextIcon from 'material-ui-icons/NavigateNext';
import Button from 'material-ui/Button';

import List, { ListItem } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';

import config from '../config';
import AuraCard from './Card';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paperRoot: theme.mixins.gutters({
    paddingTop: 10,
    paddingBottom: 10,
    maxHeight: 40,
    display: 'flex',
    justifyContent: 'space-between'
  }),
  header: { textAlign: 'center' },
  card: {
    minWidth: 275
  },
  list: {
    display: 'relative',
    overflow: 'auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary
  },
  fab: {
    position: 'fixed',
    bottom: 60,
    right: theme.spacing.unit * 2
  }
});

const mockCards = (cardsKey, classes, onClick, currentSelection) => {
  if (!Object.keys(config.cards).includes(cardsKey)) {
    throw new Error(
      `The cardsKey ${cardsKey} is not in the configuration file`
    );
  }

  return config.cards[cardsKey].map((props, index) => (
    <ListItem key={`${index}-${props.name}`}>
      <AuraCard
        {...props}
        onClick={onClick}
        selected={currentSelection === props.name}
      />
    </ListItem>
  ));
};

const nextButton = ({
  classes,
  transitionDuration,
  currentSelection,
  currentPath
}) => (
  <Zoom
    key="next-view"
    in={!!currentSelection}
    timeout={transitionDuration}
    style={{
      transitionDelay: currentSelection ? transitionDuration.exit : 0
    }}
    unmountOnExit>
    <Button
      component={Link}
      to={config.locationMatchStep[currentPath].nextFunnelStep}
      variant="fab"
      className={classes.fab}
      color="primary">
      <NextIcon />
    </Button>
  </Zoom>
);

const GenericFunnelStep = ({
  headerText,
  cardsKey,
  classes,
  theme,
  defaultCurrentSelectionLabel,
  currentSelection,
  onSelection,
  nextView,
  currentPath
}) => {
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="title" className={classes.header}>
          {headerText}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <div>
          <List className={classes.list}>
            <ListSubheader>
              <Paper className={classes.paperRoot}>
                <Typography>
                  Current Selection:{' '}
                  {currentSelection || defaultCurrentSelectionLabel}
                </Typography>
                <InfoIcon />
              </Paper>
            </ListSubheader>
            {mockCards(cardsKey, classes, onSelection, currentSelection)}
          </List>
        </div>
      </Grid>
      {nextButton({
        classes,
        currentSelection,
        transitionDuration,
        currentPath
      })}
    </Grid>
  );
};

GenericFunnelStep.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  headerText: PropTypes.string.isRequired,
  cardsKey: PropTypes.string.isRequired,
  defaultCurrentSelectionLabel: PropTypes.string.isRequired,
  currentSelection: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(GenericFunnelStep);
