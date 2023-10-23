import { useEffect, useState } from "react";
import BrandCart from "./BrandCart";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ComingSoon from "../ComingSoon/ComingSoon";


const Brands = () => {

    const [brands, setBrands] = useState([]);

    const [isDataLoading, setIsDataLoading] = useState(true);

    useEffect(() => {
        fetch('https://57-root-server.vercel.app/brands')
            .then(res => res.json())
            .then(data => {
                setBrands(data);
                setIsDataLoading(false);
            })
    }, []);

    return (
        <>
            <section>
                <h2 className="text-4xl pt-12 pb-4 text-center text-orange-600 font-pacifico divider">Popular Brands</h2>
                <div className="py-4 grid grid-cols-3 gap-4">
                    {
                        isDataLoading ?
                            <LoadingSpinner /> :
                            brands.slice(0, 6).map(brand => <BrandCart
                                key={brand._id}
                                brand={brand}></BrandCart>)
                    }
                </div>
            </section>
            <ComingSoon restBrands={brands.slice(6)} />
        </>
    );
};

export default Brands;