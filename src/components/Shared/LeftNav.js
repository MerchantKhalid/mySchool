import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [category,setcategory]= useState([])

    useEffect(()=>{
        fetch('https://learning-courses-server.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setcategory(data))
    },[])
    return (
        <div>
             <h4 className="text-bold text-secondary">Course Category</h4>
             <div>
             {
               category.map(category=><p key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
               </p>) 
            }
             </div>
        </div>
    );
};

export default LeftNav;