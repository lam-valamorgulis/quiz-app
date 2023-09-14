import React, { useEffect } from 'react';
import { useQuiz } from '../contexts/QuizContext';

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${mins}:${seconds.toString().padStart(2, '0')}`;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return <div className="timer">{formattedTime}</div>;
}

export default Timer;
