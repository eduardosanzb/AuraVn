import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';

const styles = {
  root: {
    width: '100%',
    flexGrow: 1
  }
};

const locationMatchStep = {
  '/': 0,
  '/dress-type': 1,
  '/dress-finish': 2,
  '/face': 3,
  '/hair': 4,
  '/results': 5
};
class DotsMobileStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: this.getStepFromPathname(),
      debugMode: true
    };
  }

  componentDidUpdate({ location: { pathname } }) {
    const { location: { pathname: current } } = this.props;
    if (pathname !== current) {
      this.setState({
        activeStep: this.getStepFromPathname()
      });
    }
  }

  getStepFromPathname = () => {
    const { location: { pathname } } = this.props;
    return locationMatchStep[pathname];
  };

  // TODO: Remove when global config file
  getPreviousPathname = () => {
    const invertedObject = Object.assign(
      {},
      ...Object.entries(locationMatchStep).map(([a, b]) => ({ [b]: a }))
    );
    const index = this.getStepFromPathname() - 1;
    return index >= 0 ? invertedObject[index] : '/';
  };

  getNextPathname = () => {
    const invertedObject = Object.assign(
      {},
      ...Object.entries(locationMatchStep).map(([a, b]) => ({ [b]: a }))
    );
    const index = this.getStepFromPathname() + 1;
    return index <= 5 ? invertedObject[index] : '/';
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep, debugMode } = this.state

    return (
      <MobileStepper
        type="dots"
        steps={6}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          debugMode ? (
            <Button
              component={Link}
              to={this.getNextPathname()}
              dense
              onClick={this.handleNext}
              disabled={this.state.activeStep === 5}>
              <KeyboardArrowRight />
              Next
            </Button>
          ) : (
            <div style={{ minWidth: 64 }} />
          )
        }
        backButton={
          <Button
            component={Link}
            to={this.getPreviousPathname()}
            dense
            onClick={this.handleBack}
            disabled={this.state.activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    );
  }
}

DotsMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(DotsMobileStepper);
