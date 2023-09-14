import { useQuiz } from '../contexts/QuizContext';
import React from 'react';

const Progress = () => {
  const { numQuestions, index, points, maxPossiblePoints } = useQuiz();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index - 1} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
