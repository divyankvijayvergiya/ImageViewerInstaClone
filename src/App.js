import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Login from './screens/login/Login';

class App extends Component{
  render(){
    return(
        <div>
          <Login/>
        </div>
    )
  }
}

export default App;
