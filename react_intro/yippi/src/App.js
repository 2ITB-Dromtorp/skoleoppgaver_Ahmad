


import React, { useState } from 'react';
import Mana from './123123.png'
import './App.css';
import Confetti from 'react-confetti-explosion';
import logo from './logo.svg';

function App() {
  const [isHovering, setIsHovering] = useState(false);

  const handleImageHover = () => {
    setIsHovering(!isHovering);
  };

  return (
    <div className="App">
      <header className="App-header">
      <img
  src={Mana} 
  alt="123123.png"
  className='123123'
  onMouseEnter={handleImageHover}
  onMouseLeave={handleImageHover}
/>

        {isHovering && <Confetti width={1600} />}
      </header>
    </div>
  );
}

export default App;

