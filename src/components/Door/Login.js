import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Hooks/AuthProvider';

const Login = () => {
    const [error,setError]= useState('') 
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate() 
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    
    const handleSubmit =(event)=>{
            event.preventDefault()
            const form = event.target
            const email = form.email.value
            const password = form.password.value
            signIn(email,password)
            .then(result=>{
                const user = result.user
                form.reset()
                setError('')
                navigate(from,{replace:true})
            })
            .catch(e=>{
                console.error(e)
                setError(e.message)
            })
    }
    return (

       <div>
       <h4 className='text-center text-secondary mt-3 fw-bold'>Please Login</h4>
        <div className='mx-auto w-5 mt-5 border border-light p-3 w-75'>
         <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password'  type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Form.Text className="text-danger">
          {error}
        </Form.Text>
    </Form>
       </div>
       </div>
    );
};

export default Login;
