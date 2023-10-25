import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";


const Footer = () => {

    const isLightMode = true;

    const handleFooterFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value || null;
        const email = form.email.value || null;
        const subject = form.subject.value;
        const message = form.message.value;
        form.reset();
        console.log({ name, email, subject, message });
    }

    return (
        <>
            <footer className={`py-12 ${isLightMode ? 'bg-orange-100' : 'bg-black'}`}>
                <div className="container mx-auto px-6 md:px-20">
                    <div className="flex justify-center md:justify-start gap-x-2">
                        <img src="https://i.ibb.co/BcFXThK/logo-bg-removed.png" alt="Website Logo" className="w-24 mb-4" />
                        <h3 className="text-4xl text-orange-600 font-pacifico">Commerce</h3>
                    </div>
                    <p className="mt-2 text-center md:hidden">Always ready to serve you. Connect with us to share your valuable reviews and get a chance to win exciting discount vouchers.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mt-4">
                        <div className="flex flex-col gap-6 order-2 md:order-1">
                            <p className="mt-2 hidden md:block md:text-left">Always ready to serve you. Connect with us to share your valuable reviews and get a chance to win exciting discount vouchers.</p>
                            <div>
                                <h4 className="footer-title text-center md:text-left">Social</h4>
                                <div className="flex justify-center md:justify-start gap-4 text-4xl">
                                    <Link to="#"><FaFacebook className="text-blue-600"></FaFacebook></Link>
                                    <Link to="#"><FaTwitter className="text-blue-400"></FaTwitter></Link>
                                    <Link to="#"><FaInstagram className="text-rose-600"></FaInstagram></Link>
                                    <Link to="#"><FaYoutube className="text-red-500"></FaYoutube></Link>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h4 className="footer-title text-center md:text-left">Contact Us</h4>
                                <p className="flex items-center gap-x-3"><span className="text-xl"><MdPhone className="text-orange-600"></MdPhone></span>+880 1799-999999</p>
                                <p className="flex items-center gap-x-3"><span className="text-xl"><MdEmail className="text-orange-600"></MdEmail></span>contact@root.com</p>
                                <p className="flex items-center gap-x-3"><span className="text-xl"><MdLocationOn className="text-orange-600"></MdLocationOn></span><span>27/9, 500 Feet, Queen Road, Dhaka-1250</span></p>
                            </div>
                            <div>
                                <p className="text-center md:text-left"><small>Copyright &copy; 2023 | root inc.</small></p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div>
                                <h2 className="text-4xl text-orange-600 font-pacifico text-center mt-12 md:mt-0 md:text-left">Write to us</h2>
                            </div>
                            <form onSubmit={handleFooterFormSubmit} className="space-y-3 mt-6">
                                <div className="flex gap-2">
                                    <input className="w-full px-3 py-1 rounded duration-150" type="text" name="name" placeholder="Name (optional)" />
                                    <input className="w-full px-3 py-1 rounded duration-150" type="email" name="email" placeholder="Email (optional)" />
                                </div>
                                <input className="w-full px-3 py-1 rounded duration-150" type="text" name="subject" placeholder="Subject*" required />
                                <br />
                                <textarea className="w-full h-32 px-2 py-2 rounded duration-150" name="message" placeholder="Message*" required></textarea>
                                <br />
                                <div className="flex justify-between">
                                    <p className="font-bold text-red-500 text-sm">*required</p>
                                    <button type="submit" className="font-bold px-6 py-1.5 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-200 rounded-full ">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;