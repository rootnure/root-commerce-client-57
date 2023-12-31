import PropTypes from 'prop-types';
import { TbCurrencyTaka, TbStarFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';


const BrandProduct = ({ product }) => {

    const { _id, img, name, brand_name, type, price, short_description, rating } = product;

    return (
        <>
            <div data-aos="fade-up" className="card card-compact border rounded-md border-orange-600 group">
                <figure className='h-52 p-4'>
                    <img src={img} alt={`${name} from ${brand_name}`} className='h-full group-hover:scale-105 duration-200' />
                </figure>
                <div className="card-body bg-orange-600 text-white rounded-b-md">
                    <h2 className="card-title">{name}</h2>
                    <h4 className='text-lg'><span className='font-bold'>Brand: </span>{brand_name}</h4>
                    <p><span className='font-bold'>Type: </span>{type}</p>
                    <p className='text-justify'>{short_description.slice(0, 150)}...<Link to={`/details/${_id}`} className='font-bold'>More</Link></p>
                    <div className='flex justify-between'>
                        <p className='flex items-center'><span className='font-bold me-1'>Price: </span><span className='hover:scale-125 hover:ms-1.5 hover:font-bold flex items-center duration-150'>{price}<TbCurrencyTaka></TbCurrencyTaka></span></p>
                        <p className='flex items-center justify-end gap-1'><span><TbStarFilled></TbStarFilled></span>{parseFloat(rating).toFixed(2)}</p>
                    </div>
                    <hr />
                    <div className="card-actions justify-center">
                        <Link to={`/details/${_id}`}>
                            <button className="font-bold px-6 py-2.5 rounded-md border border-white text-orange-600 hover:bg-orange-600 bg-white hover:text-white duration-200">Details</button>
                        </Link>
                        <Link to={`/updateProduct/${_id}`}>
                            <button className="font-bold px-6 py-2.5 rounded-md border border-white text-orange-600 hover:bg-orange-600 bg-white hover:text-white duration-200">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

BrandProduct.propTypes = {
    product: PropTypes.object.isRequired
}

export default BrandProduct;