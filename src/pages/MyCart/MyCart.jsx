import { Helmet } from "react-helmet-async";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";


const MyCart = () => {

    const { user } = useContext(AuthContext);
    const { email } = user || '';

    const [myCartData, setMyCartData] = useState({});
    useEffect(() => {
        fetch(`https://57-root-server.vercel.app/cart/${email}`)
            .then(res => res.json())
            .then(data => setMyCartData(data))
    }, [email])

    const productIds = Object.keys(myCartData);

    const updateCartToDb = (newCart, type) => {
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
                    if (type === 'updateQty') {
                        toast.success('Cart updated')
                    } else if (type === 'deleteProd') {
                        toast.success('Item deleted from cart');
                    } else {
                        toast.success('Cart Updated');
                    }
                }
            })
    }

    const handleQuantity = (_id, isIncreased) => {
        const newQuantity = isIncreased ? (myCartData[_id] + 1) : (myCartData[_id] - 1);
        const newCart = {
            ...myCartData,
            [_id]: parseInt(newQuantity < 1 ? 1 : newQuantity)
        }
        updateCartToDb(newCart, 'updateQty');
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
                updateCartToDb(newCartData, 'deleteProd');
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
                        <h2 className="text-2xl font-bold text-orange-300 italic text-center py-20">No product in cart yet</h2>
                }
            </div>
        </section>
    );
};

export default MyCart;