import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Home/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Services from "../Pages/Home/Services/Services";
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