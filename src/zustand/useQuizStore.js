import { create } from 'zustand';

const useQuizStore = create((set) => ({
  questions: [],
  currentQuestion: 0,
  answers: {},
  currentScreen: 'intro',

  setQuestions: (questions) => set({ questions }),

  addAnswer: (questionIndex, answer) =>
    set((state) => {
      const updatedAnswers = { ...state.answers, [questionIndex]: answer };
      return { answers: updatedAnswers };
    }),

  nextQuestion: () =>
    set((state) => {
      const isLastQuestion =
        state.currentQuestion === state.questions.length - 1;
      if (!state.answers[state.currentQuestion]) {
        state.answers[state.currentQuestion] = 'No Answer';
      }
      if (isLastQuestion) {
        return { currentScreen: 'result' };
      }
      return { currentQuestion: state.currentQuestion + 1 };
    }),

  //önceki sorua geçme olmayacak
  // prevQuestion: () =>
  //   set((state) => {
  //     if (!state.answers[state.currentQuestion]) {
  //       state.answers[state.currentQuestion] = 'No Answer';
  //     }
  //     return { currentQuestion: Math.max(0, state.currentQuestion - 1) };
  //   }),

  finishQuiz: () =>
    set((state) => {
      const updatedAnswers = { ...state.answers };
      state.questions.forEach((_, index) => {
        if (!updatedAnswers[index]) {
          updatedAnswers[index] = 'No Answer';
        }
      });
      return { answers: updatedAnswers, currentScreen: 'result' };
    }),

  setScreen: (screen) => set({ currentScreen: screen }),

  goHome: () =>
    set({
      questions: [],
      currentQuestion: 0,
      answers: {},
      currentScreen: 'intro',
    }),
}));

export default useQuizStore;
