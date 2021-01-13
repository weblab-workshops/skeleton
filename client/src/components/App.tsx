import React, { Component } from 'react';
import { Router  } from '@reach/router';
import { get, post } from '../utilities'
import NotFound from './pages/NotFound';
import Skeleton from './pages/Skeleton';
import { GoogleLoginResponse } from 'react-google-login';
import { socket } from '../client-socket'
import "../utilities.css";

type State = {
  userId: String,
}

class App extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    }
  }

  componentDidMount() {
    get('/api/whoami').then((user) => {
      if (user._id) {
        // TRhey are registed in the database and currently logged in.
        this.setState({userId: user._id})
      }
    }).then(() => socket.on("connect", () => {
      post("/api/initsocket", { socketid: socket.id });
    }));
  }

  handleLogin = (res: GoogleLoginResponse) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  render() {
    // NOTE:
    // All the pages need to have the props defined in RouteComponentProps for @reach/router to work properly. Please use the Skeleton as an example.
    return (
      <Router>
        <Skeleton path="/" handleLogin={this.handleLogin} handleLogout={this.handleLogout} userId={this.state.userId}/>
        <NotFound default={true}/>
      </Router>
    )
  }
}

export default App;
