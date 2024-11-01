import { ArrowLeft, ArrowRight, CheckSquare } from 'lucide-react';
import IconButton from '../Buttons/IconButton';
import PrimaryButton from '../Buttons/PrimaryButton';

const QuizNavigation = ({
  timeLeft,
  currentQuestion,
  isLastQuestion,
  onPrev,
  onNext,
  onFinish,
}) => (
  <div className="sticky bottom-0 bg-[#E9EFEC] shadow-md p-4 rounded-t-lg">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4 w-full md:w-auto justify-center">
        <IconButton icon={ArrowLeft} onClick={onPrev} disabled={true} />
        <div className="text-lg font-medium">Time Left: {timeLeft}s</div>
        <IconButton
          icon={ArrowRight}
          onClick={onNext}
          disabled={isLastQuestion}
        />
      </div>

      <PrimaryButton
        icon={CheckSquare}
        onClick={onFinish}
        className="w-full md:w-auto"
      >
        Finish Quiz
      </PrimaryButton>
    </div>
  </div>
);

export default QuizNavigation;
