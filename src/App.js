import React from 'react';
import './style.css';
import {
  Header,
  Main,
  StartScreen,
  Progress,
  Question,
  Footer,
  Timer,
  NextButton,
  FinishScreen,
} from './components';
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
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === 'finished' && <FinishScreen />}
      </Main>
    </div>
  );
}
