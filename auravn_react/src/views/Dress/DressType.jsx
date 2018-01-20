import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import InfoIcon from 'material-ui-icons/InfoOutline';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

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

function mockCards(classes) {
  return [...Array(4)].map(() => (
    <ListItem>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>Word of the Day</Typography>
          <Typography type="headline" component="h2">
            sdfasdf
          </Typography>
          <Typography className={classes.pos}>adjective</Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
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
          <Typography>Current Selection: Type A</Typography>
          <InfoIcon />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <div>
          <List className={classes.list}>{mockCards(classes)}</List>
        </div>
      </Grid>
    </Grid>
  );
}

DressType.defaultProps = {};

DressType.propTypes = {};

export default withStyles(styles, { withTheme: true })(DressType);
