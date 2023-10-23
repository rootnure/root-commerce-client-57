import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { BsPlusLg, BsArrowLeft } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import Rating from "../../components/Rating/Rating";
import Swal from "sweetalert2";


const ProductDetails = () => {

    const user = { email: 'nur.diu.2791@gmail.com' };

    const { email } = user;

    const navigate = useNavigate();

    const [oldCart, setOldCart] = useState([]);

    useEffect(() => {
        fetch(`https://57-root-server.vercel.app/cart/${email}`)
            .then(res => res.json())
            .then(data => setOldCart(data))
    }, [email]);

    const productInfo = useLoaderData();

    const { _id: id, img, name, brand_name, price, short_description, rating } = productInfo;

    const handleQuantity = isIncreased => {
        const quantityElement = document.getElementById('quantity');
        const quantity = parseInt(quantityElement.value);
        if (isIncreased) {
            quantityElement.value = quantity + 1;
            if (quantity < 1 || isNaN(quantity)) {
                quantityElement.value = 1;
            }
        } else if (quantity > 1) {
            quantityElement.value = quantity - 1;
        }
    }

    const handleAddToCart = e => {
        e.preventDefault();
        const quantity = e.target.quantity.value;
        if (isNaN(quantity) || quantity <= 0) {
            console.log('please enter a valid quantity');
            return;
        }
        const cartData = {
            ...oldCart,
            [id]: parseInt(quantity)
        }
        // set/update cart to db
        fetch(`https://57-root-server.vercel.app/cart/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0 || data.matchedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Added',
                        text: 'Product successfully added to cart',
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    }).then(navigate(`/products/${brand_name}`))
                }
            })
    }

    return (
        <section>
            <Helmet>
                <title>{name} | root</title>
            </Helmet>
            <div className="my-6">
                <h3><Link className="text-xl font-pacifico flex items-center gap-2 p-4 hover:bg-orange-600 w-fit rounded-lg hover:text-white duration-150" to={`/products/${brand_name}`}><BsArrowLeft></BsArrowLeft>Back to {brand_name}</Link></h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="card card-compact">
                    <figure className="h-[350px] p-4">
                        <img src={img} alt={name} className="max-h-full" />
                    </figure>
                </div>
                <div className="col-span-2 space-y-4">
                    <h2 className="text-3xl text-orange-600 font-exo-2 font-semibold">{name}</h2>
                    <div className="flex gap-4">
                        <p className="px-2 py-0.5 rounded-full bg-orange-300 flex gap-1"><span>Price: </span><span className="font-semibold flex items-center">{price}<TbCurrencyTaka></TbCurrencyTaka></span></p>
                        <p className="px-2 py-0.5 rounded-full bg-orange-300 flex gap-1"><span>Status: </span><span className="font-semibold">In Stock</span></p>
                        <p className="px-2 py-0.5 rounded-full bg-orange-300 flex gap-1"><span>Brand: </span><span className="font-semibold">{brand_name}</span></p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Key Features</h3>
                        <p className="mt-2 leading-7">{short_description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Rating:</span>
                        <Rating rating={rating} />
                    </div>
                    <form onSubmit={handleAddToCart} className="flex gap-x-8">
                        <div className="w-fit flex items-center border-2">
                            <p onClick={() => handleQuantity(false)} className="text-lg font-bold py-1 cursor-pointer w-8 text-center h-full flex items-center justify-center hover:bg-orange-300 duration-150"><AiOutlineMinus></AiOutlineMinus></p>
                            <input type="text" name="quantity" id="quantity" defaultValue="1" className="w-12 text-center border-x-2 py-1.5" />
                            <p onClick={() => handleQuantity(true)} className="text-lg font-bold py-1 cursor-pointer w-8 text-center h-full flex items-center justify-center hover:bg-orange-300 duration-150"><BsPlusLg></BsPlusLg></p>
                        </div>
                        <button type="submit" className="px-4 py-1 border border-orange-600 font-semibold rounded text-white bg-orange-600 hover:text-orange-600 hover:bg-transparent duration-150">Add To Cart</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;