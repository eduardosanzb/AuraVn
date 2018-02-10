import React from 'react';

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer/Drawer';

import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import MenuIcon from 'material-ui-icons/Menu';

import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import grey from 'material-ui/colors/grey';

import config from '../../config';
import LinkAndClose from './../../components/LinkAndClose';
import FooterWithSteps from './../Layout/Footer';

const drawerWidth = 240;


const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
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
    position: 'fixed',
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
    padding: '0 20px',
    ...theme.mixins.toolbar
  },
  content: {
    width: '100%',
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: 'calc(100% - 90px)',
    marginTop: 40,
    marginBottom: 50
  },
  footer: {
    width: '100%',
    flexGrow: 1,
    position: 'fixed',
    bottom: 0
  }
});

class Menu extends React.PureComponent {
  state = {
    open: false
  };

  headerName() {
    const { location: { pathname } } = this.props;
    return config.locationMatchStep[pathname].text;
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  menuRoutes = () =>
    config.views.map(itemProps => (
      <LinkAndClose
        key={`item${itemProps.to}`}
        {...itemProps}
        drawerOpened={this.state.open}
        closeDrawer={this.handleDrawerClose}
      />
    ));

  render() {
    const { classes, location } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <AppBar
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
            [classes[`appBarShift-left`]]: open
          })}>
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              {this.headerName()}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          anchor={'left'}
          open={open}>
          <div className={classes.drawerInner}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />

            <List>{this.menuRoutes()}</List>
          </div>
        </Drawer>
        <div className={classNames(classes.content)}>{this.props.children}</div>
        <div className={classNames(classes.footer)}>
          <FooterWithSteps location={location} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Menu);