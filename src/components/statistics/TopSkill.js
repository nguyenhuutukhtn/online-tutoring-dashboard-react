import React from 'react';
import { Card, Row, Table, Container, Col, ProgressBar } from 'react-bootstrap';
import { connect } from 'react-redux';
import './statistic.css';
// import userActions from '../../actions/user.action';

class TopSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // verifies if routeName is the one active (in browser input)

  render() {
    const { profit } = this.props;
    return (
      <Container className="container-top-skill">
        {profit ? (
          <Row>
            <Col>
              <Card className="shadow">
                <Card.Header className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Top kĩ năng</h3>
                    </div>
                  </Row>
                </Card.Header>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Tên</th>
                      <th scope="col">Doanh thu</th>
                      <th scope="col">Số hợp đồng</th>
                      <th scope="col">Tỉ lệ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Luyện thi khối A</th>
                      <td>7800K</td>
                      <td>12</td>
                      <td>
                        <ProgressBar
                          max="100"
                          now="60"
                          className="progress-sm"
                          label="60%"
                          variant="danger"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Luyện thi khối B</th>
                      <td>6500K</td>
                      <td>10</td>
                      <td>
                        <ProgressBar
                          max="100"
                          now="90"
                          className="progress-sm"
                          label="90%"
                          variant="success"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Luyện thi khối C</th>
                      <td>5500K</td>
                      <td>9</td>
                      <td>
                        <ProgressBar
                          max="100"
                          now="30"
                          className="progress-sm"
                          label="30%"
                          variant="warning"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Luyện thi khối D</th>
                      <td>4000K</td>
                      <td>9</td>
                      <td>
                        <ProgressBar
                          max="100"
                          now="74"
                          className="progress-sm"
                          label="74%"
                          variant="info"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Luyện thi khối A</th>
                      <td>3200K</td>
                      <td>7</td>
                      <td>
                        <div>
                          <span className="mr-2">40%</span>
                          <div>
                            {/* <Progress
                            max="100"
                            value="40"
                            barClassName="bg-gradient-warning"
                          /> */}
                            <ProgressBar
                              variant="determinate"
                              className="progress-sm"
                              now="40"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
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
  const { profit } = state.users;
  return { profit };
}

const actionCreators = {};

const connectedTopSkillPage = connect(mapState, actionCreators)(TopSkill);

export default connectedTopSkillPage;
