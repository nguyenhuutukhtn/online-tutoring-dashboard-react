/* eslint-disable no-undef */
import React from 'react';
import { Card, Row, Table, Container, Col, Button } from 'react-bootstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {
  Dialog,
  IconButton,
  DialogContent,
  Fab,
  DialogTitle,
  DialogContentText,
  TextField,
  DialogActions
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { connect } from 'react-redux';
import userActions from '../../actions/user.action';
import history from '../../helpers/history';
import constantApi from '../../apis/constants.api';

import './skills.css';

let valueSkill = '';
let valueAddSKill = '';

class ListSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddDialog: false,
      openEditDialog: false,
      skillId: '',
      openDeleteDialog: false
    };
  }

  componentDidMount() {
    const { listAllSkill } = this.props;
    const searchParams = new URLSearchParams(window.location.search);
    let currentPage = parseInt(searchParams.get('page'), 10);
    if (!currentPage) {
      currentPage = 1;
    }
    listAllSkill(currentPage);
  }

  handleAddClick = () => {
    this.setState({ openAddDialog: true });
  };

  handleEditClick = skillId => {
    this.setState({ openEditDialog: true, skillId });
  };

  handleDeleteClick = skillId => {
    this.setState({ openDeleteDialog: true, skillId });
  };

  handleCloseDialogClick = () => {
    this.setState({
      openAddDialog: false,
      openEditDialog: false,
      openDeleteDialog: false
    });
  };

  renderListSkill = () => {
    const { listSkill } = this.props;
    if (!listSkill) {
      return '';
    }
    return listSkill.data.map(skill => {
      return (
        <tr>
          <td>
            <strong className="mb-0 text-sm">{skill.name}</strong>
          </td>
          <td />
          <td />
          <td className="text-left">
            <IconButton onClick={() => this.handleEditClick(skill.id)}>
              <EditIcon style={{ color: '#115292' }} />
            </IconButton>
            <IconButton onClick={() => this.handleDeleteClick(skill.id)}>
              <DeleteIcon style={{ color: '#ed4337' }} />
            </IconButton>
          </td>
        </tr>
      );
    });
  };

  handlePageCLick = (e, page) => {
    e.preventDefault();
    history.push(`/skills?page=${page}`);
  };

  renderPaging = () => {
    const { listSkill } = this.props;
    if (!listSkill) {
      return '';
    }
    const { totalPage } = listSkill;
    const arr = Array(totalPage).fill(1);
    const searchParams = new URLSearchParams(window.location.search);
    let currentPage = parseInt(searchParams.get('page'), 10);
    if (!currentPage) {
      currentPage = 1;
    }
    return arr.map((elem, index) => {
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

  handleUpdateSkill = idSkill => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: idSkill, name: valueSkill })
    };
    this.setState({
      openEditDialog: false
    });
    return fetch(`${constantApi.url}/admin/updateTag`, requestOptions).then(
      () => {
        window.location.reload(false);
      }
    );
  };

  handleChangeField = e => {
    valueSkill = e.target.value;
  };

  renderEditDialog = () => {
    const { openEditDialog, skillId } = this.state;
    const { listSkill } = this.props;
    if (!listSkill) {
      return '';
    }
    let skillData = '';
    listSkill.data.forEach(elem => {
      if (elem.id === skillId) {
        skillData = elem;
      }
    });

    valueSkill = skillData.name;
    return (
      <Dialog fullWidth open={openEditDialog}>
        <DialogTitle id="form-dialog-title">Chỉnh sữa kĩ năng</DialogTitle>
        <DialogContent>
          <DialogContentText>Chỉnh sửa nội dung ô dưới.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tên kĩ năng"
            type="text"
            fullWidth
            defaultValue={skillData.name}
            onChange={this.handleChangeField}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => this.handleCloseDialogClick()}
            color="primary"
          >
            Bỏ qua
          </Button>
          <Button
            //   variant="contained"
            onClick={() => this.handleUpdateSkill(skillData.id)}
            color="primary"
          >
            Cập nhật
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  handleDeleteSkill = () => {
    const { skillId } = this.state;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: skillId })
    };
    this.setState({
      openDeleteDialog: false
    });
    return fetch(`${constantApi.url}/admin/deleteTag`, requestOptions).then(
      () => {
        window.location.reload(false);
      }
    );
  };

  renderDeleteDialog = () => {
    const { openDeleteDialog } = this.state;

    return (
      <Dialog fullWidth open={openDeleteDialog}>
        <DialogTitle id="form-dialog-title">Chỉnh sữa kĩ năng</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có thực sự muốn xóa kỹ năng này?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => this.handleCloseDialogClick()}
            color="primary"
          >
            Đóng
          </Button>
          <Button
            //   variant="contained"
            onClick={() => this.handleDeleteSkill()}
            color="primary"
          >
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  handleChangeAdd = e => {
    valueAddSKill = e.target.value;
  };

  handleAddSkill = () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: valueAddSKill })
    };
    this.setState({
      openAddDialog: false
    });
    return fetch(`${constantApi.url}/admin/addNewTag`, requestOptions).then(
      () => {
        window.location.reload(false);
      }
    );
  };

  renderAddDialog = () => {
    const { openAddDialog } = this.state;
    valueAddSKill = '';
    return (
      <Dialog fullWidth open={openAddDialog}>
        <DialogTitle id="form-dialog-title">Thêm kĩ năng mới</DialogTitle>
        <DialogContent>
          <DialogContentText>Nhập tên kĩ năng tạo mới.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tên kĩ năng"
            type="text"
            fullWidth
            onChange={this.handleChangeAdd}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => this.handleCloseDialogClick()}
            color="primary"
          >
            Bỏ qua
          </Button>
          <Button
            //   variant="contained"
            onClick={e => this.handleAddSkill(e)}
            color="primary"
          >
            Thêm mới
          </Button>
        </DialogActions>
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
                <Card.Header className="border">
                  <div>
                    <h4 className="text-left d-inline float-left">
                      Danh sách kĩ năng
                    </h4>
                    <Fab
                      variant="extended"
                      size="small"
                      color="primary"
                      aria-label="add"
                      className="d-inline float-right"
                      onClick={() => this.handleAddClick()}
                    >
                      <AddCircleIcon />
                      Thêm mới
                    </Fab>
                  </div>
                </Card.Header>
                <Table
                  className="align-items-center table-flush border"
                  responsive
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" className="table-title">
                        Tên kĩ năng
                      </th>
                      <th scope="col"> </th>
                    </tr>
                  </thead>
                  <tbody>{this.renderListSkill()}</tbody>
                </Table>
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-start ml-4"
                    listClassName="justify-content-start ml-4"
                  >
                    {this.renderPaging()}
                  </Pagination>
                </nav>
              </Card>
            </Col>
          </Row>
        </Container>
        {this.renderAddDialog()}
        {this.renderEditDialog()}
        {this.renderDeleteDialog()}
      </div>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.login;
  const { listUser, listSkill } = state.users;
  return { loggingIn, listUser, listSkill };
}

const actionCreators = {
  login: userActions.login,
  // logout: userActions.logout
  listAllUser: userActions.listAllUser,
  listAllSkill: userActions.listAllSkill
};

const connectedListSkillPage = connect(mapState, actionCreators)(ListSkill);

export default connectedListSkillPage;
