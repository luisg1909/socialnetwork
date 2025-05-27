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
  const posts = getFromSession('posts') || [];
  const [showAttachImage, setShowAttachImage] = useState(false);

  const [formData, setFormData] = useState({
    content: '',
    image: ''
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    var newPost = new Post(    
      user.username,
      formData.content,      
      formData.image,   
      new Date(),
      '0'
    );
    posts.push(newPost);

    saveToSession('posts', posts);
    window.location.reload(); 

  };
  var users = getFromSession("users") || [];

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
    
     
       setUser(defaultUser);
       saveToSession('currentUser', defaultUser);

    } else {
      const currentUser = getCurrentUser();
      console.log("Current user from session because already have users:", currentUser);
      setUser(currentUser); 
      users = getFromSession("users") || [];
      console.log("Current users from session 2:", users);

    }
  }, []);
 

  console.log("posts currently",posts);



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
              <Form onSubmit={handleSubmit}>


                <Form.Control name="content" value={formData.content}  as="textarea" rows={2} placeholder="What's on your mind?" onChange={(e) => setFormData({ ...formData, content: e.target.value })} />
                
                {showAttachImage && (
                    <Form.Group className="mb-4 text-center">
                      <Form.Label><strong>Select post Picture</strong></Form.Label>
                      <div className="mb-2">
                        {formData.image && (
                          <img
                            src={`${process.env.PUBLIC_URL}/img/${formData.image}`}
                            alt="Selected"
                            style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover' }}
                          />
                        )}
                      </div>
                      <div className="d-flex justify-content-center gap-3">
                        {[ '2025-05-22_042454.jpg', '2025-05-26_232236.jpg', '2025-05-26_232330.jpg','2025-05-26_232223.jpg', '2025-05-26_232449.jpg', '2025-05-26_232422.jpg', '2025-05-26_232402.jpg'].map((pic) => (
                          <img
                            key={pic}
                            src={`${process.env.PUBLIC_URL}/img/${pic}`}
                            alt={pic}
                            style={{
                              width: 60,
                              height: 60,
                              borderRadius: '50%',
                              border: formData.image === pic ? '3px solid #0d6efd' : '2px solid gray',
                              cursor: 'pointer',
                              objectFit: 'cover'
                            }}
                            onClick={() => setFormData(prev => ({ ...prev, image: pic }))}
                          />
                        ))}
                      </div>
                    </Form.Group>
                  )}
                <Row>                    
                    <Col>
                    <div className="text-end mt-2">
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => setShowAttachImage((prev) => !prev)}
                    >
                      {showAttachImage ? "Hide Image Picker" : "Attach Image"}
                    </Button>
                    </div>              
                    </Col>
                    <Col>
                    <div className="text-end mt-2">
                     <Button type="submit" variant="primary" size="sm">Post</Button>
                    </div>
                    </Col>                
                </Row>
             
              </Form>
            </Card.Body>
          </Card>

          {/* Example Post */}
         
          {[...posts]
              .sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)) // ascending
              .map((post, index) => {
                const matchedUser = users.find((u) => u.username === post.username);
                const profilePic = matchedUser?.ProfilePic || 'default.jpg';
                const usernameandlastname = `${matchedUser?.Firstname || ''} ${matchedUser?.Lastname || ''}`.trim();

                return (
                  <Card className="mb-3" key={index}>
                    <Card.Body>
                      <div className="d-flex mb-2">
                        <Image
                          src={`${process.env.PUBLIC_URL}/img/${profilePic}`}
                          roundedCircle
                          width={40}
                          className="me-2"
                        />
                        <div>
                          <strong>{usernameandlastname}</strong> posted <br />
                          <small className="text-muted">
                            {new Date(post.dateCreated).toLocaleString()}
                          </small>
                        </div>
                      </div>
                      <p>{post.content}</p>
                      {post.image && post.image.length > 0 && (
                        <Image src={`${process.env.PUBLIC_URL}/img/${post.image}`} fluid />
                      )}
                      <div className="mt-2 text-muted" style={{ fontSize: '0.9rem' }}>
                        Like · Comment · Share
                      </div>
                    </Card.Body>
                  </Card>
                );
        })}
           <Card className="mb-3">
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