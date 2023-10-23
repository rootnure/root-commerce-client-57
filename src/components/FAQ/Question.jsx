import PropTypes from 'prop-types';


const Question = ({ ques }) => {
    const { question, answer } = ques;
    return (
        <>
            <div className="collapse collapse-arrow bg-orange-500 text-white">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">
                    {question}
                </div>
                <div className="collapse-content">
                    <p>{answer}</p>
                </div>
            </div>
        </>
    );
};

Question.propTypes = {
    ques: PropTypes.object.isRequired
}

export default Question;