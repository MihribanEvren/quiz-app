import { useEffect, useState } from 'react';

const useTimer = (initialTime, onTimeEnd) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeEnd();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onTimeEnd]);

  const resetTimer = () => setTimeLeft(initialTime);

  return { timeLeft, resetTimer };
};

export default useTimer;
