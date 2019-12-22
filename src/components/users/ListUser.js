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
import './users.css';

class ListUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
                <tbody>
                  <tr>
                    <td>
                      <strong className="mb-0 text-sm">abc@gmail.com</strong>
                    </td>
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

                    <td>Admin</td>

                    <td>
                      <Badge pill variant="success">
                        Active
                      </Badge>
                    </td>
                    <td>100000</td>
                    <td className="text-right">
                      <Button
                        variant="info"
                        className="table-button float-left"
                      >
                        Detail
                      </Button>
                      <Button
                        variant="danger"
                        className="table-button float-left"
                      >
                        Block
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong className="mb-0 text-sm">xyz@gmail.com</strong>
                    </td>
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

                    <td>tutor</td>

                    <td>
                      <Badge pill variant="danger">
                        Banned
                      </Badge>
                    </td>
                    <td>100000</td>
                    <td className="text-right">
                      <Button
                        variant="info"
                        className="table-button float-left"
                      >
                        Detail
                      </Button>
                      <Button
                        variant="warning"
                        className="table-button float-left"
                      >
                        Unblock
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong className="mb-0 text-sm">abc@gmail.com</strong>
                    </td>
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

                    <td>Admin</td>

                    <td>
                      <Badge pill variant="success">
                        Active
                      </Badge>
                    </td>
                    <td>100000</td>
                    <td className="text-right">
                      <Button
                        variant="info"
                        className="table-button float-left"
                      >
                        Detail
                      </Button>
                      <Button
                        variant="danger"
                        className="table-button float-left"
                      >
                        Block
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

export default ListUser;
