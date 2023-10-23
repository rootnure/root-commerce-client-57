import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import BrandProduct from "./BrandProduct";
import { BsArrowLeft } from "react-icons/bs";


const Brand = () => {

    const loadedProducts = useLoaderData();

    const location = useLocation();

    const loadedBrand = location.pathname.split("/")[0];

    return (
        <section>
            <Helmet>
                <title>{loadedBrand} | root</title>
            </Helmet>
            <h2 className="text-4xl py-4 text-center text-orange-600 font-pacifico divider">Available {loadedBrand} Products</h2>
            <div className="my-6">
                <h3><Link className="text-xl font-pacifico flex items-center gap-2 p-4 hover:bg-orange-600 w-fit rounded-lg hover:text-white duration-150" to='/'><BsArrowLeft></BsArrowLeft>Back to Home</Link></h3>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-12">
                {
                    loadedProducts.length < 1 ? <h2 className="text-2xl font-bold text-orange-300 italic text-center col-span-3 pt-48 pb-40">No products available for {loadedBrand}</h2> :
                        loadedProducts.map(product => <BrandProduct key={product._id} product={product}></BrandProduct>)
                }
            </div>
        </section>
    );
};

export default Brand;