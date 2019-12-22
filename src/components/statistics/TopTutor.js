import React from 'react';
import { Card, Row, Table, Media, Container, Col } from 'react-bootstrap';
import './statistic.css';

class TopTutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // verifies if routeName is the one active (in browser input)

  render() {
    return (
      <Container>
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
                <tbody>
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
                            src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576583327/Tutor/default-avatar_iyzn7y.png"
                            className="rounded-circle"
                            style={{
                              height: '48px',
                              width: '48px'
                            }}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Nguyễn Hữu Tú</span>
                        </Media>
                      </Media>
                    </th>
                    <td>100 triệu</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{' '}
                      46,53%
                    </td>
                  </tr>
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
                            src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576583327/Tutor/default-avatar_iyzn7y.png"
                            className="rounded-circle"
                            style={{
                              height: '48px',
                              width: '48px'
                            }}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Nguyễn Ngô Tín</span>
                        </Media>
                      </Media>
                    </th>
                    <td>100 triệu</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>
                  </tr>
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
                            src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576583327/Tutor/default-avatar_iyzn7y.png"
                            className="rounded-circle"
                            style={{
                              height: '48px',
                              width: '48px'
                            }}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Nguyễn Hữu Tú</span>
                        </Media>
                      </Media>
                    </th>
                    <td>100 triệu</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{' '}
                      46,53%
                    </td>
                  </tr>
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
                            src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576583327/Tutor/default-avatar_iyzn7y.png"
                            className="rounded-circle"
                            style={{
                              height: '48px',
                              width: '48px'
                            }}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Nguyễn Hữu Tú</span>
                        </Media>
                      </Media>
                    </th>
                    <td>100 triệu</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{' '}
                      46,53%
                    </td>
                  </tr>
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
                            src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576583327/Tutor/default-avatar_iyzn7y.png"
                            className="rounded-circle"
                            style={{
                              height: '48px',
                              width: '48px'
                            }}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Nguyễn Hữu Tú</span>
                        </Media>
                      </Media>
                    </th>
                    <td>100 triệu</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{' '}
                      46,53%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TopTutor;
