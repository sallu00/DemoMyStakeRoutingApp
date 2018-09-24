import React, { Component } from 'react';
import logo from '../../logo-blue.svg';
// import logOut  from './/logout-button-blue-hi.png';
import '../../App.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to myStake</h1>
        </header>
      </div>
    );
  }
}

export default Dashboard;