import { useQuiz } from '../contexts/QuizContext';
import React from 'react';

const Progress = () => {
  const { numQuestions, index } = useQuiz();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      {/* <p><strong>{points}</strong> / {maxPossiblePoints}</p> */}
      <p>
        <strong>100</strong>
      </p>
    </header>
  );
};

export default Progress;
