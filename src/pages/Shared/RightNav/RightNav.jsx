import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';
import './RightNav.css'

const RightNav = () => {
    return (
        <div>
            <h4 className='fw-bold mb-3'>Login With</h4>
            <Button variant="outline-primary" className='w-100'><FaGoogle /> Login With Google</Button>
            <Button variant="outline-dark" className='mt-2 w-100'><FaGithub /> Login With Github</Button>

            <div className='my-5 '>
                <h4 className='fw-bold mb-3'>Find Us On</h4>
                <ListGroup>
                    <button className='bg-body border-0 p-0'><ListGroup.Item><FaFacebook className='me-2 text-primary'></FaFacebook>Facebook</ListGroup.Item></button>
                    <button className='bg-body border-0 p-0'><ListGroup.Item><FaTwitter className='me-2 text-info'></FaTwitter>Twitter</ListGroup.Item></button>
                    <button className='bg-body border-0 p-0'><ListGroup.Item><FaInstagram className='me-2 text-danger'></FaInstagram>Instagram</ListGroup.Item></button>
                </ListGroup>
            </div>

            <QZone></QZone>

            <div className='bg-img my-5 text-center px-4 py-5'>
                <h2 className='fw-bold mb-3 text-white'>Create an Amazing Newspaper</h2>
                <p className='text-white my-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button className='rounded-0 fs-5' variant='danger'>Learn More</Button>

            </div>
        </div>
    );
};

export default RightNav;