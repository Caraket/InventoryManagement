import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import registerUser from './RegisterUserForm';

export default class Register extends Component {
    render() {
        return (
            <div>
                <Link to="/registerUser">
                    <button>
                    Register User
                    </button>
                </Link>
            </div>
        )
    }
}
