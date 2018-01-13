import React from 'react';

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer/Drawer';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import Divider from 'material-ui/Divider';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import LinkAndClose from './../../components/LinkAndClose';

import grey from 'material-ui/colors/grey';
const drawerWidth = 240;

const ROUTE_CONFIGURATION = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/dress-type',
    text: 'Dress 1'
  },
  {
    to: '/dress-finish',
    text: 'Dress 2'
  },
  {
    to: '/face',
    text: 'Type of Face'
  },
  {
    to: '/hair',
    text: 'Hair Style'
  },
  {
    to: '/results',
    text: 'Results'
  }
];

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  appBar: {
    position: 'absolute',
    backgroundColor: grey[900],
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'appBarShift-left': {
    marginLeft: drawerWidth
  },
  'appBarShift-right': {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    width: '100%',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('md')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64
      }
    }
  },
  
 
});


class Menu extends React.PureComponent {
  state = {
    open: false
  };

  getHeaderNameFromLocation = ({ pathname }) =>
    ROUTE_CONFIGURATION.find(({ to }) => pathname === to).text;

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = (currentRouteName = '') => {
    this.setState({ open: false });
  };

  menuRoutes = () =>
    ROUTE_CONFIGURATION.map(itemProps => (
      <LinkAndClose
        key={`item${itemProps.to}`}
        {...itemProps}
        drawerOpened={this.state.open}
        closeDrawer={this.handleDrawerClose}
      />
    ));

  render() {
    const { classes, theme, location, content } = this.props;
    const { open, currentRouteName } = this.state;

    return (
      <div className={classes.root}>
        <AppBar
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
            [classes[`appBarShift-left`]]: open
          })}>
          <Toolbar disableGutters={!open}>
            <IconButton
              color="contrast"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" noWrap>
              {this.getHeaderNameFromLocation(location)}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          // type="persistent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor={'left'}
          open={open}>
          <div className={classes.drawerInner}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />

            <List>{this.menuRoutes()}</List>
          </div>
        </Drawer>
        <div
          className={classNames(classes.content)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Menu);
