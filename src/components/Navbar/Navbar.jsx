import { IoMdHome, IoIosCart, IoIosLogIn, IoIosLogOut, IoMdAddCircleOutline, IoMdSunny, IoMdMoon } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import './Navbar.css';
// import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
// import useTheme from "../../hooks/useTheme";

const Navbar = () => {

    // const { toggleTheme, isDarkMode } = useTheme();
    const isDarkMode = false;
    const navigate = useNavigate();

    const { user, logOut } = useContext(AuthContext);
    // const { email } = user || '';

    // let cartTotalItems = 0;
    // const [cartData, setCartData] = useState({});
    // useEffect(() => {
    //     fetch(`https://57-root-server.vercel.app/cart/${email}`)
    //         .then(res => res.json())
    //         .then(data => setCartData(data))
    // }, [email]);
    // for (const itemId in cartData) {
    //     cartTotalItems += parseInt(cartData[itemId]);
    // }

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logout Successfully');
                navigate('/');
            })
            .catch(() => {
                toast.warn('Something went wrong. Please try again.');
            })
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
                {/* <span className="indicator-item badge badge-secondary bg-orange-600">{cartTotalItems}</span> */}
                <IoIosCart></IoIosCart>
            </NavLink>
            <div className="root-nav-btn !border-0 !px-0 hover:!bg-transparent flex dropdown dropdown-end" title={`Profile of ${user.displayName}`}>
                <label tabIndex={0} className="btn bg-transparent hover:bg-transparent pl-0 pr-0 border-0 h-auto min-h-fit">
                    <img src={user.photoURL} alt="User Profile Picture" className="w-8 h-8 rounded-full" />
                </label>
                <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 border mt-8 bg-white dark:bg-black text-orange-600">
                    <li className="font-bold text-center text-black dark:text-orange-600">{user?.displayName}</li>
                    <li className="text-center text-gray-400 mt-2 mb-1">{user?.email}</li>
                    <li>
                        <NavLink to="/profile" title="My Profile" className="text-center block hover:font-semibold hover:text-orange-600">My Profile</NavLink>
                    </li>
                </ul>
            </div>
            <button onClick={handleLogOut} title="logout" className="root-nav-btn border-orange-600 dark:border-white">
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
    </>

    return (
        <>
            {/* <header style={{ backgroundImage: `url("https://i.ibb.co/${isLightMode ? 'TRb60nH/10.png' : '4827d4m/7.png'}")` }} className="bg-cover flex justify-between px-12 items-center"> */}
            <header className="bg-cover flex justify-between px-6 md:px-12 items-center bg-nav-light dark:bg-nav-dark">
                <section>
                    <Link to='/' className="flex items-center py-4 gap-2">
                        <img src={`https://i.ibb.co/${isDarkMode ? '30ZpCGQ/logo-dark-bg-removed.png' : 'BcFXThK/logo-bg-removed.png'}`} alt="Website Logo" className="h-9" />
                        <h2 className="text-4xl font-pacifico text-orange-600">Commerce</h2>
                    </Link>
                </section>

                <section className="flex gap-x-2 items-center">
                    {/* navbar for large devices */}
                    <nav className="md:flex justify-center items-center gap-3 py-2 hidden">
                        {
                            links
                        }
                    </nav>
                    {/* <div onClick={() => toggleTheme()}> */}
                    <div className="flex items-center">
                        <label className="swap swap-rotate">
                            <input type="checkbox" />
                            <IoMdSunny className="swap-on fill-current h-8 w-8 p-1.5 rounded-full bg-white text-orange-600"></IoMdSunny>
                            <IoMdMoon className="swap-off fill-current h-8 w-8 p-1.5 rounded-full bg-gray-600 text-white"></IoMdMoon>
                        </label>
                    </div>
                </section>
            </header>

            {/* navbar for mobile & tablet view */}
            <section className="md:hidden">
                <nav className="h-12 z-[999] flex justify-around items-center w-full fixed bottom-0 bg-nav-light font-semibold">
                    <NavLink to="/" className="flex flex-col items-center">
                        <IoMdHome className="text-lg"></IoMdHome>
                        <p className="text-xs">Home</p>
                    </NavLink>
                    {user ? <>
                        <NavLink to="/add-product" className="flex flex-col items-center">
                            <IoMdAddCircleOutline className="text-lg"></IoMdAddCircleOutline>
                            <p className="text-xs">Add Product</p>
                        </NavLink>
                        <NavLink to="/profile" className="flex flex-col items-center">
                            <img src={user.photoURL} alt="User Profile Picture" className="w-5 h-5 rounded-full" />
                            <p className="text-xs normal-case">My Profile</p>
                        </NavLink>
                        <NavLink to="/myCart" className="flex flex-col items-center">
                            <IoIosCart className="text-lg"></IoIosCart>
                            <p className="text-xs">Cart</p>
                        </NavLink>
                        <button onClick={handleLogOut} className="flex flex-col items-center">
                            <IoIosLogOut className="text-lg"></IoIosLogOut>
                            <p className="text-xs">Log Out</p>
                        </button>
                    </> : ''}
                    {!user ? <>
                        <NavLink to="/user/register" className="flex flex-col items-center">
                            <AiOutlineUserAdd className="text-lg"></AiOutlineUserAdd>
                            <p className="text-xs">Register</p>
                        </NavLink>
                        <NavLink to="/user/login" className="flex flex-col items-center">
                            <IoIosLogIn className="text-lg"></IoIosLogIn>
                            <p className="text-xs">Login</p>
                        </NavLink>
                    </> : ''}
                </nav>
            </section>
        </>
    );
};

export default Navbar;