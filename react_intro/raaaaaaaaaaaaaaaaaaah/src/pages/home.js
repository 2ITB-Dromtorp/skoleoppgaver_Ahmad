import { Link } from 'react-router-dom';
import './home.css';

function Kurs({ kursId, kursNavn, kursBeskrivelse, kursBilde }) {
    return (
        <div className='course'>
            <img className='course_image' src={kursBilde} />
            <h4>
                {kursNavn}
            </h4>
            <p>
                {kursBeskrivelse}
            </p>
            <Link to={`/kurs/${kursId}`}>
                Meld deg på ved å trykke her
            </Link>
        </div>
    );
}

export default function home() {
    return (
        <>
            <h1  id='hovedskrift' >Kurs</h1>
            <div id="home_container">
                <Kurs kursId="norsk" kursNavn="Norsk" kursBeskrivelse="for deg som er interessert i dikt analyse" kursBilde="https://miro.medium.com/v2/resize:fill:1200:632/g:fp:0.51:0.47/1*7U5OJZyrzXh5_iQuFaY4_g.jpeg" />
                <Kurs kursId="datakunnskap" kursNavn="Datakunnskap" kursBeskrivelse="Lær deg standard html css og Javascript!" kursBilde="https://t3.ftcdn.net/jpg/04/10/14/32/360_F_410143295_PTjrMHejjSQecNYO1BBC1bgFpqpxRY1h.jpg" />
                <Kurs kursId="heimkunnskap" kursNavn="Heimkunnskap" kursBeskrivelse="Lyst til å lage mat med andre individer!" kursBilde="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkIkBvuO2oGk0NAMjH1wJUf5zoo_-CSqosjMMr-dIu_jWq8kfDiQP60udubitd1O11O0&usqp=CAU" />
                <Kurs kursId="kroppsoving" kursNavn="Kroppsøving" kursBeskrivelse="Her pumper vi jern" kursBilde="data:image/jpeg;base64,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" />
            </div>
        </>
    );
}