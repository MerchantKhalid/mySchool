import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Door/Login';
import Register from '../Door/Register';
import Home from '../Main/Home';
import Main from '../Main/Main';
import Category from '../Pages/Category';
import Checkout from '../Pages/Checkout';
import Courses from '../Pages/Courses';
import TermsCodition from '../Pages/TermsCodition';
import PrivateRoute from './PrivateRoute';

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
                element:<PrivateRoute><Courses></Courses></PrivateRoute>, 
                loader: ({params})=>fetch(`http://localhost:5000/courses/${params.id}`)                
            },
            {
                path:'/checkout',
                element:<Checkout />,                   
            },
            {
                path:'/login',
                element:<Login />,                   
            },
            {
                path:'/register',
                element:<Register/>,                   
            },
            {
                path:'/terms',
                element:<TermsCodition />,                   
            },

        ]
    }
])

export default routes;