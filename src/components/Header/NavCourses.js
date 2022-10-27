import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NavCourses = ({course}) => {
    const { _id,title,total,total_view,author,details,image_url,rating} = course 
    return (
        <div className='m-5'>
     <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='bg-dark text-white p-3'>
        {details}
        </Card.Text>
        <Link className='text-white' to='/checkout'><Button variant="secondary">Enroll</Button></Link>
      </Card.Body>
    </Card>
            
        </div>
    );
};

export default NavCourses;