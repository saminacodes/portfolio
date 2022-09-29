import { useRef } from "react";

export const Question = ({ number, question, answer }) => {
  let detailsRef = useRef(null);
  let faqRef = useRef(null);

  function toggleFaq() {

    if (detailsRef.current.hasAttribute("open")) {
      detailsRef.current.removeAttribute("open");
    } else {
      detailsRef.current.setAttribute("open", true);
    }
  }

  return (
    <div className="faq" ref={faqRef} onClick={toggleFaq}>
      <span className="faq-num">{number}</span>
      <details ref={detailsRef}>
        <summary className="faq-question">
          {question}
        </summary>
        <p className="faq-answer">{answer}</p>
      </details>
    </div>
  );
};
