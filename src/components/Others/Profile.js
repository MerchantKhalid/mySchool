import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Hooks/AuthProvider';

const Profile = () => {
    const {user}= useContext(AuthContext)
    const [name,setName]= useState(user.displayName)
    const photoURLref= useRef(user.photoURL)

    const handleSubmit= event=>{
        event.preventDefault()
    }

    const handleChangeName= (event)=>{
        setName(event.target.value)
    }
    return (
        <div>
        <h4 className='text-center text-secondary mt-3 fw-bold'>Dear {user.displayName} </h4>
         <div className='mx-auto w-5 mt-5 border border-light p-3 w-75'>
     <Form onSubmit={handleSubmit}>
       
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control name="email" readOnly defaultValue = {user?.email} type="email" placeholder="Enter email" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Your Name</Form.Label>
         <Form.Control onChange={handleChangeName} name="name" defaultValue = {name} type="text" placeholder="Enter email" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>photoURL</Form.Label>
         <Form.Control ref={photoURLref} defaultValue = {user?.photoURL} name="photoURL" type="text" placeholder="Photo Url" />
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control name="password"  type="password" placeholder="Password" />
       </Form.Group>
       
       <Button variant="primary" type="submit">
         submit
       </Button>
       
     </Form>
        </div>
        </div>
    );
};

export default Profile;