import React, { createContext, useContext, useReducer } from 'react';
import DATA from '../data';

const QuizContext = createContext();

const initialState = {
  status: 'ready',
  index: 0,
  questions: DATA.questions,
  answer: null,
  points: 0,
  secondsRemaining: null,
};

const SECS_PER_QUESTION = 10

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, status: 'start',secondsRemaining: state.questions.length * SECS_PER_QUESTION, };

    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
      };

    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
  }
};

const QuizProvider = ({ children }) => {
  const [{ status, index, questions, answer,points,secondsRemaining }, dispatch] = useReducer(reducer, initialState);
  const numQuestions = DATA.questions.length;
  const maxPossiblePoints = DATA.questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  return (
    <QuizContext.Provider
      value={{
        status,
        numQuestions,
        index,
        questions,
        answer,
        points,
        maxPossiblePoints,
        secondsRemaining,

        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  return context;
};

export default QuizProvider;
