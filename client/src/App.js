import React, { useState } from 'react';
import Axios from 'axios';
import LoginForm from './components/LoginForm';


function App() {

 

  
  

  const Logout = () => {
    console.log('Logout');
  }

  return (
    <div className="App">
       <LoginForm />
    </div>
  );
}

export default App;
