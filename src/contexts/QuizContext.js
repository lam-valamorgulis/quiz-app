import React, { createContext, useContext, useReducer } from 'react';
import DATA from '../data';

const QuizContext = createContext();

const initialState = {
  status: 'ready',
  index: 0,
  questions: DATA.questions,
  answer: null,
  points: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, status: 'start' };
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
  }
};

const QuizProvider = ({ children }) => {
  const [{ status, index, questions, answer }, dispatch] = useReducer(reducer, initialState);
  const numQuestions = DATA.questions.length;

  return (
    <QuizContext.Provider
      value={{
        status,
        numQuestions,
        index,
        questions,
        answer,

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
