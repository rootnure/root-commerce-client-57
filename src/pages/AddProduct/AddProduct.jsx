import { useEffect, useState } from "react";


const AddProduct = () => {

    const [types, setTypes] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://57-root-server.vercel.app/types')
            .then(res => res.json())
            .then(data => setTypes(data));
    }, [])

    useEffect(() => {
        fetch('https://57-root-server.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrands(data));
    }, [])

    return (
        <div>
            <h2>add new product</h2>
            {
                console.log(types)
            }
            {
                console.log(brands)
            }
        </div>
    );
};

export default AddProduct;