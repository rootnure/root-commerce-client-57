import { useContext } from 'react';
import googleLogoSVG from './google-icon-logo.svg'
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const GoogleLogin = () => {

    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success('Login Successfully');
                navigate('/');
            })
            .catch(err => {
                console.error(err);
            })
    }
    return (
        <>
            <div>
                <p className="divider">Login Using</p>
                <button onClick={handleGoogleLogin} className="flex items-center justify-center py-1 gap-2 font-semibold border border-white text-xl rounded-md bg-white text-orange-900 duration-150 w-full hover:bg-transparent">
                    <img src={googleLogoSVG} alt="Google Logo" className="h-5" />
                    <p className='font-exo-2'>Google</p>
                </button>
            </div>
        </>
    );
};

export default GoogleLogin;