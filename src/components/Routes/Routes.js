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
            },
            {
                path:'/category/:id',
                element:<Category />                
            },
            {
                path:'/course/:id',
                element:<Courses />                
            },

        ]
    }
])

export default routes;