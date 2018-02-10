import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import HomeIcon from 'material-ui-icons/Home';
import CheckCircle from 'material-ui-icons/CheckCircle';
import ResultsIcon from 'material-ui-icons/DoneAll';
import Dress1Icon from 'material-ui-icons/Favorite';
import Dress2Icon from 'material-ui-icons/Favorite';
import FaceIcon from 'material-ui-icons/DoneAll';
import HairIcon from 'material-ui-icons/Face';
import Favorite from 'material-ui-icons/Favorite';

const getIcon = to => {
  switch (to) {
    case '/':
      return <HomeIcon />;

    case '/dress-type':
      return <Dress1Icon />;

    case '/dress-finish':
      return <Dress2Icon />;

    case '/face':
      return <FaceIcon />;

    case '/hair':
      return <HairIcon />;

    case '/results':
      return <ResultsIcon />;

    default:
      return <Favorite />;
  }
};

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: 360
  },
  noDecoration: {
    textDecoration: 'none'
  }
});

const LinkAndClose = ({
  drawerOpened,
  to,
  text,
  selectionReady,
  classes: { root, noDecoration },
  closeDrawer,
  icon
}) => (
  <ListItem
    className={root}
    button
    onClick={() => (drawerOpened ? closeDrawer(text) : null)}>
    <ListItemIcon>{getIcon(to)}</ListItemIcon>
    <Link to={to} className={noDecoration}>
      <ListItemText primary={text} />
    </Link>
    {selectionReady && <CheckCircle color="primary" fontSize />}
    <Divider />
  </ListItem>
);

export default withStyles(styles)(LinkAndClose);
