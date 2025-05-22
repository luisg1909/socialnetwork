import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { saveToSession, getFromSession } from '../utils/SessionStorage';
import { User } from '../utils/DataModel';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: 'luis',
    name: 'luis',
    email: 'luis@hotmail.com',
    password: '',
    role: 'regular',
    points:0,
    avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (checked ? 'admin' : 'regular') : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = new User(
      formData.username,
      formData.name,
      formData.email,
      formData.role,
      formData.avatar,
      formData.password,
      formData.points,
    );
    console.log("salvo points",formData.points)
    const users = getFromSession('users') || [];
    users.push(newUser);
    saveToSession('users', users);
    navigate('/', { state: { message: 'User registered successfully!' } });

  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="avatar">
        <Form.Label>Avatar (Image URL)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter avatar URL"
          name="avatar"
          value={formData.avatar}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="role">
        <Form.Check
          type="checkbox"
          label="Register as Admin"
          name="role"
          checked={formData.role === 'admin'}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
