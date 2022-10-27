import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import NavCourses from './NavCourses';

const AllCourses = () => {
    const allCourses = useLoaderData()
    return (
        
       <Container className='bg-success bg-gradient'>
         <Row>
            <Col>
            { 
            allCourses.map(course=><NavCourses
             key={course._id}
             course={course} 
            ></NavCourses>)
           }
            </Col>
         </Row>
       </Container>
       
    );
};

export default AllCourses;