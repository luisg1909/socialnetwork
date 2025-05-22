import React, { useState } from 'react';
import {  Button, Alert } from 'react-bootstrap';
import { getFromSession, saveToSession } from '../utils/SessionStorage';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';

const Login = () => {
  return (
    <div className="bg-light min-vh-100">
      {/* Top Blue Bar */}
      <div className="bg-primary text-white d-flex justify-content-between align-items-center px-5 py-2">
      
        <div className="d-flex align-items-center gap-2">
          <Form.Control type="text" placeholder="Email or Phone" size="sm" />
          <Form.Control type="password" placeholder="Password" size="sm" />
          <Button className="w-100 mt-3" variant="info" >Log In</Button>
         

        </div>
      </div>

      {/* Main Content */}
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6} className="pe-5">
            <h3>Connect with friends and the world around you on Facebook.</h3>
            <p><strong>See photos and updates</strong> from friends in News Feed.</p>
            <p><strong>Share what’s new</strong> in your life on your Timeline.</p>
            <p><strong>Find more</strong> of what you’re looking for with Facebook Search.</p>
          </Col>

          <Col md={5}>
            <Card>
              <Card.Body>
                <h4 className="mb-3">Sign Up</h4>
                <p>It’s free and always will be.</p>
                <Form>
                  <Row>
                    <Col><Form.Control type="text" placeholder="First name" /></Col>
                    <Col><Form.Control type="text" placeholder="Last name" /></Col>
                  </Row>
                  <Form.Control className="mt-2" type="email" placeholder="Mobile number or email" />
                  <Form.Control className="mt-2" type="password" placeholder="New password" />
                  
                  <Form.Label className="mt-3 mb-1">Birthday</Form.Label>
                  <Row>
                    <Col>
                      <Form.Select>
                        <option>Jan</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select>
                        <option>9</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select>
                        <option>1993</option>
                      </Form.Select>
                    </Col>
                  </Row>

                  <div className="mt-3">
                    <Form.Check inline type="radio" label="Female" name="gender" />
                    <Form.Check inline type="radio" label="Male" name="gender" />
                  </div>

                  <Button className="w-100 mt-3" variant="success">Create Account</Button>
                </Form>

                <div className="mt-3 text-center">
                  <a href="#">Create a Page</a> for a celebrity, band or business.
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;