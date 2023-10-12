import React from 'react';
import "./App.css"


const App = () => {
  const person1 = "Pluh";
  const person2 = "Cuh";
  const person3 = "Gaylord";
  const person4 = "A";
  const person5 = "Charlie";
  const person6 = "David";

  return (
    <div>
      <div>{person1}</div>
      <div>{person2}</div>
      <div>{person3}</div>
      <div>{person4}</div>
      <div>{person5}</div>
      <div>{person6}</div>
    </div>
  );
};


const GridLayout = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <App />
      </div>
    </div>
  );
};

export default GridLayout;

