import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import { getCurrentUser, logout } from '../utils/Auth';
import { useNavigate } from 'react-router-dom';

const AppNavbar = () => {
  const currentUser = getCurrentUser(); // Assume it returns { name, image }
  const navigate = useNavigate();
  const basename = '/thefacebook';

  const handleLogout = () => {
   // logout();
    navigate( '/login');
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href={basename + "#/"}>  <h2 className="m-0">The facebook</h2></Navbar.Brand>

      <Container>
        <Nav className="ms-auto">
          <Nav.Link href={basename + "#/"} className="text-white">Home</Nav.Link>
          <Nav.Link href={basename + "#/profile"} className="text-white">Profile</Nav.Link>

          {/* Account Dropdown */}
          <NavDropdown title="Account" id="account-dropdown" align="end" className="text-white">
            <div className="d-flex align-items-center px-3 py-2">
              <Image
                src={`${process.env.PUBLIC_URL}/img/2025-05-22_022053.jpg`}
                roundedCircle
                width={40}
                height={40}
                className="me-2"
              />
              <strong>{currentUser?.name || 'User Name'}</strong>
            </div>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#/edit-friends">Edit Friends</NavDropdown.Item>
            <NavDropdown.Item href="#/account-settings">Account Settings</NavDropdown.Item>
            <NavDropdown.Item href="#/privacy-settings">Privacy Settings</NavDropdown.Item>
            <NavDropdown.Item href="#/app-settings">Application Settings</NavDropdown.Item>
            <NavDropdown.Item href="#/help">Help Center</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
