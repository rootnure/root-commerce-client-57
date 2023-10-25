import PropTypes from 'prop-types';
import { useState, useEffect } from "react";


const BrandBanner = ({ brand }) => {

    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch(`https://57-root-server.vercel.app/brandInfo/${brand}`)
            .then(res => res.json())
            .then(data => setImages(data))
    }, [brand]);

    return (
        <section className='h-[300px] md:h-[600px]'>
            <div className="carousel w-full h-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={images[0]} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={images[1]} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={images[2]} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </section>
    );
};

BrandBanner.propTypes = {
    brand: PropTypes.string.isRequired
}

export default BrandBanner;