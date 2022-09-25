export const Question = ({ number, question, answer }) => {
  return (
    <div className="faq">
      <span className="faq-num">{number}</span>
      <details>
        <summary className="faq-question">{question}</summary>
        <p className="faq-answer">{answer}</p>
      </details>
    </div>
  );
};
