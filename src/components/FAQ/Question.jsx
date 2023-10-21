import PropTypes from 'prop-types';


const Question = ({ ques, idx }) => {
    const { question, answer } = ques;
    return (
        <>
            <div data-aos="fade-up" className="collapse collapse-arrow bg-orange-500 text-white">
                <input type="radio" name="my-accordion-2" checked={idx === 0 ? "checked" : ""} readOnly />
                <div className="collapse-title text-xl font-medium">{question}</div>
                <div className="collapse-content">
                    <p>{answer}</p>
                </div>
            </div>
        </>
    );
};

Question.propTypes = {
    ques: PropTypes.object.isRequired,
    idx: PropTypes.number
}

export default Question;