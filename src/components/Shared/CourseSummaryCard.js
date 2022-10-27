import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegBookmark,FaShareAlt,FaStar, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseSummaryCard = ({ course}) => {
    console.log(course)
    const { _id,title,total,total_view,author,details,image_url,rating} = course 
    return (
        <Card className='mb-5'>
      <Card.Header>
       <div className='d-flex justify-content-between align-items-center'>
       <div className='d-flex justify-content-center align-items-center'>
        <Image className='me-2' roundedCircle src={author?.img} style={{height:'60px'}}></Image>
        <div>
        <p className='fw-bold mb-0 text-secondary'>Course Instructor</p>
        <p className='fw-bold text-secondary'>{author?.name}</p>
        
        </div>
        </div>
        <div>
            <FaRegBookmark />
            <FaShareAlt className='ms-1' />
        </div>
       </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{ title} </Card.Title>
        <Card.Img variant ='top' src ={image_url} />  
        <Card.Text>
        { 
          details.length>200 ? <>{ details.slice(0,250)+ '....'}
        <Link to= {`/course/${_id} `}>Read More</Link>  
        </>:
         details
        } 
        </Card.Text>
        <Link to={'/checkout'}><Button variant="primary">Enroll</Button></Link>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div className=''>
        <FaStar className='text-warning me-2' />
        <span className='mt-2'>{rating.number}</span>
        </div>
        <div>
        <FaUserGraduate className='me-2' />
        <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
    );
};

export default CourseSummaryCard;