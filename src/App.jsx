import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Quiz from './pages/Quiz';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Quiz />
      </div>
    </QueryClientProvider>
  );
};

export default App;
