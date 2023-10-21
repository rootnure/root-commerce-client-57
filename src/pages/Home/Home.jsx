import { Helmet } from "react-helmet-async";
import Brands from "../../components/Brands/Brands";
import Reviews from "../../components/Reviews/Reviews";
import FAQ from "../../components/FAQ/FAQ";
import Banner from "../../components/Banner/Banner";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | root</title>
            </Helmet>
            <Banner />
            <Brands />
            <Reviews />
            <FAQ />
        </>
    );
};

export default Home;