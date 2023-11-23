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
                Se kurset
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
                <Kurs kursId="heimkunnskap" kursNavn="Heimkunnskap" kursBeskrivelse="Lyst til å lage mat med andre individer!" kursBilde="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/at%2Farchive%2F9e553993ce87aacc6a1683d13d156293cc7e5b2f" />
                <Kurs kursId="kroppsoving" kursNavn="Kroppsøving" kursBeskrivelse="Her pumper vi jern" kursBilde="https://i.insider.com/649efcf46e35e9001af91d77?width=1136&format=jpeg" />
            </div>
        </>
    );
}