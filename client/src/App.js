import React, { Component } from 'react';
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
import Submit from './components/Submit'
import Posts from './components/Posts'
import Footer from './components/Footer'
import './styles/Login.css'
import './styles/Register.css'
import './styles/Nav.css'
import './styles/GetHelp.css'
import './styles/Home.css'
import './styles/footer.css'
import './styles/Volunteer.css'
// import './App.css';

import {
  registerUser,
  loginUser,
  verifyUser,
  removeToken,
  postPost,
  showPost,
  showUser,
} from './services/api-helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      registerFormData: {
        first_name: "",
        age: true,
        email: "",
        location: "",
        type_of_volunteer: "noodle",
        best_time: "doodle",
        password: ""
      },
      authFormData: {
        email: '',
        password:''
      },
      name: '',
      title: '',
      content: '',
      user_id: '',
      post: '',
      user: '',
    }
  }

  componentDidMount = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      })
    }
    // this.getUser();
  }

  getUser = async () => {
    const user = await showUser();
    if (user) {
      this.setState({ user })
    }
  }

    getPost = async () => {
      const post = await showPost();
      // if (post) {
      this.setState({ post });
      // }
    }
  
  

  addPost = async (id, name, title, content, user_id) => {
    const newPost = await postPost(id, {
      name: name,
      title: title,
      content: content,
      user_id: user_id
    })
    this.setState(prevState => ({
      post: newPost,
      name: "",
      title: "",
      content: "",
    }))
  }

  // handleVerify = async () => {
  //   const currentUser = await verifyUser();
  //   if (currentUser) {
  //     this.setState({currentUser: currentUser})
  //   }
  // }

  handleLogin = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({
      currentUser
    })
    this.props.history.push("/home")
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.registerFormData);
    this.setState({
      currentUser
    })
    this.props.history.push("/home")
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
    removeToken();
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

  registerHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value
      }
    }));
  }
  

  // handleChange = (e) => {
  //   const value = e.target.value;
  //   this.setState({
  //     ...this.state,
  //     [e.target.name]: value
  //   })
  // }  

  // handleFormChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ formData: { [name]: value } });
  // }
  

  render() {
    // console.log(this.state.user)
    return (
      <div class="app">
        <Nav
          currentUser={this.state.currentUser}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          formData={this.state.authFormData}
          user={this.state.user}
        />
        <div class="route">
        <Switch>
          <Route exact path="/home" render={(props) => (
              <Home
                currentUser={this.state.currentUser}
            />
        )}/>
        <Route exact path="/login" render={(props) => (
            <Login
                handleLogin={this.handleLogin}
                handleChange={this.authHandleChange}
                authFormData={this.state.authFormData}
                {...props}/>)} />
          <Route exact path="/register" render={(props) => (
            <Register
              handleRegister={this.handleRegister}
              handleChange={this.registerHandleChange}
              registerFormData={this.state.registerFormData} /> )} />
          <Route exact path="/decision" render={(props) => (
            <Decision
            />)} />
          <Route exact path="/users/:id/posts" render={(props) => (
            <GetHelp
              addPost={this.addPost}
              postPost={this.postPost}
              authFormData={this.authFormData}
              handleChange={this.handleChange}
              name={this.state.name}
            />
          )} />
          <Route exact path="/volunteer" render={(props) => (
            <Volunteer
              user={this.state.authFormData}
              handleChange={this.handleChange}
              currentUser={this.currentUser}
            />
          )} />
          <Route exact path="/profile" render={(props) => (
            <Profile
              user={this.state.registerFormData}
              handleLogout={this.handleLogout}
              getUser={this.getUser}
              showUser={this.showUser}
            />
          )}/>
          <Route exact path="/contact" render={(props) => (
            <Contact
              
            />
          )}/>
          <Route exact path="/submit" render={(props) => (
            <Submit
              
            />
          )} />
          <Route exact path="/posts" render={(props) => (
            <Posts
              {...props}
              authFormData={this.state.authFormData}
              post={this.state.post}
              getPost={this.getPost}
              showPost={this.showPost}
            />
          )} />
          <Route exact path="/" render={(props) => (
            <Home
            />
          )} /> 
          </Switch> 
          </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(App);
