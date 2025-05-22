import React from 'react';

import { getCurrentUser } from '../utils/Auth';

import { Container, Row, Col, Card, Image, ListGroup } from 'react-bootstrap';
import { FaUser, FaUserFriends, FaCalendarAlt, FaImages, FaInbox, FaUserPlus, FaSearch } from "react-icons/fa";
import { MdDynamicFeed } from "react-icons/md";
const ProfilePage = () => {
  return (
    <Container fluid className="bg-light p-3">
      {/* Top Nav */}
     

      <Row className="mt-4">
        {/* Left Sidebar */}
        <Col md={3}>
          <Card>
            <Card.Body>
              <Image
                 src={`${process.env.PUBLIC_URL}/img/2025-05-22_022053.jpg`}
                 rounded
                 fluid
                 alt="Profile"
              />
              <Card.Text className="mt-3">View Photos of Mark (17)</Card.Text>
              <Card.Text>Send Mark a Message</Card.Text>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Header>Information</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Networks: Facebook</ListGroup.Item>
              <ListGroup.Item>Birthday: May 14, 1984</ListGroup.Item>
              <ListGroup.Item>Hometown: Dobbs Ferry, New York</ListGroup.Item>
              <ListGroup.Item>Relationship: Single</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* Main Content */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <h5>Mark Zuckerberg</h5>
              <div className="d-flex gap-3 mb-3">
                <span className="text-primary">Wall</span>
                <span>Info</span>
                <span>Photos</span>
                <span>Boxes</span>
              </div>

              <h6>About Me</h6>
              <p>
                “I'm trying to make the world a more open place. I like building things that help people connect and share.”
              </p>

              <h6>Work and Education</h6>
              <p><strong>Work:</strong> Facebook</p>
              <p><strong>Education:</strong> Harvard University, Phillips Exeter Academy</p>

              <h6>Likes and Interests</h6>
              <p>Programming, Breaking Things, Information Flow, Minimalism</p>
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
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
