import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const Root = () => {
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