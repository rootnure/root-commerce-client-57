import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Brand from "../components/Brand/Brand";


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
                element: <div>Add new product</div>,
                loader: () => fetch('https://57-root-server.vercel.app/brands'),
                // loader: () => fetch('https://57-root-server.vercel.app/types'),
            },
            {
                path: '/details/:id',
                element: <div>product details page</div>,
                loader: ({ params }) => fetch(`https://57-root-server.vercel.app/product/${params.id}`),
            },
            {
                path: '/update/:id',
                element: <div>Update product details page</div>,
                loader: ({ params }) => fetch(`https://57-root-server.vercel.app/product/${params.id}`),
            },
            {
                path: '/cart/:email',
                element: <div>User cart items</div>,
                loader: ({ params }) => fetch(`https://57-root-server.vercel.app/cart/${params.email}`),
            },

        ]
    },
]);

export default router;