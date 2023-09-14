const DATA = {
  questions: [
    {
      question: 'An effect will always run on the initial render.',
      options: [
        'True',
        'It depends on the dependency array',
        'False',
        'In depends on the code in the effect',
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question:
        "When will an effect run if it doesn't have a dependency array?",
      options: [
        'Only when the component mounts',
        'Only when the component unmounts',
        'The first time the component re-renders',
        'Each time the component is re-rendered',
      ],
      correctOption: 3,
      points: 20,
    },
  ],
};

export default DATA;
