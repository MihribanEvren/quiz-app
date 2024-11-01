import { PlayCircle } from 'lucide-react';
import PrimaryButton from '../Buttons/PrimaryButton';

const StartScreen = ({ onStart, isLoading }) => (
  <div className="w-full rounded-xl p-4 max-w-md bg-white/90 backdrop-blur-sm shadow-xl space-y-1">
    <div>
      <div className="text-2xl sm:text-3xl font-bold text-center text-[#16423C]">
        Welcome to Quiz
      </div>
    </div>
    <div className="space-y-6">
      <div className="text-center text-gray-600 space-y-3">
        <p className="text-md sm:text-lg">{"Let's started!"}</p>
        <ul className="text-sm space-y-1">
          <li>• 10 random questions</li>
          <li>• 30 seconds per question</li>
        </ul>
      </div>

      <PrimaryButton className="w-full" icon={PlayCircle} onClick={onStart}>
        {isLoading ? 'Loading...' : 'Start Quiz'}
      </PrimaryButton>
    </div>
  </div>
);
export default StartScreen;
