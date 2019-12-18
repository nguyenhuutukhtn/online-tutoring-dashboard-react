import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from "react-router-dom";
import { MDBAlert } from "mdbreact";
import { connect } from "react-redux";
import "./App.css";
import Login from "./components/login/Login";
import history from "./helpers/history";
import alertActions from "./actions/alert.action";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import Footer from "./components/footer/Footer";
import Dashboard from "./components/dashboard/dashboard";
class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen(() => {
      // clear alert on location change
      const { clearAlerts } = this.props;
      clearAlerts();
      window.location.reload();
      // console.log('history change');
    });
  }

  render() {
    const { alert } = this.props;

    return (
      <div className="App">
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
          <Footer />
        </Router>
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
