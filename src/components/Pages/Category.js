import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard';

const Category = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h4>This Category has { courses.length} Course </h4>
            { courses.map(c=><CourseSummaryCard
                key={c._id}
                course={c}
            >

            </CourseSummaryCard>)}
        </div>
    );
};

export default Category;