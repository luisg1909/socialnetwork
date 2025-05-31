import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import { getCurrentUser, logout } from '../utils/Auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { getFromSession } from '../utils/SessionStorage';
import {  saveToSession } from '../utils/SessionStorage';
import { Post } from '../utils/DataModel';
import {  Row, Col, Form, Card} from 'react-bootstrap';
import {  Button, Alert } from 'react-bootstrap';
import { getCurrentPath } from '../utils/Auth';

const posts = getFromSession('posts') || [];
const users = getFromSession('users') || [];

const AppNavbar = () => {
  const currentUser = getCurrentUser(); // Assume it returns { name, image }
  const navigate = useNavigate();
  const basename = '/sharenetwork';
  const [user, setUser] = useState(null);
  const [path, setPath] = useState(null);

  const [formData, setFormData] = useState({    
    Email: '',    
    Password: ''
  })
  const handleLogout = () => {
    logout();
    navigate( '/login');
  };
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("User handleLogin!")

    const users = getFromSession('users') || [];
    const user = users.find(
      (u) => u.Email === formData.Email && u.Password === formData.Password
    );

    if (user) {
      saveToSession('currentUser', user);
      setError('');

      navigate('/', { state: { message: 'Welcome!' } });
    } else {
      setError('Invalid username or password.');
    }
  };
  useEffect(() => {
    const storedUsers = getFromSession('users') || [];
    setPath(getCurrentPath()); 
console.log("current users login: ",storedUsers)
    if (storedUsers.length === 0) {
  
      const defaultUser = {
        username: "Mark",
        Firstname: "Mark",
        Lastname: "Zuckerberg",
        Email: "Mark.Zuckerberg@thefacebook.com",
        Month: "May",
        Day: "14",
        Year: "1984",
        password: "123",
        ProfilePic: "2025-05-22_022053.jpg",
        AboutMe: "I'm trying to make the world a more open place. I like building things that help people connect and share.",
        Work: "Facebook",
        Education: "Harvard University, Phillips Exeter Academy",
        Interests: "Programming, Breaking Things, Information Flow, Minimalism",
        Networks: "Facebook",
        Hometown: "Dobbs Ferry, New York",
        Relationship: "Single"
      };
  
      users.push(defaultUser);

      const defaultUser2 = {
        username: "P.Victor",
        Firstname: "P.Victor",
        Lastname: "",
        Email: "P.Victor@thefacebook.com",
        Month: "Dec",
        Day: "14",
        Year: "1988",
        password: "123",
        ProfilePic: "2025-05-26_210635.jpg",
        AboutMe: "I like to resolver puzzles, diving in ocean and park runner",
        Work: "Facebook",
        Education: "Harvard University",
        Interests: "cat lover",
        Networks: "Facebook",
        Hometown: "New York",
        Relationship: "Single"
      };
      users.push(defaultUser2);

      const defaultUser3 = {
        username: "GabyPezzaro",
        Firstname: "Gaby",
        Lastname: "Pezzaro",
        Email: "Pezzaro@thefacebook.com",
        Month: "Abr",
        Day: "14",
        Year: "1993",
        password: "123",
        ProfilePic: "2025-05-26_210612.jpg",
        AboutMe: "I like movies,novel and philosophy",
        Work: "Facebook",
        Education: "Phillips Exeter Academy",
        Interests: "writer",
        Networks: "Facebook",
        Hometown: "Dobbs Ferry, New York",
        Relationship: "Single"
      };
      users.push(defaultUser3);

      var newPost = new Post(    
        'P.Victor',
        'Marina and the Diamonds - The Family. Not long to wait now...',
        '2025-05-22_042101.jpg',
        new Date(),
        '0'
      );
       posts.push(newPost);
      

        newPost = new Post(    
         'GabyPezzaro',
         'Cine day',
         '2025-05-22_042454.jpg',
         '2025-05-27T13:33:22.444Z',
         '0'
       );
       posts.push(newPost);
       
       
       newPost = new Post(    
        'Mark',
        'Welcome to the facebook',
        '',
        '2025-05-25T18:21:22.444Z',
        '0'
      );
      posts.push(newPost);

       saveToSession('posts', posts);



      saveToSession('users',users);
      saveToSession('currentUser', defaultUser);
      setUser(defaultUser);
    } else {
      const currentUser = getCurrentUser();
      setUser(currentUser); 
     
   
    }
  }, []);

  if (!user) return null;

  return (
   
    
    <Navbar bg="primary" variant="dark" expand="lg">
     

      <Navbar.Brand href={basename + "#/"}>  <h2 className="ms-3 "> The facebook</h2></Navbar.Brand>
     
      
      {currentUser  ? (
      <Container>
      <Nav className="ms-auto">
        <Nav.Link href={basename + "#/"} className="text-white">Home</Nav.Link>
        <Nav.Link href={basename + "#/profile"} className="text-white">Profile</Nav.Link>

        {/* Account Dropdown */}
        <NavDropdown title="Account" id="account-dropdown" align="end" className="text-white">
          <div className="d-flex align-items-center px-3 py-2">
            <Image
              src={`${process.env.PUBLIC_URL}/img/${user.ProfilePic}`}
              roundedCircle
              width={40}
              height={40}
              className="me-2"
            />
            <strong>{currentUser?.username || 'User Name'}</strong>
          </div>
          <NavDropdown.Divider />
          
      
          <NavDropdown.Item href={basename + "#/friends"}>Edit Friends</NavDropdown.Item>
          <NavDropdown.Item href="#/account-settings">Account Settings</NavDropdown.Item>
          <NavDropdown.Item href="#/privacy-settings">Privacy Settings</NavDropdown.Item>
          <NavDropdown.Item href="#/app-settings">Application Settings</NavDropdown.Item>
          <NavDropdown.Item href="#/help">Help Center</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>

            )  : (
              <Container>
                 
               <Form  onSubmit={handleLogin}>

                  <Row>
                              
                              <Col>
                              <Form.Control className="mt-2"name="Email"  value={formData.Email} type="email" size="sm" required placeholder="Email" onChange={(e) => setFormData({ ...formData, Email: e.target.value })} />

                              </Col>
                              <Col>
                              <Form.Control className="mt-2" name="Password"  value={formData.Password}  size="sm" type="password" required placeholder="Password" onChange={(e) => setFormData({ ...formData, Password: e.target.value })} />
                    
                              </Col>
                              <Col>
                              <Button className="w-100 mt-3" type="submit" variant="warning" >Log In</Button>
                              </Col>
                              <Col>
                              {error && <Alert variant="danger">{error}</Alert>}
                              </Col>
                  </Row>

        
                </Form>
               
            </Container>
                 

              )

            }

    </Navbar>
  );
};

export default AppNavbar;
