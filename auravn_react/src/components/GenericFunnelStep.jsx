import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import InfoIcon from 'material-ui-icons/InfoOutline';
import List, { ListItem } from 'material-ui/List';

import config from '../config';
import AuraCard from './Card'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paperRoot: theme.mixins.gutters({
    paddingTop: 10,
    paddingBottom: 10,
    maxHeight: 40,
    display: 'flex',
    justifyContent: 'space-between',
  }),
  header: { textAlign: 'center' },
  card: {
    minWidth: 275,
  },
  list: {
    display: 'relative',
    overflow: 'auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

function mockCards(cardsKey, classes, onClick, currentSelection) {
  if (!Object.keys(config.cardsKey).includes(cardsKey)) {
    throw new Error(`The cardsKey ${cardsKey} is not in the configuration file`);
  }

  return config[cardsKey].faceType.map((props, index) => (
    <ListItem key={`${index}-${props.name}`}>
      <AuraCard {...props} onClick={onClick} selected={currentSelection === props.name} />
    </ListItem>
  ));
}

function GenericFunnelStep({headerText, cardsKey, classes, theme, defaultCurrentSelectionLabel, currentSelection, onSelection }) {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12}>
        <Typography className={classes.header}>
          {headerText}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paperRoot}>
          <Typography>Current Selection: {currentSelection || defaultCurrentSelectionLabel}</Typography>
          <InfoIcon />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <div>
          <List className={classes.list}>
            {mockCards(cardsKey, classes, onSelection, currentSelection)}
          </List>
        </div>
      </Grid>
    </Grid>
  );
}

GenericFunnelStep.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  headerText: PropTypes.string.isRequired,
  cardsKey: PropTypes.string.isRequired,
  defaultCurrentSelectionLabel: PropTypes.string.isRequired,
  currentSelection: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(GenericFunnelStep);
