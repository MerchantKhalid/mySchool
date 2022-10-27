import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  FaUser } from 'react-icons/fa';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Hooks/AuthProvider';
import LeftNav from '../Shared/LeftNav';

const Header = () => {
  const {user,logOut}= useContext(AuthContext)
  const navigate = useNavigate() 
  const hadleLogOut = ()=>{
    navigate('/')
    logOut()

    .then(()=>{})
    .catch(error=>console.error(error))

  }

    return (
        <div className='mb-5'>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link className='fw-bold text-white text-decoration-none' to='/'>Udemy</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='fw-bold text-white text-decoration-none' to='/allcourses'>Courses</Link>
            <Link className='fw-bold text-white text-decoration-none ms-2 ' to='/blog'>Blog</Link>

            
          </Nav>
          <Nav>
            <>
            {
              user?.uid ? <>
              <span className='text-white'>{user?.displayName}</span>
              <button onClick={hadleLogOut} className='btn btn-sm btn-outline-dark text-white'>Logout</button>
              </>
              :
              <>
                <Link className='ms-2 fw-bold text-white text-decoration-none' to='/login'>Login</Link>
                <Link className='ms-2 fw-bold text-white text-decoration-none' to='/register'>Register</Link>
              </>

              }
            </>
            <Link className='ms-2' to='/profile'>
            {user?.photoURL?
            <Image style={{height:'30px'}} roundedCircle src={user?.photoURL} /> : <FaUser className='text-white' /> }
            </Link>
          </Nav>
              <div className='d-lg-none d-block mt-3'>
                 <LeftNav />
              </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
            
        </div>
    );
};

export default Header;