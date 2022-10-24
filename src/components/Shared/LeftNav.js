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
             <h2>All Courses {courses.length}</h2>
             <div>
             {
               courses.map(course=><p key={course.id}>
                <Link>{course.name}</Link>
               </p>) 
            }
             </div>
        </div>
    );
};

export default LeftNav;