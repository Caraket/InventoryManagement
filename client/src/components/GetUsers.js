import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/users')
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
        })
    }

    render() {
        return(
            <ul>
                {this.state.persons.map(person => <li>{person.firstName + " " + person.lastName}</li>)}
            </ul>
        )
    }
}
