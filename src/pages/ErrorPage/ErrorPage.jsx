import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <>
            <h2>Oops!!! something went wrong...</h2>
            <Link to="/">Home</Link>
        </>
    );
};

export default ErrorPage;