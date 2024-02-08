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
          <h2>Ahmad's Quiz</h2>
          
        </div>
        <div className="quiz" onClick={() => handleQuizClick("YOUR_CUSTOM_LINK_HERE")}>
          <h2>Additional Quiz 2</h2>
          
        </div>
      </div>
      <div className="container">
        <div className="quiz" onClick={() => handleQuizClick("YOUR_CUSTOM_LINK_HERE")}>
          <h2>Additional Quiz 3</h2>
          
        </div>
        <div className="quiz" onClick={() => handleQuizClick("YOUR_CUSTOM_LINK_HERE")}>
          <h2>Additional Quiz 4</h2>
          
        </div>
      </div>
      <footer>
        <p>Tlf 48274904</p>
        <placeholder>Ahmad.zaidd</placeholder>
      </footer>
    </div>
  );
}

export default App;
