import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useQuizStore from '../zustand/useQuizStore';
import QuizQuestion from '../components/Quiz/QuizQuestion';
import ResultsTable from '../components/Results/ResultsTable';
import { parseQuestions } from '../utils/parseQuestions';
import StartScreen from '../components/Quiz/StartScreen';
import ErrorScreen from '../components/Quiz/ErrorScreen';
import LoadingScreen from '../components/Quiz/LoadingScreen';
import PageWrapper from '../components/PageWrapper';

const fetchQuestions = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return parseQuestions(data);
};

const Quiz = () => {
  const { setQuestions, currentScreen, setScreen } = useQuizStore();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['questions'],
    queryFn: fetchQuestions,
    enabled: false,
  });

  useEffect(() => {
    if (data) setQuestions(data);
  }, [data, setQuestions]);

  const startQuiz = async () => {
    await refetch();
    setScreen('quiz');
  };

  const renderScreen = () => {
    if (isLoading) return <LoadingScreen />;
    if (error) return <ErrorScreen />;
    if (currentScreen === 'result') return <ResultsTable />;
    if (currentScreen === 'quiz') return <QuizQuestion />;
    return <StartScreen onStart={startQuiz} isLoading={isLoading} />;
  };

  return <PageWrapper>{renderScreen()}</PageWrapper>;
};

export default Quiz;
