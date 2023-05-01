import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [accepted, setAccepted] = useState(false);


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        setSuccess('');
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('User Created Successfully');
                UserUpdateProfile(loggedUser, name, photo)
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
    };

    const UserUpdateProfile = (currentUser, displayName, photoURL) => {
        updateProfile(currentUser, {
            displayName,
            photoURL,
        })
    };

    const handleTermsCondition = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register </h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name='name' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter Photo URL" name='photo' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleTermsCondition}
                        type="checkbox" name='accept' label={<>Accept <Link to={'/terms'}>Term & Conditions</Link></>} />
                </Form.Group>
                <Button variant="dark" type="submit"
                    disabled={!accepted}>
                    Register
                </Button>
                <div>
                    <Form.Text className='text-secondary'>
                        Already have an Account? <Link className='text-danger text-decoration-none' to={'/login'}>Login</Link>
                    </Form.Text>
                    <br />
                    <Form.Text className="text-success">
                        {success}
                    </Form.Text>
                    <br />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </div>
            </Form>
        </Container>
    );
};

export default Register;