import React, { Component, Profiler } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Register from './components/Register'
import Login from './components/Login';
import Decision from './components/Decision';
import GetHelp from './components/GetHelp';
import Volunteer from './components/Volunteer';
import Profile from './components/Profile'
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
    const currentUser = await registerUser(this.state.authFormData);
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
  

  render() {
    return (
      <>
        <nav>
          <Link to="/"><h1 class="home">COCA</h1></Link>
          {this.state.currentUser
            ?
            <div>
              <ul>
                <Link to="/profile">Profile</Link>
              </ul>
              <button onClick={this.handleLogout}>Logout</button>
            </div>
            :
            <button onClick={this.handleLoginButton}>Login</button>
        }
        </nav>
        <h1>Hello World</h1>
        <Switch>
        <Route exact path="/login" render={(props) => (
            <Login
              handleLogin={this.handleRegister}
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
            />
          )} />
          <Route exact path="/profile" render={(props) => (
            <Profile
              user={this.state.authFormData}
            />
          )}/>
        </Switch>           
      </>
    );
  }
}

export default withRouter(App);
