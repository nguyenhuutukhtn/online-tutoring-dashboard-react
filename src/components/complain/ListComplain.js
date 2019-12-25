import React, { Component } from 'react';

import {
  Badge,
  Card,
  Table,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { connect } from 'react-redux';
import userActions from '../../actions/user.action';
import history from '../../helpers/history';
// import constantApi from '../../apis/constants.api';
class ListComplain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { listAllComplaint } = this.props;
    const searchParams = new URLSearchParams(window.location.search);
    let currentPage = parseInt(searchParams.get('page'), 10);
    if (!currentPage) {
      currentPage = 1;
    }
    listAllComplaint(currentPage);
  }

  handleDetailCLick = complainId => {
    history.push(`/complain-detail?id=${complainId}`);
  };

  renderComplain = () => {
    const { listComplain } = this.props;
    if (!listComplain) {
      return '';
    }
    return listComplain.data.map(complain => {
      return (
        <tr>
          <th scope="row">{complain.name}</th>
          <td>
            <Badge
              pill
              variant={
                complain.complain_status === 'solved' ? 'success' : 'danger'
              }
            >
              {complain.complain_status}
            </Badge>
          </td>
          <td>{complain.content}</td>

          <td className="text-right">
            <Button
              variant="info"
              className="detail-button"
              onClick={() => this.handleDetailCLick(complain.complain_id)}
            >
              Chi tiết
            </Button>
          </td>
        </tr>
      );
    });
  };

  handlePageCLick = (e, page) => {
    e.preventDefault();
    history.push(`/complains?page=${page}`);
  };

  renderPaging = () => {
    const { listComplain } = this.props;
    if (!listComplain) {
      return '';
    }
    const { totalPage } = listComplain;
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

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="mt-4">
              <Card.Header className="border-0">
                <h4 className="mb-0">Danh sách khiếu nại</h4>
              </Card.Header>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Học sinh</th>
                    <th scope="col">Status</th>
                    <th scope="col">Nội dung</th>

                    <th scope="col"> </th>
                  </tr>
                </thead>
                <tbody>{this.renderComplain()}</tbody>
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
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.login;
  const { listUser, listComplain } = state.users;
  return { loggingIn, listUser, listComplain };
}

const actionCreators = {
  login: userActions.login,
  // logout: userActions.logout
  listAllComplaint: userActions.listAllComplaint
};

const connectedListComplainPage = connect(
  mapState,
  actionCreators
)(ListComplain);

export default connectedListComplainPage;
