import { IoMdHome, IoIosCart, IoMdPerson, IoIosLogIn, IoIosLogOut, IoMdAddCircleOutline, IoMdSunny, IoMdMoon } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
// import useTheme from "../../hooks/useTheme";

const Navbar = () => {

    // const { toggleTheme, isDarkMode } = useTheme();
    const isDarkMode = false;

    const { user } = useContext(AuthContext);
    const { email } = user || '';

    let cartTotalItems = 0;
    const [cartData, setCartData] = useState({});
    useEffect(() => {
        fetch(`https://57-root-server.vercel.app/cart/${email}`)
            .then(res => res.json())
            .then(data => setCartData(data))
    }, [email]);
    for (const itemId in cartData) {
        cartTotalItems += parseInt(cartData[itemId]);
    }

    const handleLogOut = () => {
        console.log('logout clicked');
    }

    const links = <>
        <NavLink to="/" title="Home" className="root-nav-btn border-black dark:border-white">
            <IoMdHome></IoMdHome>
        </NavLink>
        {user ? <>
            <NavLink to="/add-product" title="Add new product" className="root-nav-btn border-black dark:border-white">
                <IoMdAddCircleOutline></IoMdAddCircleOutline>
            </NavLink>
            <NavLink to="/myCart" title="My Cart" className="root-nav-btn border-black dark:border-white indicator">
                <span className="indicator-item badge badge-secondary bg-orange-600">{cartTotalItems}</span>
                <IoIosCart></IoIosCart>
            </NavLink>
            <NavLink to="/user/profile" title="My Profile" className="root-nav-btn border-black dark:border-white">
                <IoMdPerson></IoMdPerson>
            </NavLink>
            <button onClick={handleLogOut} title="logout" className="root-nav-btn border-black dark:border-white">
                <IoIosLogOut></IoIosLogOut>
            </button>
        </> : ''}
        {!user ? <>
            <NavLink to="/user/register" title="Register a new account" className="root-nav-btn border-black dark:border-white">
                <AiOutlineUserAdd></AiOutlineUserAdd>
            </NavLink>
            <NavLink to="/user/login" title="Login" className="root-nav-btn border-black dark:border-white">
                <IoIosLogIn></IoIosLogIn>
            </NavLink>
        </> : ''}
        {/* <div onClick={() => toggleTheme()}> */}
        <div>
            <label className="swap swap-rotate">
                <input type="checkbox" />
                <IoMdSunny className="swap-on fill-current h-8 w-8 text-white"></IoMdSunny>
                <IoMdMoon className="swap-off fill-current h-8 w-8 text-orange-600"></IoMdMoon>
            </label>
        </div>
    </>

    return (
        // <header style={{ backgroundImage: `url("https://i.ibb.co/${isLightMode ? 'TRb60nH/10.png' : '4827d4m/7.png'}")` }} className="bg-cover flex justify-between px-12 items-center">
        <header className="bg-cover flex justify-between px-12 items-center bg-nav-light dark:bg-nav-dark">
            <section className="flex items-center py-4 gap-2">
                <img src={`https://i.ibb.co/${isDarkMode ? '30ZpCGQ/logo-dark-bg-removed.png' : 'BcFXThK/logo-bg-removed.png'}`} alt="Website Logo" className="h-9" />
                <h2 className="text-4xl font-pacifico text-orange-600">Commerce</h2>
            </section>
            <nav className="flex justify-center items-center gap-3 py-2">
                {
                    links
                }
            </nav>
        </header>
    );
};

export default Navbar;