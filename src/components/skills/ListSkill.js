import React from 'react';
import {
  Card,
  Row,
  Table,
  Container,
  Col,
  Badge,
  Button
} from 'react-bootstrap';
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

import './skills.css';

class ListSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddDialog: false,
      openEditDialog: false
    };
  }

  handleAddClick = () => {
    this.setState({ openAddDialog: true });
  };

  handleEditClick = () => {
    this.setState({ openAddDialog: true });
  };

  handleCloseDialogClick = () => {
    this.setState({ openAddDialog: false, openEditDialog: false });
  };

  render() {
    const { openAddDialog, openEditDialog } = this.state;
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

                      <th scope="col" className="table-title">
                        Số người dạy
                      </th>
                      <th scope="col" className="table-title">
                        Số người học
                      </th>

                      <th scope="col"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong className="mb-0 text-sm">
                          Luyện thi khối A
                        </strong>
                      </td>
                      <th scope="row">
                        <Badge pill variant="info">
                          160
                        </Badge>
                      </th>

                      <td>
                        <Badge pill variant="success">
                          160
                        </Badge>
                      </td>

                      <td className="text-left">
                        <IconButton onClick={() => this.handleEditClick()}>
                          <EditIcon style={{ color: '#115292' }} />
                        </IconButton>
                        <IconButton>
                          <DeleteIcon style={{ color: '#ed4337' }} />
                        </IconButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="mb-0 text-sm">
                          Luyện thi khối A
                        </strong>
                      </td>
                      <th scope="row">
                        <Badge pill variant="info">
                          160
                        </Badge>
                      </th>

                      <td>
                        <Badge pill variant="success">
                          160
                        </Badge>
                      </td>

                      <td className="text-left">
                        <IconButton>
                          <EditIcon style={{ color: '#115292' }} />
                        </IconButton>
                        <IconButton>
                          <DeleteIcon style={{ color: '#ed4337' }} />
                        </IconButton>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="mb-0 text-sm">
                          Luyện thi khối A
                        </strong>
                      </td>
                      <th scope="row">
                        <Badge pill variant="info">
                          160
                        </Badge>
                      </th>

                      <td>
                        <Badge pill variant="success">
                          160
                        </Badge>
                      </td>

                      <td className="text-left">
                        <IconButton>
                          <EditIcon style={{ color: '#115292' }} />
                        </IconButton>
                        <IconButton>
                          <DeleteIcon style={{ color: '#ed4337' }} />
                        </IconButton>
                      </td>
                    </tr>
                  </tbody>
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
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        className="border"
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        className="border"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        className="border"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
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
              onClick={() => this.handleCloseDialogClick()}
              color="primary"
            >
              Cập nhật
            </Button>
          </DialogActions>
        </Dialog>
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
              onClick={() => this.handleCloseDialogClick()}
              color="primary"
            >
              Thêm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ListSkill;
