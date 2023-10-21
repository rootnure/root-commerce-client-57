import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";


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
            <footer className={`py-12 ${isLightMode ? 'bg-gray-700' : 'bg-black'} text-white`}>
                <div className="container mx-auto px-20">
                    <img src="https://i.ibb.co/30ZpCGQ/logo-dark-bg-removed.png" alt="Website Logo" className="w-24 mb-4" />
                    <div className="grid grid-cols-2 gap-20 mt-4">
                        <div className="flex flex-col gap-6">
                            <p className="mt-2">Always ready to serve you. Contact with us to share your valuable reviews and get a chance to win exciting discount vouchers.</p>
                            <div className="flex gap-4 text-4xl text-orange-600">
                                <FaFacebook></FaFacebook>
                                <FaTwitter></FaTwitter>
                                <FaInstagram></FaInstagram>
                                <FaYoutube></FaYoutube>
                            </div>
                            <div className="space-y-2">
                                <p className="flex items-center gap-x-3"><span className="text-xl"><MdPhone className="text-orange-600"></MdPhone></span>+880 1799-999999</p>
                                <p className="flex items-center gap-x-3"><span className="text-xl"><MdEmail className="text-orange-600"></MdEmail></span>contact@root.com</p>
                                <p className="flex items-center gap-x-3"><span className="text-xl"><MdLocationOn className="text-orange-600"></MdLocationOn></span><span>27/9, 500 Feet, Queen Road, Dhaka-1250</span></p>
                            </div>
                            <div>
                                <p><small>Copyright &copy; 2023 | root inc.</small></p>
                            </div>
                        </div>
                        <div className="">
                            <div>
                                <h2 className="text-4xl text-orange-600 font-pacifico">Write to us</h2>
                            </div>
                            <form onSubmit={handleFooterFormSubmit} className="space-y-3 mt-6 text-orange-600">
                                <div className="flex gap-2">
                                    <input className="w-full px-3 py-1 rounded duration-150" type="text" name="name" placeholder="Name (optional)" />
                                    <input className="w-full px-3 py-1 rounded duration-150" type="email" name="email" placeholder="Email (optional)" />
                                </div>
                                <input className="w-full px-3 py-1 rounded duration-150" type="text" name="subject" placeholder="Subject*" required />
                                <br />
                                <textarea className="w-full h-20 px-2 py-2 rounded duration-150" name="message" placeholder="Message*" required></textarea>
                                <br />
                                <div className="flex justify-between">
                                    <button type="submit" className="px-6 py-1.5 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-200 rounded-full ">Send Message</button>
                                    <small className="text-orange-600">*required</small>
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