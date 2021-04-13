import React, { Component } from 'react';
import axios from 'axios';

export default class RegisterUser extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        isLoading: false, 
    }

    registerUser() {
        this.setState({ isLoading: true });

        axios.post("http://localhost:5000/users/register")
            .then()

    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
