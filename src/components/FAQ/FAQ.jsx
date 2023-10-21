import { useEffect, useState } from "react";
import Question from "./Question";


const FAQ = () => {

    const [faq, setFaq] = useState([]);

    useEffect(() => {
        fetch('https://57-root-server.vercel.app/faq')
            .then(res => res.json())
            .then(data => setFaq(data))
    }, []);

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