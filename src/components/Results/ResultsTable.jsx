import { HomeIcon } from 'lucide-react';
import useQuizStore from '../../zustand/useQuizStore';
import ResultHeader from './ResultHeader';
import PrimaryButton from '../Buttons/PrimaryButton';
import ResultRow from './ResultRow';

const ResultsTable = () => {
  const { questions, answers, goHome } = useQuizStore();

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#E9EFEC] rounded-xl">
          <ResultHeader questions={questions} answers={answers} />
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#16423C] text-white">
                <tr>
                  <th className="px-6 py-4 text-left w-16">#</th>
                  <th className="px-6 py-4 text-left">Question</th>
                  <th className="px-6 py-4 text-left">Your Answer</th>
                  <th className="px-6 py-4 text-center w-20">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9EFEC]">
                {questions.map((question, index) => (
                  <ResultRow
                    key={index}
                    question={question}
                    answer={answers?.[index]}
                    index={index}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <PrimaryButton icon={HomeIcon} onClick={goHome}>
            Back to Home
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ResultsTable;
