import { CheckCircle2, XCircle } from 'lucide-react';

const StatusIcon = ({ answer, isCorrect }) => {
  if (!answer || answer === 'No Answer') {
    return <XCircle className="text-gray-400 w-6 h-6" />;
  }
  return isCorrect ? (
    <CheckCircle2 className="text-green-500 w-6 h-6" />
  ) : (
    <XCircle className="text-red-500 w-6 h-6" />
  );
};
export default StatusIcon;
