import React from 'react';
import './style.css';
import { Header, Main, StartScreen, Progress, Question } from './components';
import { useQuiz } from './contexts/QuizContext';

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status == 'ready' && <StartScreen />}
        {status == 'start' && (
          <>
            <Progress />
            <Question />
          </>
        )}
      </Main>
    </div>
  );
}
