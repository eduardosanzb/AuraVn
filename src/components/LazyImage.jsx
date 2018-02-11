import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';

import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
const defaultStyle = {
  transition: `opacity 500ms ease-in-out`,
  opacity: 0
};
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  media: {
    maxHeight: 250,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  progress: {
    position: 'absolute',
    top: '40%',
    left: '40%'
  }
});

class LazyImage extends React.PureComponent {
  state = {
    imageLoaded: false
  };

  onImageLoad = () => {
    this.setState({ imageLoaded: true })
  }

  render() {
    const {  src,  classes } = this.props;
    const { imageLoaded } = this.state
    return (
      <React.Fragment>
        <Transition in={!imageLoaded} timeout={300} unmountOnExit enter={false}>
          {state => (
            <CircularProgress
              className={classes.progress}
              size={50}
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            />
          )}
        </Transition>

        <Transition in={imageLoaded} timeout={500}>
          {state => (
            <img
              alt={src.substring(src.length - 5)}
              className={classes.media}
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
              title={`image-for-${src.substring(src.length - 5)}`}
              src={src}
              onLoad={this.onImageLoad}
            />
          )}
        </Transition>
      </React.Fragment>
    );
  }
}
LazyImage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  src: PropTypes.string.isRequired,
};

export default withStyles(styles)(LazyImage);
