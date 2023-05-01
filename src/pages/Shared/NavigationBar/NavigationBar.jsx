import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const handleLogOUt = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="" variant="light" className='my-4'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto d-flex gap-4">
                            <Link to={'/category/0'} className='text-secondary text-decoration-none'>Home</Link>
                            <Link className='text-secondary text-decoration-none' href="#pricing">About</Link>
                            <Link className='text-secondary text-decoration-none' href="#career">Career</Link>
                        </Nav>
                        <Nav className='d-flex align-items-center gap-2'>
                            {
                                user &&
                                <Image style={{
                                    width: "40px",
                                    height: "40px"
                                }} alt={user?.displayName} src={user?.photoURL} title={user?.displayName} roundedCircle />

                            }
                            {
                                user ?
                                    <Button variant="dark" onClick={handleLogOUt}>Logout</Button> :
                                    <Link to={'/login'}><Button variant="dark">Login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;