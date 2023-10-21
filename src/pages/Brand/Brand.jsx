import { useLoaderData } from "react-router-dom";


const Brand = () => {

    const brands = useLoaderData();

    return (
        <section>
            <h2>Brand page: {brands.length}</h2>
        </section>
    );
};

export default Brand;