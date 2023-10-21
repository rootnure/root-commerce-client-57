import { useEffect, useState } from "react";
import Question from "./Question";


const FAQ = () => {

    const [faq, setFaq] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/faq')
            .then(res => res.json())
            .then(data => setFaq(data))
    }, []);

    console.log(faq);

    return (
        <section className="my-12">
            <div className="divider py-12">
                <img src="https://i.ibb.co/Gt7Pzfs/Image.png" alt="faq" className="w-2/12 mx-auto" />
            </div>
            <div className="w-9/12 mx-auto space-y-4">
                {
                    faq.map((ques, idx) => <Question
                        key={ques._id}
                        ques={ques}
                        idx={idx}></Question>)
                }
            </div>
        </section>
    );
};

export default FAQ;