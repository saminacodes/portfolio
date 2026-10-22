export const Question = ({ question, answer }) => {
  return (
    <div className="faq">
      <p className="faq-question">{question}</p>
      <p className="faq-answer">{answer}</p>
    </div>
  );
};
