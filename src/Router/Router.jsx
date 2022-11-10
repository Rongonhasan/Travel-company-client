import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CardDetails from "../Pages/CardDetails/CardDetails";
import AllService from "../Pages/Home/AllService/AllService";
import Blog from "../Pages/Home/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login/Login";

import SignUp from "../Pages/Home/SignUp/SignUp";


 const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('http://localhost:5000')
            },
            {
                path: '/services',
                element: <AllService></AllService>,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <CardDetails></CardDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
           
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
        ]
    
    }
 ])
 export default router;