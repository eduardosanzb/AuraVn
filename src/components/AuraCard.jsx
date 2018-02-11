import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { CircularProgress } from 'material-ui/Progress';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/InfoOutline';
import FlippedIcon from 'material-ui-icons/HighlightOff';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  selected: {
    flexGrow: 1,
    outlineStyle: 'solid',
    outlineColor: theme.palette.primary.main,
    outlineWidth: 2
  },
  cardActions: {
    float: 'right'
  },
  cardContent: {
    width: '100%',
    minHeight: 300,
    display: 'flex'
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
const defaultStyle = {
  transition: `opacity 500ms ease-in-out`,
  opacity: 0
};
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
};

class AuraCard extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  state = {
    flipped: false,
    imageLoaded: false
  };

  flipCard = () => {
    this.setState(({ flipped }) => ({ flipped: !flipped }));
  };

  render() {
    const { classes, name, description, image, selected, onClick } = this.props;
    const { flipped, imageLoaded } = this.state;

    return (
      <Card className={selected ? classes.selected : classes.root}>
        <CardActions className={classes.cardActions} disableActionSpacing>
          <IconButton
            color={flipped ? 'secondary' : 'primary'}
            aria-label={`select-${name}`}
            onClick={this.flipCard}>
            {flipped ? <FlippedIcon /> : <InfoIcon />}
          </IconButton>
        </CardActions>

        <ButtonBase
          className={classes.cardContent}
          onClick={() => onClick(name)}>
          <CardContent>
            {flipped === false && (
              <div>
                <Transition
                  in={!imageLoaded}
                  timeout={300}
                  unmountOnExit
                  enter={false}>
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

                {/* TODO: Use redux to detect if the image was already fetched */}
                <Transition in={imageLoaded} timeout={500}>
                  {state => (
                    <img
                      alt={name}
                      className={classes.media}
                      style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                      }}
                      title={`image-for-${name}`}
                      src={image}
                      onLoad={() => {
                        this.setState({ imageLoaded: true });
                      }}
                    />
                  )}
                </Transition>
                <Typography variant="headline" component="h2">
                  {name}
                </Typography>
              </div>
            )}

            {flipped && <Typography component="p">{description}</Typography>}
          </CardContent>
        </ButtonBase>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AuraCard);
