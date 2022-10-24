import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Main/Home';
import Main from '../Main/Main';

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />,
            }
        ]
    }
])

export default routes;