import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Door/Login';
import Register from '../Door/Register';
import AllCourses from '../Header/AllCourses';
import Home from '../Main/Home';
import Main from '../Main/Main';
import Blog from '../Others/Blog';
import Profile from '../Others/Profile';
import Category from '../Pages/Category';
import Checkout from '../Pages/Checkout';
import Courses from '../Pages/Courses';
import TermsCodition from '../Pages/TermsCodition';
import ErrorPage from './ErrorPage';
import PrivateRoute from './PrivateRoute';

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:'/',
                element:<Home />,
                loader: ()=>fetch('https://learning-courses-server.vercel.app/courses')
            },
            {
                path:'/category/:id',
                element:<Category />,
                loader: ({params})=>fetch(`https://learning-courses-server.vercel.app/category/${params.id}`)               
            },
            {
                path:'/course/:id',
                element:<PrivateRoute><Courses></Courses></PrivateRoute>, 
                loader: ({params})=>fetch(`https://learning-courses-server.vercel.app/courses/${params.id}`)                
            },
            {
                path:'/checkout/',
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,                   
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
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>,                   
            },
            {
                path:'/allcourses',
                element:<AllCourses></AllCourses>,   
                loader: ()=>fetch('https://learning-courses-server.vercel.app/courses')                
            },
            {
                path:'/blog',
                element:<Blog />,   
                               
            },

        ]
    }
])

export default routes;