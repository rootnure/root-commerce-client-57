import { Helmet } from "react-helmet-async";
import { useLoaderData, useLocation } from "react-router-dom";
import BrandProduct from "./BrandProduct";


const Brand = () => {

    const loadedProducts = useLoaderData();

    const location = useLocation();

    const loadedBrand = location.pathname.split("/")[2];

    console.log(loadedProducts[0]);


    return (
        <section>
            <Helmet>
                <title>{loadedBrand} | root</title>
            </Helmet>
            <h2 className="text-4xl py-4 text-center text-orange-600 font-pacifico divider">Available {loadedBrand} Products</h2>
            <div className="grid grid-cols-4 gap-3 mt-12">
                {
                    loadedProducts.length < 1 ? <h2 className="text-2xl font-bold text-orange-300 italic text-center col-span-2 pt-48 pb-40">No products available</h2> :
                        loadedProducts.map(product => <BrandProduct key={product._id} product={product}></BrandProduct>)
                }
            </div>
        </section>
    );
};

export default Brand;