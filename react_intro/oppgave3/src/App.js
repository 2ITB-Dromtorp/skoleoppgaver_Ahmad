import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [startNedtelling, setStartNedtelling] = useState(false);
    if (startNedtelling === false) {
        setStartNedtelling(true);
        setTimeout(() => {
            //confetti
        }, 5000);
    }
    return (
        <div className="App">
            <header className="App-header">

            </header>
        </div>
    );
}

export default App;
