import React from 'react';
import {BrowserRouter as Router,
Switch, 
Route,
} from "react-router-dom";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Home from '../Home';
import AboutUs from '../AboutUs';
import Inventory from '../Invenory';
import Users from '../Users';
import RegisterUserForm from '../components/RegisterUserForm';

export default function NavigationBar() {


    return(
        <div>
            <div className="col-md-12">
                <Router>
                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <Navbar.Brand href="#Home">React Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about-us">About Us</Nav.Link>
                                    <Nav.Link href="/inventory">Inventory</Nav.Link>
                                    <Nav.Link href="/users">Users</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form>
                        </Navbar.Collapse>
                    </Navbar>
                    <br />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about-us">
                            <AboutUs />
                        </Route>
                        <Route path="/inventory">
                            <Inventory />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/registerUser">
                            <RegisterUserForm />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}