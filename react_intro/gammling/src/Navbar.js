import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                Kurs
            </a>
            <ul>
                <li className="active">
                    <Link to="/logginn">loggg innnnnn</Link>
                </li>
                <li>
                    <Link to="/registrer">Registrer</Link>
                </li>
            </ul>
        </nav>
    )
}



