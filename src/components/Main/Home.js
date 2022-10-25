import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard';

const Home = () => {
    const allCourses = useLoaderData()
    return (
        <div>
           <h2>Total Courses {allCourses.length} </h2> 
           { 
            allCourses.map(course=><CourseSummaryCard
             key={course._id}
             course={course} 
            ></CourseSummaryCard>)
           }
        </div>
    );
};

export default Home;