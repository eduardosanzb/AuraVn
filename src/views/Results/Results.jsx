import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import LazyImage from '../../components/LazyImage';
import config from '../../config';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    width: '100%'
  },
  cardContent: {
    width: '100%',
    minHeight: 300,
    display: 'flex'
  },
  title: {
    paddingTop: 10,
    paddingLeft: 10
  },
  cardContent: {
    width: '100%',
    minHeight: 300,
    display: 'flex'
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
    justifyContent: 'space-around'
  }
});
const onlyWithStore = ({ storeValue }) => storeValue;

const Results = ({ selections, classes, history }) => (
  <Grid container>
    <Paper className={classes.paperRoot}>
      <Typography variant="title" className={classes.header}>
        AVN te recomienda <br />
        EN CONSTRUCCION 🚧🚧🚧🚧🚧
      </Typography>
    </Paper>

    <Grid item xs={12}>
      <Paper className={classes.cardContent}>
        <LazyImage src="https://auravn.ams3.digitaloceanspaces.com/results_dress.png" />
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.root}>
        <Typography variant="title" className={classes.title}>
          Resumen
        </Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Paso</TableCell>
              <TableCell>Selecion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {config.views
              .filter(onlyWithStore)
              .map(({ storeValue, text, to }) => (
                <TableRow key={storeValue}>
                  <TableCell>{text}</TableCell>
                  <TableCell>
                    {selections[storeValue] || (
                      <Button color="primary" onClick={() => {
                        history.push(to)
                        console.log('d');
                      }}>
                        Ir al paso
                      </Button>

                    )}
                  </TableCell>
                </TableRow>
              ))}
            <TableRow>
              <TableCell>Altura</TableCell>
              <TableCell>
                {selections.height && `${selections.height}cms`}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  </Grid>
);

Results.propTypes = {
  selections: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Results);
