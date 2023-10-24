import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        console.log('register clicked');
    }

    const handleShowPassword = () => {
        const checkboxElement = document.getElementById('showPassword');
        const isChecked = checkboxElement.checked;
        isChecked ? setIsPasswordVisible(true) : setIsPasswordVisible(false);
    }

    return (
        <div className="p-8 rounded-2xl bg-[#ffa04128] shadow-2xl border-2 border-[#ffa04188] backdrop-blur-[3px] text-white w-4/12">
            <h2 className="text-4xl uppercase text-center font-exo-2 font-bold">Please Register</h2>
            <p className="text-center font-exo-2 italic mt-2">Register now to get in touch</p>
            <form onSubmit={handleRegister} className="mt-4">
                <div className="mt-4">
                    <input type="text" name="fullName" id="fullName" placeholder="Your Full Name" className="w-full px-2 py-1.5 rounded text-black text-center" />
                </div>
                <div className="mt-4">
                    <input type="text" name="photoURL" id="photoURL" placeholder="Profile Photo (Direct Link)" className="w-full px-2 py-1.5 rounded text-black text-center" />
                </div>
                <div className="mt-4">
                    <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-2 py-1.5 rounded text-black text-center" />
                </div>
                <div className="mt-4">
                    <input type={isPasswordVisible ? "text" : "password"} name="password" id="password" placeholder="Your Password" className="w-full px-2 py-1.5 rounded text-black text-center" />
                </div>
                <div className="mt-2 flex items-center gap-1">
                    <input type="checkbox" name="showPassword" id="showPassword" onChange={handleShowPassword} />
                    <label htmlFor="showPassword">Show Password</label>
                </div>
                <input type="submit" value="Login" className="mt-6 w-full py-2 rounded-md cursor-pointer font-bold duration-200 bg-orange-600 text-white hover:bg-white hover:text-orange-600" />
            </form>
            <div className="text-orange-900 mt-4">
                <p>Already have an account? <Link to="/user/login" className="duration-75 hover:font-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;