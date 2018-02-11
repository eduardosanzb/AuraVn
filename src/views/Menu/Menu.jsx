import React from 'react';

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer/Drawer';

import ArrowDownwardIcon from 'material-ui-icons/ArrowDownward';

import Divider from 'material-ui/Divider';
import List from 'material-ui/List';

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
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    height: '50%',
    width: '100%'
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
  },
  image: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '80%'
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
        selectionReady={this.props.selections[itemProps.storeValue]}
        drawerOpened={this.state.open}
        closeDrawer={this.handleDrawerClose}
      />
    ));

  render() {
    const { classes, location } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          anchor='bottom'
          open={open}>
          <div className={classes.drawerInner}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                <ArrowDownwardIcon />
              </IconButton>
            </div>
            <Divider />

            <List>{this.menuRoutes()}</List>
          </div>
        </Drawer>
        <div className={classNames(classes.content)}>{this.props.children}</div>
        <div className={classNames(classes.footer)}>
          <FooterWithSteps location={location} onClick={this.handleDrawerOpen} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Menu);
