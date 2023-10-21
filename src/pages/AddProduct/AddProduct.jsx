import { useEffect, useState } from "react";
import Swal from 'sweetalert2'


const AddProduct = () => {

    const [types, setTypes] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://57-root-server.vercel.app/types')
            .then(res => res.json())
            .then(data => setTypes(data));
    }, []);

    useEffect(() => {
        fetch('https://57-root-server.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrands(data));
    }, []);

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const img = form.image.value;
        const name = form.name.value;
        const brand_name = form.brandName.value;
        const type = form.type.value;
        const price = parseFloat(form.price.value);
        const short_description = form.shortDescription.value;
        const rating = parseFloat(form.rating.value);
        form.reset();
        const newProduct = { img, name, brand_name, type, price, short_description, rating };
        console.log(newProduct);

        fetch('https://57-root-server.vercel.app/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    let timerInterval;
                    Swal.fire({
                        icon: "success",
                        title: 'Product added successfully!',
                        html: 'Will close in <b></b> seconds.',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: () => {
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = (Swal.getTimerLeft() / 1000).toFixed(1)
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    })
                }
            })
    }

    return (
        <section>
            <h2 className="text-4xl py-4 text-center text-orange-600 font-pacifico divider">Add New Product</h2>
            <div>
                <form onSubmit={handleAddProduct} className="grid grid-cols-2 gap-x-2 gap-y-4 py-1.5">
                    {/* image */}
                    <div className="space-y-2">
                        <label className="font-bold" htmlFor="image">Image</label>
                        <input className="px-2 py-1.5 w-full rounded-md border border-orange-600" type="text" name="image" id="image" placeholder="Image (Direct Link)" required />
                    </div>
                    {/* name */}
                    <div className="space-y-2">
                        <label className="font-bold" htmlFor="name">Name</label>
                        <input className="px-2 py-1.5 w-full rounded-md border border-orange-600" type="text" name="name" id="name" placeholder="Title / Name" required />
                    </div>
                    {/* brand */}
                    <div className="space-y-2">
                        <label className="font-bold" htmlFor="brandName">Brand Name</label>
                        <br />
                        <select id="brandName" name="brandName" className="px-2 py-1.5 w-full rounded-md border border-orange-600">
                            <option value="">Select Brand</option>
                            {
                                brands.map(brand => <option key={brand._id} value={brand.brandName}>{brand.brandName}</option>)
                            }
                        </select>
                    </div>
                    {/* type */}
                    <div className="space-y-2">
                        <label className="font-bold" htmlFor="type">Type</label>
                        <br />
                        <select id="type" name="type" className="px-2 py-1.5 w-full rounded-md border border-orange-600">
                            <option value="">Select Type</option>
                            {
                                types.map((type, idx) => <option key={idx} value={type}>{type}</option>)
                            }
                        </select>
                    </div>
                    {/* price */}
                    <div className="space-y-2">
                        <label className="font-bold" htmlFor="price">Price</label>
                        <input className="px-2 py-1.5 w-full rounded-md border border-orange-600" type="number" min="0" name="price" id="price" placeholder="Price" required />
                    </div>
                    {/* rating */}
                    <div className="space-y-2">
                        <label className="font-bold" htmlFor="rating">Rating</label>
                        <input className="px-2 py-1.5 w-full rounded-md border border-orange-600" type="number" min="0" max="5" step="0.01" name="rating" id="rating" placeholder="Rating (0-5)" required />
                    </div>
                    {/* description */}
                    <div className="space-y-2 col-span-2">
                        <label className="font-bold" htmlFor="shortDescription">Short Description</label>
                        <textarea className="px-2 py-1.5 w-full h-20 rounded-md border border-orange-600" type="text" name="shortDescription" id="shortDescription" placeholder="Short Description" required ></textarea>
                    </div>
                    {/* submit */}
                    <div className="col-span-2">
                        <button type="submit" className="font-bold w-full px-6 py-2.5 rounded-md border border-orange-600 hover:text-orange-600 bg-orange-600 hover:bg-transparent text-white duration-200">Add Product</button>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default AddProduct;