import React, { createContext, useContext } from 'react';

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  return <QuizContext.Provider>{children}</QuizContext.Provider>;
};

export default QuizProvider;
