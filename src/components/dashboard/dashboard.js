import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import userActions from '../../actions/user.action';
import './dashboard.css';
import IncomeStatistic from '../statistics/IncomStatistic';
import GeneralStatistic from './GeneralStatistic';

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
            <Col>
              <GeneralStatistic />
            </Col>
          </Row>
          <Row>
            <Col md="8" className="mt-4">
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
