import { IoMdHome, IoIosPeople, IoMdPerson, IoIosLogIn, IoIosLogOut, IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

    const handleLogOut = () => {
        console.log('logout clicked');
    }

    const links = <>
        <NavLink to="/" title="Home" className="root-nav-btn">
            <IoMdHome></IoMdHome>
        </NavLink>
        {isNaN("user") ? <>
            <NavLink to="/add-product" title="Add new product" className="root-nav-btn">
                <IoMdAddCircleOutline></IoMdAddCircleOutline>
            </NavLink>
            <NavLink to="/users" title="All Users" className="root-nav-btn">
                <IoIosPeople></IoIosPeople>
            </NavLink>
            <NavLink to="/profile" title="My Profile" className="root-nav-btn">
                <IoMdPerson></IoMdPerson>
            </NavLink>
            <button onClick={handleLogOut} title="logout" className="root-nav-btn">
                <IoIosLogOut></IoIosLogOut>
            </button>
        </> : ''}
        {isNaN("user") ? <>
            <NavLink to="/register" title="Register a new account" className="root-nav-btn">
                <AiOutlineUserAdd></AiOutlineUserAdd>
            </NavLink>
            <NavLink to="/login" title="Login" className="root-nav-btn">
                <IoIosLogIn></IoIosLogIn>
            </NavLink>
        </> : ''}
    </>

    return (
        <header style={{ backgroundImage: 'url("https://i.ibb.co/TRb60nH/10.png")' }} className="bg-cover flex justify-between px-12 items-center">
            <section className="flex items-center py-4 gap-4">
                <img src="https://i.ibb.co/BcFXThK/logo-bg-removed.png" alt="Website Logo" className="h-9" />
                {/* <h2 className="text-5xl font-semibold font-pacifico">root</h2> */}
            </section>
            <section className="flex justify-center items-center gap-2 md:gap-3 lg:gap-4 py-2">
                {
                    links
                }
            </section>
        </header>
    );
};

export default Navbar;