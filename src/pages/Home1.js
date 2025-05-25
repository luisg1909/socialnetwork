import React , { useState } from 'react';
import { Table, Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { getFromSession } from '../utils/SessionStorage';
import { getCurrentUser } from '../utils/Auth';
import {  saveToSession } from '../utils/SessionStorage';
import { Post } from '../utils/DataModel';
import { User } from '../utils/DataModel';
import { useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Image } from 'react-bootstrap';

import { FaUser, FaUserFriends, FaCalendarAlt, FaImages, FaInbox, FaUserPlus, FaSearch } from "react-icons/fa";
import { MdDynamicFeed } from "react-icons/md";
const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUsers = getFromSession('users') || [];
    console.log("Stored users:", storedUsers);
  
    if (storedUsers.length === 0) {
      console.log("No users found — loading default user");
  
      const defaultUser = {
        username: "Mark",
        Firstname: "Mark",
        Lastname: "Zuckerberg",
        Email: "Mark.Zuckerberg@facebook.com",
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
  
      saveToSession('users', [defaultUser]);
      saveToSession('currentUser', defaultUser);
      setUser(defaultUser);
    } else {
      const currentUser = getCurrentUser();
      console.log("Current user from session:", currentUser);
      setUser(currentUser); 
    }
  }, []);
 




  if (!user) return null;

  
  
  return (
    <Container fluid className="bg-light p-3">
       {message && (
        <Alert variant="success" className="mb-4">
          {message}
        </Alert>
      )}
      <Row>
        {/* Left Sidebar */}
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
              <a href="/sharenetwork#/profile">  <Image src={`${process.env.PUBLIC_URL}/img/${user.ProfilePic}`} roundedCircle width={40} className="me-2" /></a>  
                <span>{user.Firstname} {user.Lastname}</span>
              </div>
              <ListGroup variant="flush">
                <ListGroup.Item>News Feed</ListGroup.Item>
                <ListGroup.Item>Messages</ListGroup.Item>
                <ListGroup.Item>Events</ListGroup.Item>
                <ListGroup.Item>Photos</ListGroup.Item>
                <ListGroup.Item>Friends</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Main Feed */}
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Form>
                <Form.Control as="textarea" rows={2} placeholder="What's on your mind?" />
                <div className="text-end mt-2">
                  <Button variant="primary" size="sm">Post</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          {/* Example Post */}
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex mb-2">
                <Image src={`${process.env.PUBLIC_URL}/img/2025-05-22_032313.jpg`} roundedCircle width={40} className="me-2" />
                <div>
                  <strong>P.Victor</strong> posted about <em>Marina and the Diamonds</em><br />
                  <small className="text-muted">5 hours ago</small>
                </div>
              </div>
              <p>Marina and the Diamonds - The Family Jewels. Not long to wait now...</p>
              <Image src={`${process.env.PUBLIC_URL}/img/2025-05-22_042101.jpg`} fluid />
              <div className="mt-2 text-muted" style={{ fontSize: '0.9rem' }}>
                Like · Comment · Share
              </div>
            </Card.Body>
          </Card>

          {/* Another Post */}
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex mb-2">
                <Image src={`${process.env.PUBLIC_URL}/img/2025-05-22_032332.jpg`}  roundedCircle width={40} className="me-2" />
                <div>
                  <strong>Gaby Pezzaro</strong> commented on a photo<br />
                  <small className="text-muted">1 hour ago</small>
                </div>
              </div>
              <p>Cine day</p>
              <Image src={`${process.env.PUBLIC_URL}/img/2025-05-22_042454.jpg`}  fluid />
              <div className="mt-2 text-muted" style={{ fontSize: '0.9rem' }}>
                Like · Comment · Share
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Sidebar */}
        <Col md={3}>
          <Card className="mb-3">
            <Card.Header>Requests</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>1 friend request</ListGroup.Item>
              <ListGroup.Item>2 event invites</ListGroup.Item>
              <ListGroup.Item>3 page suggestions</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;