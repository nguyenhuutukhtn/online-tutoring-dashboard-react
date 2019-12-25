import React from 'react';
import { Line } from 'react-chartjs-2';
import { Container, Row, Col, Card, ButtonToolbar } from 'react-bootstrap';
import { Button, ButtonGroup } from '@material-ui/core';

import { connect } from 'react-redux';
import userActions from '../../actions/user.action';

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
      },
      dayChart: {
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
          '25',
          '26',
          '27',
          '28',
          '29',
          '30',
          '31'
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
      },
      yearChart: {
        labels: [
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
          '2020',
          '2021'
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

  componentDidMount() {
    const { getProfit, getTopProfitByTutor } = this.props;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));

    getProfit(token);
    getTopProfitByTutor(token);
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
    const { monthChart, radioSelected, dayChart, yearChart } = this.state;
    const { profit } = this.props;
    if (!profit) {
      return '';
    }
    monthChart.datasets[0].data = profit.totalByMonth;
    let currentChart = '';
    if (radioSelected === 2) {
      monthChart.datasets[0].data = profit.totalByMonth;
      currentChart = monthChart;
    }
    if (radioSelected === 1) {
      dayChart.datasets[0].data = profit.totalByDay;
      currentChart = dayChart;
    }
    if (radioSelected === 3) {
      yearChart.datasets[0].data = profit.totalByYear;
      currentChart = yearChart;
    }
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
                    data={currentChart}
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

function mapState(state) {
  const { loggingIn } = state.login;
  const { profit, profitByTutor } = state.users;
  return { loggingIn, profit, profitByTutor };
}

const actionCreators = {
  login: userActions.login,
  // logout: userActions.logout
  getProfit: userActions.getProfit,
  getTopProfitByTutor: userActions.getTopProfitByTutor
};

const connectedComplainDetailPage = connect(
  mapState,
  actionCreators
)(IncomeStatistic);

export default connectedComplainDetailPage;
