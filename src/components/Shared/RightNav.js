import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaSnapchat,FaWhatsapp,FaInstagram,FaYoutube,FaArrowDown} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from './BrandCarousel';
import { AuthContext } from '../Hooks/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const RightNav = () => {
 
    const {providerLogin}= useContext(AuthContext)
    const navigate = useNavigate() 
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider();
    // google
    const hadleGoogleSigIn = ()=>{
        providerLogin(googleProvider)
        navigate(from,{replace:true})
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>console.error(error))
    }
    return (
        <div>
           <ButtonGroup vertical>
                <Button onClick={hadleGoogleSigIn} variant="outline-primary" className='mb-2 text-dark'><FaGoogle className='text-primary' /> LogIn With Google</Button>
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