import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import InfoIcon from 'material-ui-icons/InfoOutline';
import List, { ListItem } from 'material-ui/List';

import AuraCard from '../../components/Card'
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

// TODO: Fetch this data from a GraphQL endpoint
const dressTypes = [
  {
    description: 'Lorem ipson',
    image: './dress_a_shape.png',
    name: '1',
  },
  {
    description: 'Lorem ipson',
    image: './dress_greek.png',
    name: '2',
  },
  {
    description: 'Lorem ipson',
    image: './dress_mermaid.png',
    name: '3',
  },
  {
    description: 'Lorem ipson',
    image: './dress_princess.png',
    name: '4',
  },
  {
    description: 'Lorem ipson',
    image: './dress_straight.png',
    name: '5',
  },
];

function mockCards(classes, onClick, currentSelection) {
  return dressTypes.map((props, index) => (
    <ListItem key={`${index}-${props.name}`}>
      <AuraCard {...props} onClick={onClick} selected={currentSelection===props.name} />
    </ListItem>
  ));
}

function DressType({ classes, theme, currentSelection, onSelection }) {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12}>
        <Typography className={classes.header}>
          Which dress are you having?
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paperRoot}>
          <Typography>Current Selection: {currentSelection}</Typography>
          <InfoIcon />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <div>
          <List className={classes.list}>
            {mockCards(classes, onSelection, currentSelection)}
          </List>
        </div>
      </Grid>
    </Grid>
  );
}

DressType.defaultProps = {};

DressType.propTypes = {};

export default withStyles(styles, { withTheme: true })(DressType);
