import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'Hva er en riktig syntaks for å sende ut "Hello World" i Python?',
    options: ['print("Hello World") ', 'p("Hello World")  ', 'echo "Hello World"', 'echo("Hello World");']
  },
  {
    question: 'Hvordan lager du en variabel med den numeriske verdien 5?',
    options: ['5', 'x = int(5)', 'x = int(5)10', 'x = 5(5)10']
  },
  {
    question: 'Hva er riktig syntaks for å skrive ut typen til en variabel eller et objekt i Python?',
    options: ['print(type(xxx))  ', 'print(type(x))  ', 'print(typeOf(x))', 'print(typeof x)']
  },
  {
    question: 'Hvilken metode kan brukes for å erstatte deler av en streng?',
    options: ['replace()  ', 'replaceString()', 'repl()', 'switch()']
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
