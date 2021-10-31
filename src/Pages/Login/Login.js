import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
import { FaGoogle } from 'react-icons/fa';


const Login = () => {

    const { signInUsingGoogle, handleLogin } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div>
            <Container className="login-content">
                <h3>Please Login with Google</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" disabled />
                    </Form.Group>


                    <div className="login-btn">
                        <Button variant="success" type="submit" onClick={handleLogin} disabled>
                            Sign in
                        </Button>
                        <span className="or">OR</span>
                        <Button variant="primary" className="signin-btn " onClick={handleGoogleLogin} >
                            <div className="g-btn">
                                <FaGoogle></FaGoogle>
                            </div>
                            <div>
                                Sign in with Google
                            </div>
                        </Button>
                    </div>

                </Form>
            </Container>
        </div>
    );
};

export default Login;