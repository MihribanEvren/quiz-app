import { useMemo } from 'react';
import ResultCard from './ResultCard';

const ResultHeader = ({ questions, answers }) => {
  const stats = useMemo(() => {
    const totalQuestions = questions.length;
    const answeredQuestions = Object.values(answers || {}).filter(
      (answer) => answer && answer !== 'No Answer'
    ).length;
    const correctAnswers = questions.reduce((count, question, index) => {
      return count + (answers[index] === question.correct ? 1 : 0);
    }, 0);

    return {
      total: totalQuestions,
      answered: answeredQuestions,
      correct: correctAnswers,
      completion: Math.round((answeredQuestions / totalQuestions) * 100),
      score: Math.round((correctAnswers / totalQuestions) * 100),
    };
  }, [questions, answers]);

  return (
    <div className="text-center mb-8 pt-2 pb-4">
      <h2 className="text-3xl font-bold text-[#16423C] mb-2">Quiz Results</h2>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <ResultCard
          title="Total Questions"
          value={stats.total}
          labelColor="text-[#16423C]"
        />
        <ResultCard
          title="Answered"
          value={stats.answered}
          labelColor="text-green-600"
        />
        <ResultCard
          title="Correct Answers"
          value={stats.correct}
          labelColor="text-blue-600"
        />
        <ResultCard
          title="Score"
          value={`${stats.score}%`}
          labelColor="text-blue-600"
        />
      </div>
    </div>
  );
};

export default ResultHeader;
