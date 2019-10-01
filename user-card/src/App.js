import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: [],
      user: {}
    };
  };

  componentDidMount() {
    this.getGithubUser();
    this.getGithubFollowers();
  }

  getGithubUser = async () => {
    let res = await axios.get('https://api.github.com/users/DTJohnson5');
    this.setState({
      user: res.data
    });
  };

  getGithubFollowers = async () => {
    let res = await axios.get('https://api.github.com/users/DTJohnson5/followers');
    this.setState({
      followers: res.data
    });
  };

  render() {
    const { user, followers } = this.state;
    return (
      <div className="App" >
       
        <h1>{user.login}'s Github card!</h1>
        {followers.map(follower => (
          <h2>{follower.login}</h2>
        ))}
      </div>
    );
  }
}

export default App;
