import React , { useState } from 'react';
import { Table, Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { getFromSession } from '../utils/SessionStorage';
import { getCurrentUser } from '../utils/Auth';
import {  saveToSession } from '../utils/SessionStorage';
import { Post } from '../utils/DataModel';
import { User } from '../utils/DataModel';

import { Container, Row, Col, Card, ListGroup, Form, Button, Image } from 'react-bootstrap';

import { FaUser, FaUserFriends, FaCalendarAlt, FaImages, FaInbox, FaUserPlus, FaSearch } from "react-icons/fa";
import { MdDynamicFeed } from "react-icons/md";
const Home = () => {
  return (
    <Container fluid className="bg-light p-3">
      <Row>
        {/* Left Sidebar */}
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <Image src={`${process.env.PUBLIC_URL}/img/2025-05-22_022053.jpg`} roundedCircle width={40} className="me-2" />
                <span>Matthew Sanders</span>
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
              <Image src="/img/album.jpg" fluid />
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
              <p>Dog Days</p>
              <Image src="/img/baby.jpg" fluid />
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