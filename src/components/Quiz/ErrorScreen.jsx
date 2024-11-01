import { XCircle } from 'lucide-react';
import PrimaryButton from '../Buttons/PrimaryButton';

const ErrorScreen = () => (
  <div className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl">
    <div className="p-6 text-center">
      <div className="text-red-500 mb-4">
        <XCircle className="w-16 h-16 mx-auto" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Error</h2>
      <p className="text-gray-600 mb-4">
        There was a problem loading the quiz questions. Please try again later.
      </p>

      <PrimaryButton
        className="w-full"
        onClick={() => window.location.reload()}
      >
        Retry
      </PrimaryButton>
    </div>
  </div>
);
export default ErrorScreen;
