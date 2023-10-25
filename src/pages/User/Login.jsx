import { useContext } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import GoogleLogin from "./GoogleLogin";
import { Helmet } from "react-helmet-async";


const Login = () => {

    const navigate = useNavigate();

    const { user, signIn } = useContext(AuthContext);

    if (user) {
        navigate('/');
    }

    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(() => {
                toast.success('Login Successfully');
                navigate(location.state || '/');
            })
            .catch(err => {
                if (err.message.includes('invalid')) {
                    toast.error('Wrong Email or Password!');
                } else {
                    toast.warn('Something went wrong. Try again.');
                }
            })
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleShowPassword = () => {
        const checkboxElement = document.getElementById('showPassword');
        const isChecked = checkboxElement.checked;
        isChecked ? setIsPasswordVisible(true) : setIsPasswordVisible(false);
    }

    return (
        <div className="p-8 rounded-2xl bg-[#ffa04128] shadow-2xl border-2 border-[#ffa041] backdrop-blur-[3px] text-orange-900 w-11/12 md:w-4/12">
            <Helmet>
                <title>Login | root</title>
            </Helmet>
            <h2 className="text-4xl uppercase text-center font-exo-2 font-bold">Please Login</h2>
            <p className="text-center font-exo-2 italic mt-2">Use your login credential to login</p>
            <form onSubmit={handleLogin} className="mt-4">
                <div>
                    <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-2 py-1.5 rounded text-black text-center" required />
                </div>
                <div className="mt-4">
                    <input type={isPasswordVisible ? "text" : "password"} name="password" id="password" placeholder="Your Password" className="w-full px-2 py-1.5 rounded text-black text-center" required />
                </div>
                <div className="mt-2 flex items-center gap-1">
                    <input type="checkbox" name="showPassword" id="showPassword" onChange={handleShowPassword} />
                    <label htmlFor="showPassword">Show Password</label>
                </div>
                <input type="submit" value="Login" className="mt-6 w-full py-2 rounded-md cursor-pointer font-bold duration-200 bg-orange-600 text-white hover:bg-white hover:text-orange-600" />
            </form>
            <div className="mt-4">
                <p>Don&apos;t have an account? <Link to="/user/register" className="duration-75 font-semibold hover:font-bold">Register</Link></p>
            </div>
            <GoogleLogin />
        </div>
    );
};

export default Login;
