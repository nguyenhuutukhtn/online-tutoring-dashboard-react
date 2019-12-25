import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TvIcon from '@material-ui/icons/Tv';
import PersonIcon from '@material-ui/icons/Person';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import GroupIcon from '@material-ui/icons/Group';
import HorizontalNavBar from './components/navbar/HorizontalNavBar';
import Dashboard from './components/dashboard/dashboard';
import { PrivateRoute } from './components/privateRoute/PrivateRoute';
import alertActions from './actions/alert.action';
import history from './helpers/history';
import './App.css';
import './components/navbar/navbar.css';
import ListUser from './components/users/ListUser';
import ListSkill from './components/skills/ListSkill';
import ListContracts from './components/contract/ListContracts';
import ContractDetail from './components/contract/ContractDetail';
import ListComplain from './components/complain/ListComplain';
import ComplainDetail from './components/complain/ComplainDetail';
import CustomAlert from './customs/CustomAlert';

const drawerWidth = 240;

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen(() => {
      window.location.reload();
    });
    this.clearAlert = this.clearAlert.bind(this);
  }

  clearAlert() {
    const { clearAlert } = this.props;
    clearAlert('clear');
  }

  render() {
    const { alert } = this.props;

    return (
      <div className="App">
        {alert && (
          <CustomAlert
            open={alert.open}
            variant={alert.type}
            message={alert.message ? alert.message : ' '}
            onClose={this.clearAlert}
          />
        )}
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
              <ListItem button component="a" href="/">
                <ListItemIcon>
                  <TvIcon style={{ color: '#1D4575' }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button className="mt-2" component="a" href="/users">
                <ListItemIcon>
                  <PersonIcon style={{ color: '#FFD600' }} />
                </ListItemIcon>
                <ListItemText primary="Tài khoản" />
              </ListItem>
              <ListItem button className="mt-2" component="a" href="/skills">
                <ListItemIcon>
                  <CardMembershipIcon style={{ color: '#FB6340' }} />
                </ListItemIcon>
                <ListItemText primary="Kĩ năng" />
              </ListItem>
              <ListItem button className="mt-2" component="a" href="/contracts">
                <ListItemIcon>
                  <AssignmentTurnedInIcon style={{ color: '#11CDEF' }} />
                </ListItemIcon>
                <ListItemText primary="Hợp đồng" />
              </ListItem>
              <ListItem button className="mt-2" component="a" href="/complains">
                <ListItemIcon>
                  <GroupIcon style={{ color: '#F3A4B5' }} />
                </ListItemIcon>
                <ListItemText primary="Khiếu nại" />
              </ListItem>
            </List>
          </Drawer>
          <main
            style={{
              flexGrow: 1,
              // backgroundColor: theme.palette.background.default,
              paddingBottom: '24px',
              paddingTop: '86px'
            }}
          >
            <Router history={history}>
              <div className="main-route-place">
                <Switch>
                  <Route path="/users" component={ListUser} />

                  <Route path="/skills" component={ListSkill} />
                  <Route path="/contracts" component={ListContracts} />
                  <Route path="/contract-detail" component={ContractDetail} />
                  <Route path="/complains" component={ListComplain} />
                  <Route path="/complain-detail" component={ComplainDetail} />
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

const actionCreators = dispatch => ({
  clearAlert: message => {
    dispatch(alertActions.clear(message));
  }
});

const connectedApp = connect(mapState, actionCreators)(App);

export default connectedApp;
