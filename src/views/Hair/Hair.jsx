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
    height: this.props.selections.height || '',
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
    this.setState({ height: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div>Your Heigh</div>
        <GenericFunnelStep
          {...this.props}
          headerText={'Hair style of the big day!'}
          cardsKey={'hairStyle'}
          defaultCurrentSelectionLabel={'Select a hair style'}
          onSelection={this.showHeightDialog}
        />
        <Dialog
          open={this.state.showDialog}
          onClose={this.hideHeighDialog}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Height</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Input your height in centimeters.
            </DialogContentText>
            <TextField
              id="number"
              value={this.state.height}
              onChange={this.changeHeigh}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.hideHeighDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={this.goToResults} color="primary">
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
