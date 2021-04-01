import React, { useState } from 'react';
import Axios from 'axios';

export default function GetUser() {
    const [data, setData] = useState(null);
    
    const getUser = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:5000/users/user",
        }).then((res) => {
          setData(res.data);
          console.log(res.data);
        });
    }
    return(
        <div>
            <h1>Get User</h1>
            <button onClick={getUser}>Submit</button>
            {data ? <h1>Welcome Back {data.firstName}</h1> : null}
        </div>
    )
    
    
}
