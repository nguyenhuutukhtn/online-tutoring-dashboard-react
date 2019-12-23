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

class ListComplain extends Component {
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
                <tbody>
                  <tr>
                    <th scope="row">Nguyễn Hữu Tú</th>
                    <td>
                      <Badge pill variant="danger">
                        not solve
                      </Badge>
                    </td>
                    <td>
                      Gia sư này chưa dạy đủ số tiếng mà tôi đã đăng ký trước
                      đó, mong admin xử lý giúp
                    </td>

                    <td className="text-right">
                      <Button variant="info" className="detail-button">
                        Chi tiết
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Nguyễn Hữu Tú</th>
                    <td>
                      <Badge pill variant="success">
                        solved
                      </Badge>
                    </td>
                    <td>
                      Gia sư này chưa dạy đủ số tiếng mà tôi đã đăng ký trước
                      đó, mong admin xử lý giúp
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

export default ListComplain;
