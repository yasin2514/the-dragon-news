import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login </h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Login
                </Button>
                <div>
                    <Form.Text className='text-secondary'>
                        Don't Have an Account? <Link className='text-danger text-decoration-none' to={'/register'}>Register</Link>
                    </Form.Text>
                    <br />
                    <Form.Text className="text-success">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <br />
                    <Form.Text className="text-danger">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </div>
            </Form>
        </Container>
    );
};

export default Login;