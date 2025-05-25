import React from 'react';

import { getCurrentUser } from '../utils/Auth';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Image, ListGroup } from 'react-bootstrap';
import { FaUser, FaUserFriends, FaCalendarAlt, FaImages, FaInbox, FaUserPlus, FaSearch } from "react-icons/fa";
import { MdDynamicFeed } from "react-icons/md";
import { getFromSession, saveToSession } from '../utils/SessionStorage';
import { Form, Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';

const ProfilePage = () => {
  const users = getFromSession('users') || [];
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUsers = getFromSession('users') || [];
    console.log("Stored users:", storedUsers); 
      
    if (storedUsers.length === 0) {
      console.log("No users found — loading default user");
  
      navigate('/login', { state: { message: 'Please login to use The Facebook' } });


      const storedUsers = getFromSession('users') || [];
      console.log("Stored users:", storedUsers);
    } else {
      const currentUser = getCurrentUser();
      console.log("Current user from session:", currentUser);
      setUser(currentUser); 
    }
  }, []);
 


  if (!user) return null;

  console.log("users!",users)
 
  const gotoEdit = (e) => {
   
    navigate('/Profiledetails');

  };
  return (
    <Container fluid className="bg-light p-3">
      {/* Top Nav */}
     

      <Row className="mt-4">
        {/* Left Sidebar */}
        <Col md={3}>
          <Card>
            <Card.Body>
              <Image
                 src={`${process.env.PUBLIC_URL}/img/${user.ProfilePic}`}
                 rounded
                 fluid
                 alt="Profile"
              />
              <Card.Text className="mt-3">View Photos of {user.Firstname} (17)</Card.Text>
              <Card.Text>Send {user.Firstname} a Message</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Header>Information</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Networks: {user.Networks}</ListGroup.Item>
              <ListGroup.Item>Birthday: {user.Month} {user.Day},  {user.Year}</ListGroup.Item>
              <ListGroup.Item>Hometown:  {user.Hometown}</ListGroup.Item>
              <ListGroup.Item>Relationship: {user.Relationship}</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* Main Content */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <h5>{user.Firstname} {user.Lastname}</h5>
              <div className="d-flex gap-3 mb-3">
                <span className="text-primary">Wall</span>
                <span>Info</span>
                <span>Photos</span>
                <span>Boxes</span>
              </div>

              <h6>About Me</h6>
              <p>
                “{user.AboutMe} ”
              </p>

              <h6>Work and Education</h6>
              <p><strong>Work:</strong> {user.Work}</p>
              <p><strong>Education:</strong>  {user.Education}</p>

              <h6>Likes and Interests</h6>
              <p> {user.Interests}</p>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Column (Ads / Suggestions) */}
        <Col md={3}>
          <Card>
            <Card.Body>
            <div className="grid grid-cols-1 gap-1 p-4 text-center text-sm">
        <div className="flex flex-col items-center">
          <MdDynamicFeed size={24} />
          <span>News Feed</span>
        </div>
        <div className="flex flex-col items-center">
          <FaUser size={24} />
          <span>Profile</span>
        </div>
        <div className="flex flex-col items-center">
          <FaUserFriends size={24} />
          <span>Friends</span>
        </div>
        <div className="flex flex-col items-center">
          <FaImages size={24} />
          <span>Photos</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCalendarAlt size={24} />
          <span>Events</span>
        </div>
        <div className="flex flex-col items-center">
          <FaInbox size={24} />
          <span>Messages</span>
        </div>
        <div className="flex flex-col items-center">
          <FaUserPlus size={24} />
          <span>Requests</span>
        </div>
      </div>
            </Card.Body>
            <Card.Body className="text-center">
            <Button onClick={gotoEdit} variant="success" className="w-50">
                 Edit data
                </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

   
    </Container>
  );
};

export default ProfilePage;
