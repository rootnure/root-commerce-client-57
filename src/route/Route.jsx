import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Brand from "../pages/Brand/Brand";
import AddProduct from "../pages/AddProduct/AddProduct";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";


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
                path: '/:brand',
                element: <Brand />,
                loader: ({ params }) => fetch(`https://57-root-server.vercel.app/products/${params.brand}`),
            },
            {
                path: '/add-product',
                element: <AddProduct />,
            },
            {
                path: '/details/:id',
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`https://57-root-server.vercel.app/product/${params.id}`),
            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct />,
                loader: ({ params }) => fetch(`https://57-root-server.vercel.app/product/${params.id}`),
            },
            {
                path: '/myCart/',
                element: <MyCart />,
            },
            {
                path: '/profile',
                element: <div>User profile</div>,
            },

        ]
    },
]);

export default router;