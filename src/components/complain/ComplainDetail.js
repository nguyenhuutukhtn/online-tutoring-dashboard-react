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
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import MessageFrame from './MessageFrame';
import './complain.css';

class ComplainDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Row>
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
                      <div className="text-left content-detail">11/11/2011</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <div className="text-left title-field mt-3">Số giờ:</div>
                    </Col>
                    <Col md="8">
                      <div className="text-left content-detail mt-3">
                        10 giờ
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
                        100000/giờ
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
                        <Badge variant="danger">Chưa thanh toán</Badge>
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
                            <Avatar
                              alt="tutor"
                              src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg"
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <div className="party-name">Nguyễn Hữu Tú</div>
                            }
                            secondary="Xô Viết Nghệ Tĩnh-Bình Thạnh"
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
                            <Avatar
                              alt="tutor"
                              src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/36304048_1026569650827217_7308953294523596800_o_ihegp9.jpg"
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <div className="party-name">Nguyễn Ngô Tín</div>
                            }
                            secondary="Xô Viết Nghệ Tĩnh-Bình Thạnh"
                          />
                        </ListItem>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <div className="text-left title-field mt-3">
                        Nội dung:
                      </div>
                    </Col>
                    <Col md="8">
                      <div className="text-left content-detail mt-3">
                        Gia sư không dạy đủ số giờ thuê trong hợp đồng
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
                          onClick={() => this.handleCompleteClick()}
                        >
                          Giải quyết
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
          <Col md="4">
            <div className="chat-frame">
              <MessageFrame />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ComplainDetail;
