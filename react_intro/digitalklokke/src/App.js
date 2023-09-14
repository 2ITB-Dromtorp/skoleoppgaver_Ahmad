import { useState, useEffect } from "react";
import "./App.css";
import intttt from "./int.png"

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



    return (<>       
    <img src={intttt}>
    </img>
        <div className="clock">
            <div className="screen">
                <h1 className="time">{time} </h1>
            </div>
        </div></>

    )

}




