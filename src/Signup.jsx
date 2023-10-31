import React, { useState } from 'react';
import { createUser } from './api';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = () => {
    if (formData.username.trim() === '' || formData.password.trim() === '') {
      alert('Username and password are required.');
    } else {
      
      createUser({
        username: formData.username,
        password: formData.password,
      })
        .then(() => {
          alert('Sign-up successful. You can now log in.');
          setFormData({ username: '', password: '' });
        })
        .catch((error) => {
          alert('Sign-up failed. Please try again.');
          console.error('Error:', error);
        });
  }
};

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
