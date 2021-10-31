import React from 'react';
import { Nav, Navbar, NavDropdown, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css'
import useAuth from '../../../Hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="navigation">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                <Container>
                    <div>
                        <Navbar.Brand as={Link} to="/home">Travele</Navbar.Brand>
                    </div>

                    <div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto links">
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                {/* <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}
                                {
                                    user.email ?
                                        <div className="dropwdown-menu">
                                            <div className="dropwdown-menu">
                                                <NavDropdown className="dropwdown-menu" title="Offers" id="collasible-nav-dropdown">
                                                    <NavDropdown.Item as={Link} to="/allorder">All Offers</NavDropdown.Item>
                                                    <NavDropdown.Item as={Link} to="/addoffer">Add An Offer</NavDropdown.Item>
                                                </NavDropdown>
                                                <Nav.Link as={Link} to="/myorder">My Orders</Nav.Link>
                                            </div>
                                            <div>
                                                <Button onClick={logOut} variant="primary">Log out</Button>
                                            </div>

                                        </div>

                                        :

                                        <Nav.Link as={Link} to="/login">
                                            <Button variant="primary">Log in</Button>
                                        </Nav.Link>
                                }
                                <Navbar.Text>
                                    {
                                        user.email && <div>
                                            <div>
                                                <small className="login-photo">{user.displayName}</small>
                                                {/* <img className="login-photo" src={user.displayName} alt="" /> */}
                                            </div>
                                        </div>
                                    }
                                </Navbar.Text>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;