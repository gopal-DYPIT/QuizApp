import axios from 'axios';

const API_URL = 'https://670f9ef73e7151861658b168.mockapi.io/api';

export const getQuizzes = async () => {
  const response = await axios.get(`${API_URL}/quizzes`); 
  return response.data;
};

export const startQuiz = async () => {
  const quizzes = await getQuizzes(); 
  return quizzes[0]; 
};

export const submitAnswer = async (quizId, questionId, selectedChoices, timeTaken) => {
  return {
    message: 'Answer submitted successfully',
    quizId,
    questionId,
    selectedChoices,
    timeTaken,
  };
};

export const finishQuiz = async (quizId) => {
  return {
    message: 'Quiz finished',
    score: 80, 
  };
};
