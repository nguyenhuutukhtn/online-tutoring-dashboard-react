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
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log('userInfo-', userInfo);
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
          <Nav className="mr-auto" />
          <Nav>
            <NavDropdown
              className="float-right"
              title={
                <div
                  className="pull-left dropdown-title"
                  style={{ display: 'inline' }}
                >
                  <div style={{ display: 'inline' }} className="ml-3">
                    {userInfo.name}
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
