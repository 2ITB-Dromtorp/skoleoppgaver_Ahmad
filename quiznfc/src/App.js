import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'Spørsmål 1. Hva er en vanlig oppgave innenfor IT drift?',
    options: ['Feilsøking', 'Programmering', 'Webdesign', 'Grafisk design'],
    correctAnswer: 0,
  },
  {
    question: 'Spørsmål 2. Hva er en vanlig oppgave innenfor IT utvikling?',
    options: ['Feilsøking', 'Programmering', 'Nettverksadministrasjon', 'Databaseadministrasjon'],
    correctAnswer: 1,
  },
  {
    question: 'Spørsmål 3.Hva står CSS for?',
    options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Cute Style Sheets'],
    correctAnswer: 1,
  },
  {
    question: 'Hva står VM for',
    options: ['Virtual Machine', 'Verdensmester', 'Hva menes med livet', 'HVOR MAN?'],
    correctAnswer: 0,
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (selectedOption) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = selectedOption;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(Array(questions.length).fill(null));
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <div className="app">
        {!showResult ? (
          <div className="question-container">
            <div className="question">{questions[currentQuestion].question}</div>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="option">
                  <input
                    type="radio"
                    id={`option${index}`}
                    name="answer"
                    value={index}
                    onChange={() => handleAnswerSelect(index)}
                    checked={selectedAnswers[currentQuestion] === index}
                  />
                  <label htmlFor={`option${index}`}>{option}</label>
                </div>
              ))}
            </div>
            <button onClick={handleNextQuestion}>Neste</button>
          </div>
        ) : (
          <div className="result-container">
            <div>Du fikk {calculateScore()} av {questions.length} riktige svar!</div>
            <button onClick={resetQuiz}>Ta quiz på nytt</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
