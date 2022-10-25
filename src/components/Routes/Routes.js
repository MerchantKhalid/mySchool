import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Main/Home';
import Main from '../Main/Main';
import Category from '../Pages/Category';
import Courses from '../Pages/Courses';

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />,
                loader: ()=>fetch('http://localhost:5000/courses')
            },
            {
                path:'/category/:id',
                element:<Category />,
                loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)               
            },
            {
                path:'/course/:id',
                element:<Courses />, 
                loader: ({params})=>fetch(`http://localhost:5000/courses/${params.id}`)                
            },

        ]
    }
])

export default routes;