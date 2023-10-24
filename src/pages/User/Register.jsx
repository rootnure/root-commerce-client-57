import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import GoogleLogin from "./GoogleLogin";
import { Helmet } from "react-helmet-async";


const Register = () => {

    const { createUser, updateInfo, logOut } = useContext(AuthContext);

    const navigate = useNavigate();
    const [passwordWarnMsg, setPasswordWarnMsg] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.displayName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(() => {
                updateInfo(displayName, photoURL)
                    .then(() => {
                        logOut();
                        let timerInterval;
                        Swal.fire({
                            icon: "success",
                            title: 'Registered successfully!',
                            html: 'Will redirect to login page in <b></b> seconds.',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: () => {
                                const b = Swal.getHtmlContainer().querySelector('b')
                                timerInterval = setInterval(() => {
                                    b.textContent = (Swal.getTimerLeft() / 1000).toFixed(1)
                                }, 100)
                            },
                            willClose: () => {
                                clearInterval(timerInterval)
                            }
                        }).then(navigate('/user/login'))
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleValidPassword = () => {
        setPasswordWarnMsg('');
        const submitBtn = document.querySelector('input[value="Register"]');
        const password = document.querySelector('input[name="password"]').value;
        if (password.length < 6) {
            submitBtn.setAttribute('disabled', true);
            setPasswordWarnMsg('Password must be at lest 6 character long');
        } else if (!/[A-Z]/.test(password)) {
            submitBtn.setAttribute('disabled', true);
            setPasswordWarnMsg('Password must contain at lest one UPPERCASE (A-Z) character');
        } else if (!/[0-9]/.test(password)) {
            submitBtn.setAttribute('disabled', true);
            setPasswordWarnMsg('Password must contain at lest one digit (0-9)');
        } else if (!/[!@#$%^&*()_+\-=[\]{};'~`:"\\|,.<>/?]/.test(password)) {
            submitBtn.setAttribute('disabled', true);
            setPasswordWarnMsg('Password must contain at lest one special character');
        } else {
            submitBtn.removeAttribute('disabled');
            setPasswordWarnMsg('');
        }
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleTogglePasswordVisibility = () => {
        const checkboxElement = document.getElementById('togglePasswordVisibility');
        const isChecked = checkboxElement.checked;
        isChecked ? setIsPasswordVisible(true) : setIsPasswordVisible(false);
    }

    return (
        <div className="p-8 rounded-2xl bg-[#ffa04128] shadow-2xl border-2 border-[#ffa04188] backdrop-blur-[3px] text-orange-900 w-4/12">
            <Helmet>
                <title>Register | root</title>
            </Helmet>
            <h2 className="text-4xl uppercase text-center font-exo-2 font-bold">Please Register</h2>
            <p className="text-center font-exo-2 italic mt-2">Register now to get in touch</p>
            <form onSubmit={handleRegister} className="mt-4">
                <div className="mt-4">
                    <input type="text" name="displayName" id="displayName" placeholder="Your Full Name" className="w-full px-2 py-1.5 rounded text-black text-center" required />
                </div>
                <div className="mt-4">
                    <input type="text" name="photoURL" id="photoURL" placeholder="Profile Photo (Direct Link)" className="w-full px-2 py-1.5 rounded text-black text-center" required />
                </div>
                <div className="mt-4">
                    <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-2 py-1.5 rounded text-black text-center" required />
                </div>
                <div className="mt-4">
                    <input
                        onChange={handleValidPassword}
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Your Password"
                        className="w-full px-2 py-1.5 rounded text-black text-center"
                        required />
                </div>
                <div className="mt-6 flex items-center gap-1 relative">
                    <input type="checkbox" name="togglePasswordVisibility" id="togglePasswordVisibility" onChange={handleTogglePasswordVisibility} />
                    <label htmlFor="togglePasswordVisibility">Show Password</label>
                    {passwordWarnMsg ? <p className="absolute left-0 right-0 text-center -top-5 bg-white rounded px-0.5 font-exo-2 font-bold text-xs text-red-500">{passwordWarnMsg}</p> : ''}
                </div>
                <input type="submit" disabled value="Register" className="btn border-0 mt-4 w-full rounded-md cursor-pointer font-bold duration-200 bg-orange-600 text-white hover:bg-white hover:text-orange-600" />
            </form>
            <div className="text-orange-900 mt-4">
                <p>Already have an account? <Link to="/user/login" className="duration-75 font-semibold hover:font-bold">Login</Link></p>
            </div>
            <GoogleLogin />
        </div>
    );
};

export default Register;