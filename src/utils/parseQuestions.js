export const parseQuestions = (data) => {
  const shuffledQuestions = data.sort(() => 0.5 - Math.random()).slice(0, 10);

  const possibleAnswers = ['A', 'B', 'C', 'D'];

  return shuffledQuestions.map((question) => {
    const options = {
      A: question.body.substring(0, 20),
      B: question.body.substring(20, 40),
      C: question.body.substring(40, 60),
      D: question.body.substring(60, 80),
    };

    const correct =
      possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];

    return {
      title: question.title,
      options,
      correct,
    };
  });
};
