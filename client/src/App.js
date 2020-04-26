import React, { Component, Profiler } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Register from './components/Register'
import Login from './components/Login';
import Decision from './components/Decision';
import GetHelp from './components/GetHelp';
import Volunteer from './components/Volunteer';
import Profile from './components/Profile'
import Contact from './components/Contact'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css';

import {
  registerUser,
  loginUser,
  verifyUser,
  removeToken
} from './services/api-helper';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      authFormData: {
        first_name: "",
        age: {},
        email: "",
        location: "",
        type_of_volunteer: "",
        best_time: "",
        password: ""
      },
    }
  }

  componentDidMount = () => {
    this.handleVerify();
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({currentUser: currentUser})
    }
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser: currentUser })
    this.props.history.push("/decision")
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser: currentUser })
    this.props.history.push("/decision")
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({ currentUSer: null })
    removeToken();
    this.props.history.push("/login")
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    })
  }  
  

  render() {
    return (
      <div class="app">
        
        <Nav
          currentUser={this.state.currentUser}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
        />
        
        <Switch>
          <Route exact path="/home" render={(props) => (
            <Home
            />
        )}/>
        <Route exact path="/login" render={(props) => (
            <Login
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData} />)} />
          <Route exact path="/register" render={(props) => (
            <Register
              handleRegister={this.handleRegister}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData} />)} />
          <Route exact path="/decision" render={(props) => (
            <Decision
            />)} />
          <Route exact path="/gethelp" render={(props) => (
            <GetHelp
            />
          )} />
          <Route exact path="/volunteer" render={(props) => (
            <Volunteer
              user={this.state.authFormData}
              handleChange={this.handleChange}
            />
          )} />
          <Route exact path="/profile" render={(props) => (
            <Profile
              user={this.state.authFormData}
            />
          )}/>
          <Route exact path="/contact" render={(props) => (
            <Contact
              
            />
          )}/>
        </Switch> 
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(App);
