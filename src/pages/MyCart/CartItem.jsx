import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Rating from '../../components/Rating/Rating';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';


const CartItem = ({ productId, quantity, handleQuantity, handleRemoveFromCart }) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://57-root-server.vercel.app/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])

    const { _id, img, name, type, brand_name, price, rating } = product;

    return (
        <div className='border border-orange-600 rounded-md'>
            <div className='pt-3 pb-4'>
                <h3 className="text-lg px-4 pb-2 border-b flex gap-1.5">Product of <Link to={`/products/${brand_name}`} title={`View All from ${brand_name}`} className='flex items-center gap-1 w-fit text-blue-600 font-bold'>{brand_name}</Link></h3>
            </div>
            <div className="card card-compact w-full flex-row px-8 py-4 rounded-lg">
                {/* item img */}
                <figure className='w-40 h-40 me-6'>
                    <img src={img} alt={name} className='max-w-full max-h-full' />
                </figure>
                <div className="grid grid-cols-12 flex-grow">
                    {/* item info & quantity */}
                    <div className='space-y-2.5 col-span-9'>
                        <h2 className="text-3xl font-semibold font-exo-2">{name}</h2>
                        <h3 className='flex items-center text-xl gap-1'>Price: <span className='flex items-center font-bold text-orange-600'>{price}<TbCurrencyTaka></TbCurrencyTaka></span></h3>
                        <div className='space-y-3'>
                            <p>Brand: <span className='font-bold'>{brand_name}</span></p>
                        </div>
                        <p className='flex items-center gap-2'>
                            Rating:
                            <Rating rating={rating || 0} />
                        </p>
                    </div>
                    {/* more info & remove btn */}
                    <div className='col-span-3 h-full'>
                        <div className='flex gap-y-4 flex-col justify-between h-full'>
                            <p>Type: <span className='font-bold'>{type}</span></p>
                            <div className='w-fit flex items-center gap-2'>
                                <span>Quantity: </span>
                                <span className='flex items-center border-2'>
                                    <p onClick={() => handleQuantity(_id, false)} className="text-lg font-bold py-1 cursor-pointer w-8 text-center h-full flex items-center justify-center duration-150"><AiOutlineMinus></AiOutlineMinus></p>
                                    <p type="text" className="w-16 text-center border-x-2 py-1">{quantity}</p>
                                    <p onClick={() => handleQuantity(_id, true)} className="text-lg font-bold py-1 cursor-pointer w-8 text-center h-full flex items-center justify-center duration-150"><BsPlusLg></BsPlusLg></p>
                                </span>
                            </div>
                            <button onClick={() => handleRemoveFromCart(_id)} className='py-1.5 border border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 duration-150 rounded mb-4'>Remove from cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    productId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    handleQuantity: PropTypes.func.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default CartItem;