import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import './navbar.css';

class HorizontalNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // verifies if routeName is the one active (in browser input)

  logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="shadow-none "
        style={{ background: '#197DE8' }}
      >
        <Navbar.Brand href="/" style={{ fontWeight: 'bold' }}>
          Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              className="float-right"
              title={
                <div
                  className="pull-left dropdown-title"
                  style={{ display: 'inline' }}
                >
                  <img
                    className="thumbnail-image rounded-circle"
                    src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s40-c-fbw=1/photo.jpg"
                    alt="user pic"
                  />
                  <div style={{ display: 'inline' }} className="ml-3">
                    Admin
                  </div>
                </div>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={() => this.logout()}>
                Đăng xuất
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HorizontalNavBar;
