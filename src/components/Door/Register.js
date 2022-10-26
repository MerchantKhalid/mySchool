import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Hooks/AuthProvider';

const Register = () => {
  const [error,setError]= useState('') 
  const [accepted,setAccepted]= useState(false) 

    const {createUser,userUpdateProfile,verifyEmail} = useContext(AuthContext)

    const handleSubmit = event=>{
        event.preventDefault()
        const form= event.target
        const name= form.name.value 
        const email= form.email.value 
        const photoURL= form.photoURL.value 
        const password= form.password.value 

        createUser(email,password)
        .then(result=>{
            const user= result.user
            setError('')
            form.reset()
            handleUpdateUser(name,photoURL)
            handleVerifyEmail()
            toast.success('Please Verify Your Email.')

        })
        .catch(error=>{
          console.error(error)
          setError(error.message)
        })
    } 
    //update user profile
    const handleUpdateUser =(name,photoURL)=>{
      const profile={
        displayName:name,
        photoURL:photoURL
      }
      userUpdateProfile(profile)
      .then(()=>{})
      .catch(e=>console.error(e))

    }

    const handleAccepted = (event)=>{
      setAccepted(event.target.checked)
    }

    const handleVerifyEmail=()=>{
      verifyEmail()
      .then(()=>{})
      .catch(e=>console.error(e))
    }
    return (
        <div>
       <h4 className='text-center text-secondary mt-3 fw-bold'>Please Register</h4>
        <div className='mx-auto w-5 mt-5 border border-light p-3 w-75'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name"  type="text" placeholder="your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email"  type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>photoURL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Photo Url" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password"  type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" onClick={handleAccepted} label={<>Accept <Link to="/terms">Terms & Coditions</Link> </>} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <Form.Text className="text-danger">
          {error}
        </Form.Text>
    </Form>
       </div>
       </div>
    );
};

export default Register;