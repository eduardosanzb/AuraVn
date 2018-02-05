import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import config from '../../config';

const styles = {
  root: {
    width: '100%',
    flexGrow: 1
  }
};

class DotsMobileStepper extends React.PureComponent {
  state = {
    activeStep: 0,
    debugMode: config.debugMode
  };

  componentDidUpdate({ location: { pathname } }) {
    const { location: { pathname: current } } = this.props;
    if (pathname !== current) {
      this.setState({
        activeStep: this.currentFunnelStep.funnelStep,
      });
    }
  }

  get currentFunnelStep() {
    const { location: { pathname } } = this.props;
    if(config.locationMatchStep)
    return config.locationMatchSetup[pathname];
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
    const { classes, location: { pathname } } = this.props;
    const { activeStep, debugMode } = this.state
    const { previousFunnelStep = '/', nextFunnelStep='/' } = config.locationMatchStep[pathname];

    console.log(config.locationMatchStep[pathname]);
    console.log(previousFunnelStep);
    console.log(nextFunnelStep);
    return (
      <MobileStepper
        type="dots"
        steps={config.funnelTotalSteps}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          debugMode ? (
            <Button
              component={Link}
              to={previousFunnelStep}
              dense
              onClick={this.handleNext}
              disabled={this.state.activeStep === config.funnelTotalSteps - 1}>
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
            to={nextFunnelStep}
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
};

export default withStyles(styles)(DotsMobileStepper);
