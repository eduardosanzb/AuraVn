import React from 'react';
import PropTypes from 'prop-types';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import GenericFunnelStep from '../../components/GenericFunnelStep';

class Hair extends React.PureComponent {
  state = {
    showDialog: !!this.props.selections.height,
    height: this.props.selections.height || ''
  };

  showHeightDialog = selection => {
    this.setState(() => {
      this.props.onSelection(selection);
      return {
        showDialog: true
      };
    });
  };

  hideHeighDialog = () => {
    this.setState(() => ({ showDialog: false }));
  };

  goToResults = () => {
    this.props.updateSelection('height')(this.state.height);
    this.props.history.push('/results');
  };

  changeHeigh = e => {
    this.setState({ height: Number(e.target.value) });
  };

  validateHeight = () => {
    const { height } = this.state;
    return !height || height < 120 || height > 250;
  };
  render() {
    return (
      <React.Fragment>
        <GenericFunnelStep
          {...this.props}
          headerText={'El gran peinado 💇🏻'}
          cardsKey={'hairStyle'}
          onSelection={this.showHeightDialog}
        />
        <Dialog
          open={this.state.showDialog}
          onClose={this.hideHeighDialog}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Tu altura</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Escribe tu altura en centimetros.
            </DialogContentText>
            <TextField
              id="number"
              value={this.state.height || ''}
              onChange={this.changeHeigh}
              type="number"
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.hideHeighDialog} color="primary">
              Cancel
            </Button>
            <Button
              disabled={this.validateHeight()}
              onClick={this.goToResults}
              color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
Hair.propTypes = {
  currentSelection: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired
};

export default Hair;
