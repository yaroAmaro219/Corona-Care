import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import {withRouter} from 'react-router'
import Register from './components/Register'
import './App.css';

import {
  registerUser,
  loginUser,
  verifyUser,
  removeToken
} from './services/api-helper'


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
    this.props.history.push("/")
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser: currentUser })
    this.props.history.push("/")
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
        <h1>Hello World</h1>
        <Switch>
          <Route exact path="/register" render={(props) => (
            <Register
              handleRegister={this.handleRegister}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData} /> )} />
        </Switch>
          
      </>
    );
  }
}

export default withRouter(App);
