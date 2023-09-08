import './App.css';
import { useState } from 'react';

function App() {
    const [value, setValue,] = useState(0)


    return (
        <>
            <div id='container'>
                <h1> React counter</h1>
                <p>{value} </p>
                <button className='btn' onClick={() => setValue(value + 1)}>
                    increase
                </button>
                <button className='btn' onClick={() => setValue(value - 1)}>
                    decrease
                </button>
                <button className='btn' onClick={() => setValue(0)}>
                    reset
                </button>
            </div>
        </>
    )
}

export default App

