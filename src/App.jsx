import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Report from './components/Report';

const App = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [scoreData, setScoreData] = useState(null);
  const [quizId, setQuizId] = useState(null);

  const startQuiz = () => {
    setIsQuizStarted(true);
    setScoreData(null); // Reset score data when starting a new quiz
  };

  const handleQuizCompleted = (score) => {
    setScoreData(score); // Save score data when quiz is completed
    setIsQuizStarted(false);
  };

  const startAgain = () => {
    setScoreData(null); // Reset score data for the new attempt
    setIsQuizStarted(false);
  };

  return (
    <div className="App flex flex-col items-center justify-center h-screen bg-lime-200">
      {scoreData ? (
        <Report scoreData={scoreData} startAgain={startAgain} />
      ) : isQuizStarted ? (
        <Quiz onComplete={handleQuizCompleted} />
      ) : (
        <Home startQuiz={startQuiz} />
      )}
    </div>
  );
};

export default App;
