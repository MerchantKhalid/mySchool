import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  FaUser } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { AuthContext } from '../Hooks/AuthProvider';
import LeftNav from '../Shared/LeftNav';

const Header = () => {
  const {user,logOut}= useContext(AuthContext)
  const hadleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))

  }

    return (
        <div className='mb-5'>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link className='text-white' to='/'>School</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Courses</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
            {
              user?.uid ? <>
              <span className='text-white'>{user?.displayName}</span>
              <button onClick={hadleLogOut} className='btn btn-sm btn-outline-dark text-white'>Logout</button>
              </>
              :
              <>
                <Link to='/login'>Login</Link>
                <Link className='ms-2' to='/register'>Register</Link>
              </>

              }
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {user?.photoURL?
            <Image style={{height:'30px'}} roundedCircle src={user?.photoURL} /> : <FaUser /> }
            </Nav.Link>
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