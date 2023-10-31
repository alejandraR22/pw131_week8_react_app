import React, { Component } from 'react';
import './NavBar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/signup">Signup</a>
          </li>
          <li className="nav-item">
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    );
  }
}

