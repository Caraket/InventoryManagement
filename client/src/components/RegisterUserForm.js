import React, { Component } from 'react'

import axios from 'axios';

export default class RegisterUserForm extends Component {

    componentDidMount() {
        axios.post('localhost:5000/users/register', {
            firstName: '',
            lastName: '', 
            username: '',
            email: '',
            password: '', 
            password2: ''
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" className="form-control" id="lastName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" className="form-control" id="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Verify Password:</label>
                        <input type="password" className="form-control" id="password2" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
