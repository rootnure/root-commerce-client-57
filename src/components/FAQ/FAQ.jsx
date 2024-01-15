import { useEffect, useState } from "react";
import Question from "./Question";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const FAQ = () => {
  const [faq, setFaq] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    fetch("https://57-root-server.vercel.app/faq")
      .then((res) => res.json())
      .then((data) => {
        setFaq(data);
        setIsDataLoading(false);
      });
  }, []);

  return (
    <section className="my-12">
      <div className="divider py-12">
        <img
          src="https://i.ibb.co/ZGkfhnC/Image.png"
          alt="faq"
          className="w-5/12 md:w-2/12 mx-auto"
        />
      </div>
      <div data-aos="fade-up" className="w-11/12 md:w-9/12 mx-auto space-y-3">
        {isDataLoading ? (
          <LoadingSpinner />
        ) : (
          faq.map((ques) => <Question key={ques._id} ques={ques}></Question>)
        )}
      </div>
    </section>
  );
};

export default FAQ; // eslint-disable-line
