import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='my-5'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex gap-2 bg-secondary p-2'>
                <Button variant="danger" className='rounded-0'>Latest</Button>
                <Marquee speed={100} className='text-white'>
                    I can be a React component, multiple React components, or just some text.news this is a braking.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;