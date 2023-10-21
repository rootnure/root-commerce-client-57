import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <h2>Oops!!! something went wrong...</h2>
            <Link to="/">Home</Link>
            <Footer />
        </>
    );
};

export default ErrorPage;