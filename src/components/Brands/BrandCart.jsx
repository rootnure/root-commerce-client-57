import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const BrandCart = ({ brand }) => {
    const { brandName, brandImg } = brand;
    return (
        <Link to={`/brand/${brandName}`} data-aos="flip-left" data-aos-duration="900">
            <div className="card card-compact group border border-orange-600 rounded-md cursor-pointer">
                <figure className='h-52 bg-white'>
                    <img src={brandImg} alt={brandName + ' logo'} className='group-hover:scale-110 duration-150 max-h-[96px] min-w-[96px] px-12' />
                </figure>
                <div className="card-body bg-orange-600 text-white rounded-b-md hover:bg-orange-500 duration-150">
                    <h2 className="card-title justify-center">{brandName}</h2>
                </div>
            </div>
        </Link>
    );
};

BrandCart.propTypes = {
    brand: PropTypes.object.isRequired
}

export default BrandCart;