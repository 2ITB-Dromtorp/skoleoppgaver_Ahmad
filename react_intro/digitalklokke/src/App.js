import { useState, useEffect } from "react";
import "./App.css";

export default function App() {

    const [time, setTime] = useState('')


    useEffect(() => {
        const timerID = setInterval(
            
            () => tick(), 1000)

        return function cleanup() {
            clearInterval(timerID)

        }
    })





    function tick() {
        setTime(new Date().toLocaleTimeString());
    }



    return (
        <div className="clock">
            <div className="screen">
                <h1 className="time">{time} </h1>
            </div>
        </div>
    )

}
