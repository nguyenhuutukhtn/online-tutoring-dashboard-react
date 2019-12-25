import React from 'react';
import { Card, Row, Table, Media, Container, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import './statistic.css';
import userActions from '../../actions/user.action';

class TopTutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // verifies if routeName is the one active (in browser input)

  renderTopTutor = () => {
    const { profitByTutor } = this.props;
    if (!profitByTutor) {
      return '';
    }
    return profitByTutor.listTutor.map(tutor => {
      return (
        <tr>
          <th scope="row">
            <Media className="align-items-center">
              <a
                className="rounded-circle mr-3"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <img
                  alt="avatar"
                  src={tutor.avatar}
                  className="rounded-circle"
                  style={{
                    height: '48px',
                    width: '48px'
                  }}
                />
              </a>
              <Media>
                <span className="mb-0 text-sm">{tutor.name}</span>
              </Media>
            </Media>
          </th>
          <td>{tutor.total * 1000}K</td>
        </tr>
      );
    });
  };

  render() {
    const { profitByTutor } = this.props;
    return (
      <Container>
        {profitByTutor ? (
          <Row>
            <Col>
              <Card className="shadow">
                <Card.Header className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Top người dạy</h3>
                    </div>
                  </Row>
                </Card.Header>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Tên</th>
                      <th scope="col">Doanh thu</th>
                      <th scope="col"> </th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTopTutor()}</tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        ) : (
          ''
        )}
      </Container>
    );
  }
}

function mapState(state) {
  const { profit, profitByTutor } = state.users;
  return { profit, profitByTutor };
}

const actionCreators = {
  getTopProfitByTutor: userActions.getTopProfitByTutor
};

const connectedTopTutorPage = connect(mapState, actionCreators)(TopTutor);

export default connectedTopTutorPage;
