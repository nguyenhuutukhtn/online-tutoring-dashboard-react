import React from 'react';
import { Line } from 'react-chartjs-2';
import { Container, Row, Col, Card, ButtonToolbar } from 'react-bootstrap';
import { Button, ButtonGroup } from '@material-ui/core';

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const elements = 27;
const data1 = [];

for (let i = 0; i <= elements; i += 1) {
  data1.push(random(50, 200));
}

const mainChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        barPercentage: 1,
        gridLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

class IncomeStatistic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      monthChart: {
        labels: [
          'Tháng 1',
          'Tháng 2',
          'Tháng 3',
          'Tháng 4',
          'Tháng 5',
          'Tháng 6',
          'Tháng 7',
          'Tháng 8',
          'Tháng 9',
          'Tháng 10',
          'Tháng 11',
          'Tháng 12'
        ],
        datasets: [
          {
            label: 'Doanh thu',
            backgroundColor: '#EFF9FC',
            borderColor: 'info',
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: data1
          }
        ]
      }
    };
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected
    });
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  toggle() {
    const { dropdownOpen } = this.state;
    this.setState({
      dropdownOpen: !dropdownOpen
    });
  }

  render() {
    const { monthChart, radioSelected } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title className="mb-0 ml-0 text-left">
                      <h5>Biểu đồ doanh thu</h5>
                    </Card.Title>
                  </Col>
                  <Col sm="8" className="d-none d-sm-inline-block">
                    <ButtonToolbar
                      className="float-right"
                      aria-label="Toolbar with button groups"
                    >
                      <ButtonGroup
                        color="primary"
                        aria-label="outlined primary button group"
                      >
                        <Button
                          onClick={() => this.onRadioBtnClick(1)}
                          color="primary"
                          style={
                            radioSelected === 1
                              ? { background: '#ECECEC' }
                              : null
                          }
                        >
                          Day
                        </Button>
                        <Button
                          onClick={() => this.onRadioBtnClick(2)}
                          style={
                            radioSelected === 2
                              ? { background: '#ECECEC' }
                              : null
                          }
                        >
                          Month
                        </Button>
                        <Button
                          onClick={() => this.onRadioBtnClick(3)}
                          style={
                            radioSelected === 3
                              ? { background: '#ECECEC' }
                              : null
                          }
                        >
                          Year
                        </Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div
                  className="chart-wrapper"
                  style={{ height: '400px', marginTop: '40px' }}
                >
                  <Line
                    data={monthChart}
                    options={mainChartOpts}
                    height={400}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default IncomeStatistic;
