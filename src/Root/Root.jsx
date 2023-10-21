import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Root = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>
            <Navbar />
            <main className='container mx-auto my-12'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;