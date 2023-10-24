import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-[600px] flex flex-col justify-center items-center">
                <img src="https://i.ibb.co/bsv2B8z/error.gif" alt="Error GIF" />
                <h3 className="text-orange-600 text-2xl font-pacifico my-6">Oops!!! Something went wrong...</h3>
                <Link to="/" className="mt-4 px-2 py-1 border border-orange-600 rounded-md cursor-pointer font-bold duration-200 bg-orange-600 text-white hover:bg-white hover:text-orange-600">Back to Home</Link>
            </main>
            <Footer />
        </>
    );
};

export default ErrorPage;