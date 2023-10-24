import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Brand from "../pages/Brand/Brand";
import AddProduct from "../pages/AddProduct/AddProduct";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/User/Login";
import Register from "../pages/User/register";
import User from "../pages/User/User";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/brand/:brand',
                element: <Brand />,
                loader: ({ params }) => fetch(`https://57-root-server.vercel.app/products/${params.brand}`),
            },
            {
                path: '/add-product',
                element: <PrivateRoute><AddProduct /></PrivateRoute>,
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ProductDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://57-root-server.vercel.app/product/${params.id}`),
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://57-root-server.vercel.app/product/${params.id}`),
            },
            {
                path: '/myCart/',
                element: <PrivateRoute><MyCart /></PrivateRoute>,
            },
            {
                path: '/profile',
                element: <div>User profile</div>,
            },
            {
                path: '/user',
                element: <User />,
                children: [
                    {
                        path: '/user/register',
                        element: <Register />,
                    },
                    {
                        path: '/user/login',
                        element: <Login />,
                    },
                ]
            },
        ]
    },
]);

export default router;