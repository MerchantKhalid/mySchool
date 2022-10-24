import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [courses,setcourses]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=>res.json())
        .then(data=>setcourses(data))
    },[])
    return (
        <div>
             <h4 className="text-bold text-secondary">All Courses</h4>
             <div>
             {
               courses.map(course=><p key={course.id}>
                <Link to={`/course/${course.id}`}>{course.name}</Link>
               </p>) 
            }
             </div>
        </div>
    );
};

export default LeftNav;