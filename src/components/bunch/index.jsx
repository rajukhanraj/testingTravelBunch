import React, { Component } from 'react';
import apiUrl from '../../config';
import axios from 'axios';

export default class Bunch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentWillMount() {
    axios.get(`${apiUrl}/api/users/list`)
      .then((res) => {
        this.setState({ users: res.data.users })
      })
      .catch((e) => {
        console.log(e)
      })
  }
  render() {
    return (
      <div>
        {
          this.state.users.map((user) => (
            <div>
              <p style={{ marginBottom: '0' }}>{user.email}</p>
              <p>{user.fromCity}</p>
            </div>
          ))
        }
      </div>
    )
  }
}
