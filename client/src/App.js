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
import UpdatePost from './components/updatePost'
import Footer from './components/Footer'
import './styles/Login.css'
import './styles/Register.css'
import './styles/Nav.css'
import './styles/GetHelp.css'
import './styles/Home.css'
import './styles/footer.css'
import './styles/Volunteer.css'
import './styles/Contact.css'
import './styles/Posts.css'
import './styles/Profile.css'

import {
  registerUser,
  loginUser,
  verifyUser,
  removeToken,
  postPost,
  showPost,
  destroyPost,
  showUser,
  showUserItem,
  showPersonalPost,
  putPost,
} from './services/api-helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      userId: null,
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
      personalPost: '',
      user: [],
      userItem: null,
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

  getName = () => {
    let name =  this.state.currentUser
        &&
      this.state.currentUser.first_name
    return (name)
  }

  getUserItem = async (id) => {
    const userItem = await showUserItem(id);
    this.setState({userItem})
  }

    getPost = async () => {
      const post = await showPost();
      // if (post) {
      this.setState({ post });
      // }
    }
  
  getPersonalPost = async (id) => {
    const personalPost = await showPersonalPost(id);
    this.setState({ personalPost })
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

  deletePost = async (id) => {
    await destroyPost(id);
    this.setState(prevState => ({
      personalPost: {
        ...prevState.personalPost,
        posts: prevState.personalPost.posts.filter((post) => {
          return post.id !== id 
        })
      }
    }))
  }

  updatePost = async (id) => {
    const updatedPostItem = await putPost(id, {
      name: this.state.name,
      title: this.state.title,
      content: this.state.content,
      user_id: this.state.user_id
    })
    this.setState(prevState => ({
      personalPost: {
        ...prevState.personalPost,
        posts: prevState.personalPost.posts.map((post) => {
          return post.id === id
            ?
            updatedPostItem
            :
            post
        })
      },
      name: '',
      title: '',
      content: '',
      user_id: ''
    }))
    this.props.history.push('/profile/:id')
  }

  setPostForm = (name, user_id) => {
    this.setState({
      name: name,
      user_id: user_id
    })
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
    this.setState({currentUser: null})
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

  registerHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
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

  // handleFormChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ formData: { [name]: value } });
  // }
  

  render() {
    console.log(this.state.personalPost)
    console.log('name:', this.state.name)
    console.log('firstname:', this.state.first_name)
    console.log('content:', this.state.content)
    console.log('user_id:', this.state.user_id)
    console.log('title:', this.state.title)
    return (
      <div class="app">
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
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
                getUserItem={this.getUserItem}
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
                name={this.getName}
              addPost={this.addPost}
              postPost={this.postPost}
              authFormData={this.authFormData}
              handleChange={this.handleChange}
              currentUser={this.state.currentUser}
            />
          )} />
          <Route exact path="/volunteer" render={(props) => (
            <Volunteer
              user={this.state.authFormData}
              handleChange={this.handleChange}
              currentUser={this.currentUser}
            />
          )} />
          <Route exact path="/profile/:id" render={(props) => (
            <Profile
              user={this.state.registerFormData}
              handleLogout={this.handleLogout}
              getUser={this.getUser}
                showUser={this.showUser}
                getPersonalPost={this.getPersonalPost}
                {...props}
                personalPost={this.state.personalPost}
                deletePost={this.deletePost}
                updatePost={this.updatePost}
            />
          )}/>
          <Route exact path="/contact" render={(props) => (
            <Contact
              
            />
          )}/>
          <Route exact path="/submit" render={(props) => (
            <Submit
              getName={this.getName}
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
            <Route exact path="/profile/:user_id/posts/:id" render={(props) => {
              const post = this.state.personalPost.posts.find((post) => post.id === parseInt(props.match.params.id))
              return <UpdatePost
                {...props}
                post={post}
                personalPost={this.state.personalPost}
                getPersonalPost={this.getPersonalPost}
                setPostForm={this.setPostForm}
                updatePost={this.updatePost}
                handleChange={this.handleChange}
              />
            }} /> 
          </Switch> 
          </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(App);
