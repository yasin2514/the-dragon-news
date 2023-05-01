import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae eligendi laudantium voluptatum eveniet enim labore eum in perspiciatis, impedit fugiat?</p>
            <ol type='number'>
                <li>lorem5</li>
                <li>lorem5</li>
                <li>lorem5</li>
                <li>lorem5</li>
                <li>lorem5</li>
            </ol>
            <p>Go back to <Link to={'/register'}>Register</Link> </p>
        </Container>
    );
};

export default Terms;