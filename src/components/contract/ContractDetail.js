import React, { Component } from 'react';
import moment from 'moment';

import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Typography,
  IconButton
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import history from '../../helpers/history';
import userActions from '../../actions/user.action';

import './contracts.css';

class ContractDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policy: null
    };
  }

  componentDidMount = () => {
    const { location, getPolicyDetail } = this.props;
    const id = location.search.split('=')[1];
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    getPolicyDetail(id, token, res => {
      this.setState({
        policy: res.data
      });
    });
  };

  renderStatus = status => {
    let result;
    switch (status) {
      case 'new':
        result = <Badge variant="primary">Mới</Badge>;
        break;
      case 'approve':
        result = <Badge variant="info ">Đã chấp nhận</Badge>;
        break;
      case 'complete':
        result = <Badge variant="success  ">Đã hoàn thành</Badge>;
        break;
      case 'cancel':
        result = <Badge variant="danger  ">Đã huỷ</Badge>;
        break;
      default:
        break;
    }
    return result;
  };

  renderPaymentStatus = status => {
    let result;
    switch (status) {
      case 'yes':
        result = <Badge variant="success">Đã thanh toán</Badge>;
        break;
      case 'no':
        result = <Badge variant="danger ">Chưa thanh toán</Badge>;
        break;
      default:
        break;
    }
    return result;
  };

  handleBackClick = () => {
    history.push('/contracts');
  };

  render() {
    const { policy } = this.state;
    if (policy) {
      return (
        <div>
          <Container className="pb-5">
            <Row>
              <Col className="noPadding mt-2">
                <div>
                  <IconButton
                    disableRipple
                    disableFocusRipple
                    className="float-left mt-0"
                    style={{ backgroundColor: 'transparent' }}
                    onClick={() => this.handleBackClick()}
                  >
                    <ArrowBackIosIcon
                      style={{ color: '#1D4575' }}
                      className="d-inline mt-1"
                    />
                  </IconButton>
                  <Typography
                    color="primary"
                    className="text-left float-left mt-3"
                  >
                    Quay về trang quản lý
                  </Typography>
                </div>
              </Col>
            </Row>
            <Row className="noMargin noPadding">
              <Col className="noMargin noPadding">
                <Typography
                  color="primary"
                  variant="h4"
                  className="mt-4 text-left"
                  style={{ color: '#495057' }}
                >
                  Chi tiết hợp đồng
                </Typography>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col sm={8} className="noMargin noPadding">
                <Card className="h-100">
                  <Card.Body>
                    <Container>
                      <Row>
                        <Col md="4">
                          <div className="text-left title-field">Ngày tạo:</div>
                        </Col>
                        <Col md="8">
                          <div className="text-left content-detail">
                            {policy
                              ? moment(policy.register_date).format(
                                  'DD-MM-YYYY HH:mm:ss'
                                )
                              : null}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4">
                          <div className="text-left title-field mt-3">
                            Số giờ:
                          </div>
                        </Col>
                        <Col md="8">
                          <div className="text-left content-detail mt-3">
                            {policy ? policy.hours_hire : 0} giờ
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4">
                          <div className="text-left title-field mt-3">
                            Giá thuê:
                          </div>
                        </Col>
                        <Col md="8">
                          <div className="text-left content-detail mt-3">
                            {policy ? policy.price : 0}K VNĐ
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4">
                          <div className="text-left title-field mt-3">
                            Trạng thái:
                          </div>
                        </Col>
                        <Col md="8">
                          <div className="text-left content-detail mt-3">
                            {policy ? this.renderStatus(policy.status) : null}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4">
                          <div className="text-left title-field mt-3">
                            Thanh toán:
                          </div>
                        </Col>
                        <Col md="8">
                          <div className="text-left content-detail mt-3">
                            {policy
                              ? this.renderPaymentStatus(policy.payment_status)
                              : null}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card>
                  <Card.Header>
                    <h5 className="mb-0">Thông tin các bên</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-left ml-3">Gia sư</div>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          alt="tutor"
                          src={
                            policy
                              ? policy.tutor_avatar
                              : 'https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg'
                          }
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <div className="party-name">
                            {policy ? policy.tutor_name : null}
                          </div>
                        }
                        secondary={policy ? policy.tutor_address : null}
                      />
                    </ListItem>
                    <Divider
                      variant="middle"
                      component="li"
                      className="d-block"
                    />
                    <div className="text-left ml-3 mt-3">Học sinh</div>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          alt="tutor"
                          src={
                            policy
                              ? policy.student_avatar
                              : 'https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg'
                          }
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <div className="party-name">
                            {' '}
                            {policy ? policy.student_name : null}
                          </div>
                        }
                        secondary={policy ? policy.student_address : null}
                      />
                    </ListItem>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    return null;
  }
}

const mapDispatchToProps = {
  getPolicyDetail: userActions.requestPolicyDetail
};

export default connect(null, mapDispatchToProps)(ContractDetail);
