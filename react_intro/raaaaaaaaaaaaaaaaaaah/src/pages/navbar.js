import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">

        <img id="dromtorplogo" src="https://viken.no/kunde/grafikk/dr%C3%B8mtorp-videreg%C3%A5ende-skole.svg" />
      </Link>
      <ul>
        <CustomLink to="/Logginn">Logg inn</CustomLink>
        <CustomLink to="/Registrer">Registrer</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}