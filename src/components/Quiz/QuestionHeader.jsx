const QuestionHeader = ({ currentQuestion, totalQuestions }) => (
  <div className="text-center">
    <h2 className="text-xl md:text-2xl font-semibold">
      Question {currentQuestion + 1} / {totalQuestions}
    </h2>
  </div>
);
export default QuestionHeader;
