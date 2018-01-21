import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/InfoOutline';
import FlippedIcon from 'material-ui-icons/HighlightOff';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  selected: {
    flexGrow: 1,
    outlineStyle: 'solid',
    outlineColor: theme.palette.primary.main,
    outlineWidth: 2,
  },
  cardActions: {
    float: 'right',
  },
  cardContent: {
    width: '100%',
    minHeight: 250,
  },
  media: {
    maxHeight: 250,
  },
});

class AuraCard extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  state = {
    flipped: false,
  };

  flipCard = () => {
    this.setState(({ flipped }) => ({ flipped: !flipped }));
  };
  render() {
    const { classes, name, description, image, selected, onClick } = this.props;
    const { flipped } = this.state;

    return (
      <Card className={selected ? classes.selected : classes.root}>
        <CardActions className={classes.cardActions} disableActionSpacing>
          <IconButton
            color={flipped ? 'accent' : 'primary'}
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
                <img
                  className={classes.media}
                  title={`image-for-${name}`}
                  src={image}
                />
                <Typography type="headline" component="h2">
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
