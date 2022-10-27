import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const Checkout = () => {
    const navigate = useNavigate() 

    const handleSubmit =(event)=>{
       event.preventDefault()
           
    } 
    const handleOrder =()=>{
        toast.success('Successfully Enrolled')
        navigate('/')
           
    } 
    return (
        <div>
       <h4 className='text-center text-secondary mt-3 fw-bold'>Final Step</h4>
        <div className='mx-auto w-5 mt-5 border border-light p-3 w-75'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control required name="name"  type="text" placeholder="your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required name="email"  type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control required name="address"  type="text" placeholder="Your Address" />
      </Form.Group>
      

      
      
      <Button onClick={handleOrder} className='w-full' variant="primary" type="submit">
        Place Order
      </Button>
      
    </Form>
       </div>
       </div>
    );
};

export default Checkout;