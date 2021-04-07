import React, { useState } from 'react';
import Axios from 'axios';


export default function LoginForm() {
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);
    
    const login = () => {
        Axios({
          method: "POST",
          data: {
            email: loginUsername,
            password: loginPassword,
          },
          withCredentials: true,
          url: "http://localhost:5000/users/login",
        }).then((res) => {
            console.log(res);
            setUser(res);
        }, (error) => {
            console.log(error);
        })


      }
    
    return (
        
        <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>
        
    )
}
