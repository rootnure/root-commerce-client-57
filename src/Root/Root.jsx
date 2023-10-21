import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';


const Root = () => {
    return (
        <>
            <Navbar />
            <main className='container mx-auto my-12'>
                <Outlet />
            </main>
        </>
    );
};

export default Root;