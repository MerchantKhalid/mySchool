import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaSnapchat,FaWhatsapp,FaInstagram,FaYoutube,FaArrowDown} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from './BrandCarousel';

const RightNav = () => {
    return (
        <div>
           <ButtonGroup vertical>
                <Button variant="outline-primary" className='mb-2 text-dark'><FaGoogle className='text-primary' /> LogIn With Google</Button>
                <Button variant="outline-dark"><FaGithub /> LogIn With GitHub</Button>
           </ButtonGroup>

           <div>
                <h5 className='mt-4 mb-4'>Find Us On <FaArrowDown /></h5>
                <ListGroup>
                    <ListGroup.Item className="mb-2"><FaWhatsapp /> Whats'App</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaSnapchat/> Snapchat</ListGroup.Item>
                    <ListGroup.Item className="mb-2"><FaYoutube /> YouTube</ListGroup.Item>
      
                </ListGroup>
           </div>

           <div className='mt-5'>
             <BrandCarousel />
           </div>
        </div>
    );
};

export default RightNav;