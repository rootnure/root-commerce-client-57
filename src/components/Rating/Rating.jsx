import PropTypes from 'prop-types';
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";


const Rating = ({ rating }) => {
    // generate rating stars dynamically upon rating value
    const ratingStars = [];
    const ratingIntPart = parseInt(Math.floor(rating));
    const isRatingFractioned = !!(rating % 1);
    const ratingLessFrom5Int = Math.floor(5 - rating);
    for (let i = 0; i < ratingIntPart; i++) {
        ratingStars.push(<BsStarFill key={ratingStars.length}></BsStarFill>);
    }
    if (isRatingFractioned) {
        ratingStars.push(<BsStarHalf key={ratingStars.length}></BsStarHalf>);
    }
    for (let i = 0; i < ratingLessFrom5Int; i++) {
        ratingStars.push(<BsStar key={ratingStars.length}></BsStar>);
    }
    return (
        <>
            <span className="flex text-orange-600 items-center">
                {
                    ratingStars.map(star => star)
                }
                <span className='ms-1 text-xs text-black'>({rating})</span>
            </span>
        </>
    );
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired
}

export default Rating;