import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const course = useLoaderData()
    return (
        <div>
            <h4>This Category has { course.length} Course </h4>
        </div>
    );
};

export default Category;