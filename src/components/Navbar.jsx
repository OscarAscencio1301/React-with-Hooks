import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="navbar__container">
      <h2><Link to={'/'}>Prueba Técnica</Link></h2>
      <ul className="navbar__items">
        <li><Link to={'peliculas'}>Películas</Link></li>
        <li><Link to={'series'}>Series</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
