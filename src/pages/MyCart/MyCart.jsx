import { Helmet } from "react-helmet-async";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const MyCart = () => {

    const user = { email: 'nur.diu.2791@gmail.com' };
    const { email } = user;

    const [myCartData, setMyCartData] = useState({});
    useEffect(() => {
        fetch(`https://57-root-server.vercel.app/cart/${email}`)
            .then(res => res.json())
            .then(data => setMyCartData(data))
    }, [email])

    const productIds = Object.keys(myCartData);

    const updateCartToDb = newCart => {
        fetch(`https://57-root-server.vercel.app/cart/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setMyCartData(newCart);
                    Swal.fire(
                        'Updated!',
                        'Your cart has been updated.',
                        'success'
                    )
                }
            })
    }

    const handleQuantity = (_id, isIncreased) => {
        const newQuantity = isIncreased ? (myCartData[_id] + 1) : (myCartData[_id] - 1);
        const newCart = {
            ...myCartData,
            [_id]: parseInt(newQuantity < 1 ? 1 : newQuantity)
        }
        updateCartToDb(newCart);
    }

    const handleRemoveFromCart = _id => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#e33',
            cancelButtonColor: '#4c6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const newCartData = { ...myCartData };
                delete newCartData[_id];
                updateCartToDb(newCartData);
            }
        })
    }

    return (
        <section>
            <Helmet>
                <title>My Cart | root</title>
            </Helmet>
            <div className="my-6">
                <h3><Link className="text-xl font-pacifico flex items-center gap-2 p-4 hover:bg-orange-600 w-fit rounded-lg hover:text-white duration-150" to={`/`}><BsArrowLeft></BsArrowLeft>Back To Home</Link></h3>
            </div>
            <div className="space-y-4">
                {
                    productIds.length > 0 ?
                        productIds.map(productId => <CartItem
                            key={productId}
                            productId={productId}
                            quantity={myCartData[productId]}
                            handleQuantity={handleQuantity}
                            handleRemoveFromCart={handleRemoveFromCart}></CartItem>) :
                        <h2 className="text-2xl font-bold text-orange-300 italic text-center col-span-3 py-20">No products added to cart yet</h2>
                }
            </div>
        </section>
    );
};

export default MyCart;