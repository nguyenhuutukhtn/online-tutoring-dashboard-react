/* eslint-disable no-undef */
import React from 'react';
import {
  Card,
  Row,
  Table,
  Media,
  Container,
  Col,
  Badge,
  Button
} from 'react-bootstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {
  Dialog,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  DialogContent
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import DoneIcon from '@material-ui/icons/Done';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CancelIcon from '@material-ui/icons/Cancel';

import { connect } from 'react-redux';
import userActions from '../../actions/user.action';
import history from '../../helpers/history';
import './users.css';
import constantApi from '../../apis/constants.api';

class ListUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDetailDialog: false,
      userIdDetail: ''
    };
  }

  componentDidMount() {
    const { listAllUser } = this.props;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    const searchParams = new URLSearchParams(window.location.search);
    let currentPage = parseInt(searchParams.get('page'), 10);
    if (!currentPage) {
      currentPage = 1;
    }
    listAllUser(currentPage, token);
  }

  handleDetailClick = userId => {
    this.setState({ openDetailDialog: true, userIdDetail: userId });
  };

  handleCloseDialogClick = () => {
    this.setState({ openDetailDialog: false });
  };

  handleClickBlock = (userId, action) => {
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    const actionApi = action === 'block' ? 'lockUser' : 'unlockUser';
    return fetch(
      `${constantApi.url}/admin/${actionApi}?id=${userId}`,
      requestOptions
    ).then(() => {
      window.location.reload(false);
    });
  };

  renderListUser = () => {
    const { listUser } = this.props;
    if (!listUser) {
      return '';
    }
    return listUser.data.map(user => {
      return (
        <tr key={user.id}>
          <td>
            <strong className="mb-0 text-sm">{user.email}</strong>
          </td>
          <th scope="row">
            <Media className="align-items-center">
              <a
                className="avatar rounded-circle mr-3"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <img alt="avatar" src={user.avatar} />
              </a>
              <Media>
                <span className="mb-0 text-sm">{user.name}</span>
              </Media>
            </Media>
          </th>

          <td>{user.role}</td>

          <td>
            <Badge pill variant={user.active === 'yes' ? 'success' : 'danger'}>
              {user.active === 'yes' ? 'active' : 'inactive'}
            </Badge>
          </td>
          <td>{user.balance}</td>
          <td className="text-right">
            <Button
              variant="info"
              className="table-button float-left"
              onClick={() => this.handleDetailClick(user.id)}
            >
              Detail
            </Button>
            <Button
              variant="danger"
              className="table-button float-left"
              onClick={
                user.active === 'yes'
                  ? () => this.handleClickBlock(user.id, 'block')
                  : () => this.handleClickBlock(user.id, 'unblock')
              }
            >
              {user.active === 'yes' ? 'Block' : 'UnBlock'}
            </Button>
          </td>
        </tr>
      );
    });
  };

  handlePageCLick = (e, page) => {
    e.preventDefault();
    history.push(`/users?page=${page}`);
  };

  renderPaging = () => {
    const { listUser } = this.props;
    if (!listUser) {
      return '';
    }
    const { totalPage } = listUser;
    const arr = Array(totalPage).fill(1);
    const searchParams = new URLSearchParams(window.location.search);
    let currentPage = parseInt(searchParams.get('page'), 10);
    console.log('currentPage-------', currentPage);
    if (!currentPage) {
      currentPage = 1;
    }
    return arr.map((element, index) => {
      return (
        <PaginationItem className={currentPage === index + 1 ? 'active' : ''}>
          <PaginationLink
            onClick={e => this.handlePageCLick(e, index + 1)}
            className="border"
          >
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      );
    });
  };

  renderDialog = () => {
    const { openDetailDialog, userIdDetail } = this.state;
    const { listUser } = this.props;
    if (!listUser) {
      return '';
    }
    let userDetail = '';
    listUser.data.forEach(elem => {
      if (elem.id === userIdDetail) {
        userDetail = elem;
      }
    });
    console.log('userDetail----------', userDetail);
    return (
      <Dialog open={openDetailDialog}>
        <DialogContent className="dialog-content">
          <Container className="user-info-container">
            <Row>
              <Col md="5" className="general-user-info ">
                <img
                  style={{
                    height: '110px',
                    width: '110px',
                    borderRadius: '20px'
                  }}
                  className="mt-4 mx-auto text-center detail-avatarcenter-block d-flex align-items-center justify-content-center"
                  alt="avatar"
                  src={`${userDetail.avatar}`}
                />

                <List>
                  <ListItem>
                    <ListItemIcon>
                      <InfoIcon style={{ color: '#58BAD7' }} />
                    </ListItemIcon>
                    <ListItemText primary={`${userDetail.role}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <DoneIcon style={{ color: '#5CD4A2' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        userDetail.active === 'yes' ? 'Active' : 'InActive'
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AccountBalanceWalletIcon style={{ color: '#E9A84C' }} />
                    </ListItemIcon>
                    <ListItemText primary={`${userDetail.balance}VND`} />
                  </ListItem>
                </List>
              </Col>

              <Col md="7" className="pb-4">
                <div>
                  <IconButton
                    className="float-right close-button"
                    style={{
                      color: '#E8EAED',
                      background: '#ffffff'
                    }}
                    onClick={() => this.handleCloseDialogClick()}
                  >
                    <CancelIcon className="close-icon" />
                  </IconButton>
                </div>

                <Typography
                  variant="h5"
                  className="mt-3 ml-3 mr-3 d-flex align-items-center justify-content-center"
                >
                  Account detail
                </Typography>
                <div>
                  <div className="mt-3">
                    <div className=" detail-title ml-3 text-left">Name: </div>
                    <div className=" detail-content ml-3 mr-5">
                      {userDetail.name}
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className=" detail-title ml-3">Email: </div>
                    <div className=" detail-content ml-3 mr-5">
                      {userDetail.email}
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className=" detail-title ml-3">Address: </div>
                    <div className=" detail-content ml-3 mr-5">
                      {userDetail.address}
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className=" detail-title ml-3">Price: </div>
                    <div className=" detail-content ml-3 mr-5">
                      {userDetail.price_per_hour}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </DialogContent>
      </Dialog>
    );
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Card className="mt-2">
                <Card.Header className="border-0">
                  <h4 className="mb-0">Account</h4>
                </Card.Header>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" className="table-title">
                        Email
                      </th>

                      <th scope="col" className="table-title">
                        Username
                      </th>
                      <th scope="col" className="table-title">
                        Role
                      </th>
                      <th scope="col" className="table-title">
                        Status
                      </th>
                      <th scope="col" className="table-title">
                        Balance
                      </th>

                      <th scope="col"> </th>
                    </tr>
                  </thead>
                  <tbody>{this.renderListUser()}</tbody>
                </Table>
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-start ml-4"
                    listClassName="justify-content-start ml-4"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        tabIndex="-1"
                        className="border"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    {this.renderPaging()}
                    <PaginationItem>
                      <PaginationLink
                        className="border"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </Card>
            </Col>
          </Row>
        </Container>
        {this.renderDialog()}
      </div>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.login;
  const { listUser } = state.users;
  return { loggingIn, listUser };
}

const actionCreators = {
  login: userActions.login,
  // logout: userActions.logout
  listAllUser: userActions.listAllUser
};

const connectedListUserPage = connect(mapState, actionCreators)(ListUser);

export default connectedListUserPage;
