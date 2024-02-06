import React from 'react';
import './App.css'; 

function App() {
  const handleQuizClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="App">
      <header>
        <h1 id='quizzes'>Quizzes</h1>
      </header>
      <div className="container">
        <div className="quiz" onClick={() => handleQuizClick("https://reactfire-77242.web.app/")}>
          <h2>Ahmad sin quiz</h2>
          
        </div>
        {[...Array(11)].map((_, index) => (
          <div className="quiz" onClick={() => handleQuizClick("https://reactfire-77242.web.app/")} key={index + 1}>
            <h2>Additional Quiz {index + 2}</h2>
            
          </div>
        ))}
      </div>
      <footer>
        <p>Tlf 48274904</p>
       <placeholder>Ahmad.zaidd</placeholder>
      </footer>
    </div>
  );
}

export default App;
