import React, { Component } from 'react';
import ToDo from './ToDo';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="landing-page">
        <h1>Home</h1>
        <p>Info</p>
        <button className="button">Learn More</button>
        <ToDo />
      </div>
    );
  }
}