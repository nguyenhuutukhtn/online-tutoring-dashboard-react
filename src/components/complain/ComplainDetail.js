/* eslint-disable no-undef */
import React, { Component } from 'react';

import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

import {
  ButtonGroup,
  Button,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';
import { connect } from 'react-redux';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import moment from 'moment';
import './complain.css';
import userActions from '../../actions/user.action';
import constantApi from '../../apis/constants.api';

class ComplainDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    const currentComplain = parseInt(searchParams.get('id'), 10);
    const { getDetailComplain } = this.props;
    getDetailComplain(currentComplain, token);
    this.setState({
      id: currentComplain
    });
  }

  handleResolvedComplain = action => {
    const { id } = this.state;
    const { complainDetail } = this.props;
    const idPolicy = complainDetail.data[0].policyData[0].id;
    const idStudent = complainDetail.data[0].policyData[0].id_student;
    const idTutor = complainDetail.data[0].policyData[0].id_teacher;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        id,
        newStatus: 'solved',
        action,
        idPolicy,
        idStudent,
        idTutor
      })
    };
    return fetch(`${constantApi.url}/admin/solveComplain`, requestOptions).then(
      () => {
        window.location.reload(false);
      }
    );
  };

  renderDetail = () => {
    const { complainDetail } = this.props;
    if (!complainDetail) {
      return '';
    }
    const detail = complainDetail.data[0];
    const policyData = detail.policyData[0];
    const resgisterDay = moment(policyData.register_date).format('DD/MM/YYYY');

    return (
      <Col md="8">
        <Card>
          <Card.Title>
            <h4 className="mt-4">Thông tin chi tiết</h4>
          </Card.Title>
          <Card.Body>
            <Container>
              <Row>
                <Col md="4">
                  <div className="text-left title-field">Ngày tạo:</div>
                </Col>
                <Col md="8">
                  <div className="text-left content-detail">{resgisterDay}</div>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <div className="text-left title-field mt-3">Số giờ:</div>
                </Col>
                <Col md="8">
                  <div className="text-left content-detail mt-3">
                    {policyData.hours_hire} giờ
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <div className="text-left title-field mt-3">Giá thuê:</div>
                </Col>
                <Col md="8">
                  <div className="text-left content-detail mt-3">
                    {policyData.price}K
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <div className="text-left title-field mt-3">Trạng thái:</div>
                </Col>
                <Col md="8">
                  <div className="text-left content-detail mt-3">
                    <Badge
                      variant={
                        policyData.payment_status === 'yes'
                          ? 'success'
                          : 'danger'
                      }
                    >
                      {policyData.payment_status === 'yes'
                        ? 'Đã thanh toán'
                        : 'Chưa thanh toán'}
                    </Badge>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <div className="text-left title-field mt-4">Gia sư</div>
                </Col>
                <Col md="8">
                  <div className="text-left content-detail mt-2">
                    <ListItem className="ml-0 noPadding noMargin">
                      <ListItemAvatar>
                        <Avatar alt="tutor" src={policyData.tutor_avatar} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <div className="party-name">
                            {policyData.tutor_name}
                          </div>
                        }
                        secondary={policyData.tutor_address}
                      />
                    </ListItem>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <div className="text-left title-field mt-4">Học sinh</div>
                </Col>
                <Col md="8">
                  <div className="text-left content-detail mt-2">
                    <ListItem className="ml-0 noPadding noMargin">
                      <ListItemAvatar>
                        <Avatar alt="tutor" src={policyData.student_avatar} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <div className="party-name">
                            {policyData.student_name}
                          </div>
                        }
                        secondary={policyData.student_address}
                      />
                    </ListItem>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <div className="text-left title-field mt-3">Nội dung:</div>
                </Col>
                <Col md="8">
                  <div className="text-left content-detail mt-3">
                    {detail.content}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ButtonGroup className="mt-5">
                    <Button
                      style={{
                        color: '#4DA503',
                        background: null,
                        border: '1px solid #4DA503',
                        borderRadius: 6
                      }}
                      startIcon={<DoneIcon />}
                      onClick={() => this.handleResolvedComplain('complete')}
                      disabled={detail.status === 'solved'}
                    >
                      Hoàn Thành
                    </Button>
                    <Button
                      variant="outlined"
                      style={{
                        color: '#F70000',
                        background: null,
                        border: '1px solid #F70000',
                        borderRadius: 6
                      }}
                      startIcon={<CloseIcon />}
                      className="ml-5"
                      onClick={() => this.handleResolvedComplain('cancel')}
                      disabled={detail.status === 'solved'}
                    >
                      Hủy
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  renderMessage = () => {
    const { complainDetail } = this.props;
    if (!complainDetail) {
      return '';
    }
    const { allMessage } = complainDetail.data[0];
    const { policyData } = complainDetail.data[0];
    const idStudent = policyData[0].id_student;
    const style = {
      width: '30px',
      height: '30px'
    };
    return allMessage.map(message => {
      if (message.idSender === idStudent) {
        return (
          <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
              <img
                src={policyData[0].student_avatar}
                className="rounded-circle user_img_msg"
                alt="alt"
                style={style}
              />
            </div>
            <div className="msg_cotainer">{message.content}</div>
          </div>
        );
      }
      return (
        <div className="d-flex justify-content-end mb-4">
          <div className="msg_cotainer_send">{message.content}</div>
          <div className="img_cont_msg">
            <img
              src={policyData[0].tutor_avatar}
              alt="avatar"
              className="rounded-circle user_img_msg"
              style={style}
            />
          </div>
        </div>
      );
    });
  };

  render() {
    const { complainDetail } = this.props;
    return (
      <Container>
        <Row>
          {this.renderDetail()}
          {complainDetail ? (
            <Col md="4">
              <div className="chat-frame">
                <div className=" card card-chat">
                  <h4 className="mt-4 card-title">Tin nhắn </h4>
                  <div className="card-body msg_card_body">
                    {this.renderMessage()}
                  </div>
                </div>
              </div>
            </Col>
          ) : (
            ''
          )}
        </Row>
      </Container>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.login;
  const { listComplain, complainDetail } = state.users;
  return { loggingIn, listComplain, complainDetail };
}

const actionCreators = {
  getDetailComplain: userActions.getDetailComplain
};

const connectedComplainDetailPage = connect(
  mapState,
  actionCreators
)(ComplainDetail);

export default connectedComplainDetailPage;
