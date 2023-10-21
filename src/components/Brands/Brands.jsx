import { useEffect, useState } from "react";
import BrandCart from "./BrandCart";


const Brands = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://57-root-server.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);

    return (
        <section>
            <h2 className="text-4xl py-4 text-center text-orange-600 font-pacifico divider">Popular Brands</h2>
            <div className="py-4 grid grid-cols-3 gap-4">
                {
                    brands.map(brand => <BrandCart
                        key={brand._id}
                        brand={brand}></BrandCart>)
                }
            </div>
        </section>
    );
};

export default Brands;