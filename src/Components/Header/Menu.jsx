import logo from "../../assets/img/LOGO NEGATIVO PNG.png"
import "./Header.scss"
import { NavLink } from "react-router-dom"

const Menu = () => {
    return (
        <header>
            <label htmlFor="menu" className="nav__label">
                    <img src={logo} alt="" className="nav__img" />
                </label>
                <input type="checkbox" id="menu" className="nav__imput" />
            <ul className="ulFlex">
                <NavLink to="/"><li > INICIO</li></NavLink>
                <NavLink to="/nosotros"><li>NOSOTROS</li></NavLink>
                <NavLink to="/services"><li>SERVICIOS</li></NavLink>
                <NavLink to="/galeria"><li>GALERIA</li></NavLink>
                <a href="#footer"><li>CONTACTO</li></a>
            </ul> 

  </header>
    )
}

export default Menu