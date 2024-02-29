import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'Spørsmål 1. Hva er en Loop',
    options: ['Loops brukes i JavaScript for å utføre gjentatte oppgaver basert på en tilstand.', 'java', 'Webdesign', 'Grafisk design'],
    correctAnswer: 0,
  },
  {
    question: 'Hva er koden? console.log(typeof NaN);',
    options: ['Null', 'Number', 'Undefines', 'Databaseadministrasjon'],
    correctAnswer: 1,
  },
  {
    question: 'Hva er outputen til denne koden? console.log(018 - 015);',
    options: ['3', '5', '9', '10'],
    correctAnswer: 1,
  },
  {
    question: 'Er Java det samme som javascript?',
    options: ['Nei', 'Ja', 'Uhm', 'java er bedre en javascript'],
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
    <div>
      <div className="header">Quiz</div> 
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
    </div>
  );
}

export default App;
