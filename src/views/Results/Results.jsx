import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import config from '../../config';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    width: '100%'
  }
});
const onlyWithStore = ({ storeValue }) => storeValue;
const Results = ({ selections, classes }) => (

  <Paper className={classes.root}>
  <Typography variant="title">Nutrition</Typography>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Paso</TableCell>
          <TableCell>Seleccion</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {config.views.filter(onlyWithStore).map(({ storeValue, text }) => (
          <TableRow key={storeValue}>
            <TableCell>{text}</TableCell>
            <TableCell>{selections[storeValue]}</TableCell>
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
);

Results.propTypes = {
  selections: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Results);
