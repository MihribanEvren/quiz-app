import OptionButton from './OptionButton';

const QuestionCard = ({ question, onAnswer, isEnabled }) => (
  <div className="flex-1 flex flex-col bg-[#E9EFEC] rounded-xl shadow-md p-6 m-6">
    <div className="flex items-center justify-center h-24 md:h-28 lg:h-36 mb-6">
      <h3 className="text-lg md:text-xl font-semibold text-center">
        {question.title}?
      </h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:h-64">
      {Object.entries(question.options).map(([option, text]) => (
        <OptionButton
          key={option}
          option={option}
          text={text}
          onClick={() => onAnswer(option)}
          disabled={!isEnabled}
        />
      ))}
    </div>
  </div>
);
export default QuestionCard;
