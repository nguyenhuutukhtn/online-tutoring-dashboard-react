import React from 'react';
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

class GeneralStatistic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // verifies if routeName is the one active (in browser input)

  render() {
    return (
      <div className=" pt-0 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-uppercase text-muted mb-0"
                        >
                          Gia sư
                        </CardTitle>
                        <span className="h4 font-weight-bold mb-0">6969</span>
                      </div>
                      <Col className="col-auto">
                        {/* <div className="bg-danger text-white rounded-circle border border-dark">
                          <i className="fas fa-chart-bar" />
                        </div> */}
                        <span className="fa-stack fa-lg ">
                          <i className="fa fa-circle fa-stack-2x text-danger" />
                          <i className="fa fas fa-chart-bar fa-stack-1x fa-inverse" />
                        </span>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-uppercase text-muted mb-0"
                        >
                          Học sinh
                        </CardTitle>
                        <span className="h4 font-weight-bold mb-0">
                          1 triệu
                        </span>
                      </div>
                      <Col className="col-auto">
                        {/* <div className="bg-danger text-white rounded-circle border border-dark">
                          <i className="fas fa-chart-bar" />
                        </div> */}
                        <span className="fa-stack fa-lg ">
                          <i className="fa fa-circle fa-stack-2x text-warning" />
                          <i className="fa fas fa-users fa-stack-1x fa-inverse" />
                        </span>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-uppercase text-muted mb-0"
                        >
                          Hợp đồng
                        </CardTitle>
                        <span className="h4 font-weight-bold mb-0">1263</span>
                      </div>
                      <Col className="col-auto">
                        {/* <div className="bg-danger text-white rounded-circle border border-dark">
                          <i className="fas fa-chart-bar" />
                        </div> */}
                        <span className="fa-stack fa-lg ">
                          <i className="fa fa-circle fa-stack-2x text-success" />
                          <i className="fa fas fa-file-contract fa-stack-1x fa-inverse" />
                        </span>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-uppercase text-muted mb-0"
                        >
                          Doanh thu
                        </CardTitle>
                        <span className="h4 font-weight-bold mb-0">
                          1,5 tỉ{' '}
                        </span>
                      </div>
                      <Col className="col-auto">
                        {/* <div className="bg-danger text-white rounded-circle border border-dark">
                          <i className="fas fa-chart-bar" />
                        </div> */}
                        <span className="fa-stack fa-lg ">
                          <i className="fa fa-circle fa-stack-2x text-primary" />
                          <i className="fa fas fa-dollar-sign fa-stack-1x fa-inverse" />
                        </span>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default GeneralStatistic;
