import { useEffect } from 'react';
import useTimer from '../../hooks/useTimer';
import useQuizStore from '../../zustand/useQuizStore';
import QuestionCard from './QuestionCard';
import QuestionHeader from './QuestionHeader';
import QuizNavigation from './QuizNavigation';

const QuizQuestion = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestion = useQuizStore((state) => state.currentQuestion);
  const addAnswer = useQuizStore((state) => state.addAnswer);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);
  const prevQuestion = useQuizStore((state) => state.prevQuestion);
  const finishQuiz = useQuizStore((state) => state.finishQuiz);

  const { timeLeft, resetTimer } = useTimer(30, nextQuestion);

  useEffect(() => {
    resetTimer();
  }, [currentQuestion]);

  const handleAnswer = (option) => {
    addAnswer(currentQuestion, option);
    nextQuestion();
  };

  if (!questions.length) return <div>No questions available</div>;

  const question = questions[currentQuestion];
  const isEnabled = timeLeft <= 20;
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="w-full flex flex-col">
      <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col">
        <QuestionHeader
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
        />

        <QuestionCard
          question={question}
          onAnswer={handleAnswer}
          isEnabled={isEnabled}
        />

        <QuizNavigation
          timeLeft={timeLeft}
          currentQuestion={currentQuestion}
          isLastQuestion={isLastQuestion}
          onPrev={prevQuestion}
          onNext={nextQuestion}
          onFinish={finishQuiz}
        />
      </div>
    </div>
  );
};

export default QuizQuestion;
