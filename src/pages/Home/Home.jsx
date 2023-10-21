import { Helmet } from "react-helmet-async";
import Brands from "../../components/Brands/Brands";
import Reviews from "../../components/Reviews/Reviews";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | root</title>
            </Helmet>
            <Brands />
            <Reviews />
        </>
    );
};

export default Home;