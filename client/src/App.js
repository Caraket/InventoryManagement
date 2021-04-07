import React from 'react';
import Axios from 'axios';
import {BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import GetUser from './components/GetUser';
import Navbar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import GetUsers from './components/GetUsers';


function App() {
  const Logout = () => {
    console.log('Logout');
  }

  return (
    <div className="App">
       <Navbar />
    </div>
  );
}

export default App;
