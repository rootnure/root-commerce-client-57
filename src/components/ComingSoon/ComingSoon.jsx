import PropTypes from 'prop-types';
import Marquee from "react-fast-marquee";


const ComingSoon = ({ restBrands }) => {
    return (
        <section>
            <div className="divider font-pacifico text-4xl text-orange-600 py-12">Brands Coming Soon</div>
            <hr />
            {
                restBrands.length > 0 ?
                    <Marquee className='py-6'>
                        {
                            restBrands.map(brand => <img key={brand._id} src={brand.brandImg} alt={brand.brandName} className='h-16 me-12' />)
                        }
                    </Marquee> :
                    <h3 className='text-2xl text-gray-400 text-center py-6 italic'>Surprise is waiting...</h3>
            }
            <hr />
        </section>
    );
};

ComingSoon.propTypes = {
    restBrands: PropTypes.array.isRequired
}

export default ComingSoon;