import React, { Component } from 'react';

import {
  Badge,
  Card,
  Media,
  Table,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import './contracts.css';

class ListContracts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="mt-4">
              <Card.Header className="border-0">
                <h4 className="mb-0">Danh sách hợp đồng</h4>
              </Card.Header>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Gia sư</th>
                    <th scope="col">Phí</th>
                    <th scope="col">Xác nhận</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thanh toán</th>
                    <th scope="col"> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <img
                            alt="avatar"
                            src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg"
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Nguyễn Hữu Tú</span>
                        </Media>
                      </Media>
                    </th>
                    <td>160000d</td>
                    <td>
                      <Badge pill variant="success">
                        Đã xác nhận
                      </Badge>
                    </td>
                    <td>
                      <Badge pill variant="primary">
                        Đang học
                      </Badge>
                    </td>
                    <td>
                      <Badge pill variant="danger">
                        Chưa thanh toán
                      </Badge>
                    </td>
                    <td className="text-right">
                      <Button variant="info" className="detail-button">
                        Chi tiết
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <img
                            alt="avatar"
                            src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg"
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Nguyễn Hữu Tú</span>
                        </Media>
                      </Media>
                    </th>
                    <td>120000d</td>
                    <td>
                      <Badge pill variant="warning">
                        Đang chờ
                      </Badge>
                    </td>
                    <td>
                      <Badge pill variant="danger">
                        Đang khiếu nại
                      </Badge>
                    </td>
                    <td>
                      <Badge pill variant="danger">
                        Chưa thanh toán
                      </Badge>
                    </td>
                    <td className="text-right">
                      <Button variant="info" className="detail-button">
                        Chi tiết
                      </Button>
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
    );
  }
}

export default ListContracts;
