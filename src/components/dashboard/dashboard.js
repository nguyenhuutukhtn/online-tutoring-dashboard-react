import React from "react";
import { connect } from "react-redux";
import userActions from "../../actions/user.action";
import { Container, Row, Col } from "react-bootstrap";
import "./dashboard.css";
import IncomeStatistic from "../statistics/IncomStatistic";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.logout();

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="8">
              <IncomeStatistic />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.login;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login
  // logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(Dashboard);

export default connectedLoginPage;
