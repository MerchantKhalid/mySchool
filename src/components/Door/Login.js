import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Hooks/AuthProvider';

const Login = () => {
    const [error,setError]= useState('') 
    const {signIn,setLoading} = useContext(AuthContext)
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
                if(user.emailVerified){
                  navigate(from,{replace:true})
                }
                else{
                  toast.error('Please Verify Your Email')
                }

               
            })
            .catch(e=>{
                console.error(e)
                setError(e.message)
            })
            .finally(()=>{
              setLoading(false)
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
