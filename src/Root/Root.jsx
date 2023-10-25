import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>
            <Navbar />
            <main className='container mx-auto md:my-12 bg-cyan-50'>
                <Outlet />
            </main>
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="colored"
            />
        </>
    );
};

export default Root;