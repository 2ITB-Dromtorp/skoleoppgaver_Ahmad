import { useState } from 'react';
import './App.css';
import Elev from './Elev';

export default function Home() {
    const [names, setNames] = useState([
        "Andreas",
        "Ahmad",
        "Philip",
        "Gabriel",
        "Theodor",
        "Mattis",
        "Alva",
        "Silas",
        "Axel",
        "Vetle",
        "Kristoffer",
        "Johannes",
        "Elias",
        "Matheo",
    ]);
    
    
    function shuffle() {
        const newNames = [...names];
        for (let i = names.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            const newN = newNames[i];
            const oldN = newNames[j];
            newNames[i] = oldN;
            newNames[j] = newN;
        }
        setNames(newNames);
    }
    return (
        <>
            <button onClick={shuffle}>trykk</button>
            <div className="container">

                <div className='leftside'>

                    <div className='box'>

                        <div className='sitteplasser'>
                            <Elev name={names[0]} />
                            <Elev name={names[1]} />
                        </div>

                        <div className='sitteplasser'>
                            <Elev name={names[2]} />
                        </div>

                        <div className='sitteplasser'>
                            <Elev name={names[3]} />
                            <Elev name={names[4]} />
                        </div>

                    </div>
                </div>


                <div className='rightside'>

                    <div className='box'>

                        <div className='sitteplasser'>
                            <Elev name={names[5]} />
                            <Elev name={names[6]} />
                            <Elev name={names[7]} />
                        </div>

                        <div className='sitteplasser'>
                            <Elev name={names[8]} />
                            <Elev name={names[9]} />
                            <Elev name={names[10]} />
                        </div>

                        <div className='sitteplasser'>
                            <Elev name={names[11]} />
                            <Elev name={names[12]} />
                            <Elev name={names[13]} />
                        </div>

                    </div>

                </div>


            </div>
        </>
    );
}