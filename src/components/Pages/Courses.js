import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {
    const course = useLoaderData()
    const {title,image_url,details,category_id} = course
    return (
        <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {details}
        </Card.Text>
        <Link to={'/checkout'}>
            <Button>Checkout</Button>
        </Link>
      </Card.Body>
    </Card>
    );
};

export default Courses;