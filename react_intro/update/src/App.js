import logo from './logo.svg';
import './App.css';

function Knapp() {
    const skript = (<><button id="knapp">2 * 3 = </button><span id="melding"></span><script type="text/javascript">{`const knapp = document.getElementById("knapp");
    const svar = document.getElementById("svar");
    console.log("formel")
    knapp.addEventListener("click", () => {
        console.log("k")
        svar.innerText = (2 * 3).toString();
    });`}</script></>);
    return skript;
}

function App() {
    return (
        <div className='App'>
            <h1>Liste</h1>



            <ul>
                <li> Oppgave 1 </li>
                <li> A </li>
                <li>Hva skriver du i javascript dersom du vil gi variable test verdien 8?</li>
                <li>  <b>let test 8 </b></li>
                <li>B</li>
                <li>Hva skriver du dersom du vil gi variabelen test verdien "testverdi"? Hvilken datatype er det her</li>
                <li> <b> let test = "testverdi"</b></li>
                <li>Hva skriver du dersm du vil renge ut 2*3 og sette resultatet inn i variabelen produkt?</li>
                <li> <b>Return function</b></li>
                <li>hva skriver du dersom du vil renge ut verdien av brøken 2/3 og sette resultatet inn i variabelen broek?  </li>
                <li> <b> Fraction </b> </li>
            </ul>


<Knapp/>

        </div>


    );
}

export default App;
