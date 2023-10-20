import { Helmet } from "react-helmet-async";
import Brands from "../../components/Brands/Brands";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | root</title>
            </Helmet>
            <Brands />
        </>
    );
};

export default Home;