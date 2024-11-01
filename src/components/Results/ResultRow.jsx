import StatusIcon from './StatusIcon';

const ResultRow = ({ question, answer, index }) => {
  const isCorrect = answer === question.correct;

  return (
    <tr className="hover:bg-[#E9EFEC]/50 transition-colors">
      <td className="px-6 py-4 text-gray-600">{index + 1}</td>
      <td className="px-6 py-4">{question.title}</td>
      <td className="px-6 py-4 font-medium">
        {answer && answer !== 'No Answer'
          ? `${answer}: ${question.options[answer]}`
          : 'No Answer'}
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-center">
          <StatusIcon answer={answer} isCorrect={isCorrect} />
        </div>
      </td>
    </tr>
  );
};
export default ResultRow;
