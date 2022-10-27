import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError() 
    return (
        <div className='row'>
            <div className='col-md-8 offset-md-2 mt-5'>
            <h1 className='text-danger'>Oops!! An error occured</h1>
            <br />
            {
                error && (
                    <div className='text-danger fw-bold text-5xl'> Page {error.statusText || error.message}
                    <p className='text-danger fw-bold text-4xl'>{error.status}</p></div>
                ) 
            }
            </div>
        </div>
    );
};

export default ErrorPage;