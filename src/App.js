import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';
import { MDBAlert } from 'mdbreact';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TvIcon from '@material-ui/icons/Tv';
import HorizontalNavBar from './components/navbar/HorizontalNavBar';
import Dashboard from './components/dashboard/dashboard';
import { PrivateRoute } from './components/privateRoute/PrivateRoute';
import alertActions from './actions/alert.action';
import history from './helpers/history';
import Login from './components/login/Login';
import './App.css';
import './components/navbar/navbar.css';

const drawerWidth = 240;

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen(() => {
      window.location.reload();
    });
  }

  render() {
    const { alert } = this.props;

    return (
      <div className="App">
        <div style={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            style={{
              width: `calc(100% - ${drawerWidth}px)`,
              marginLeft: drawerWidth
            }}
          >
            <HorizontalNavBar />
          </AppBar>
          <Drawer
            style={{
              width: drawerWidth,
              flexShrink: 0
            }}
            variant="permanent"
            anchor="left"
          >
            <img
              alt="logo"
              src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576945232/Tutor/20160816-Smarter-tutoring-logo-for-WordPress-banner_navy-blue-01-2-705x323_izss7b.png"
              style={{ width: '150px' }}
              className="mx-auto mt-4"
            />

            <List className="mt-5">
              <ListItem button selected>
                <ListItemIcon>
                  <TvIcon style={{ color: '#1D4575' }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </List>
          </Drawer>
          <main
            style={{
              flexGrow: 1,
              // backgroundColor: theme.palette.background.default,
              paddingRight: '24px',
              paddingBottom: '24px',
              paddingTop: '86px'
            }}
          >
            <Router history={history}>
              {alert.message && (
                <MDBAlert className={`alert text-center ${alert.type}`}>
                  {alert.message}
                </MDBAlert>
              )}
              <div className="main-route-place">
                <Switch>
                  <Route path="/login" component={Login} />
                  <PrivateRoute path="/" component={Dashboard} />

                  <Redirect from="*" to="/" />
                </Switch>
              </div>
            </Router>
          </main>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);

export default connectedApp;
