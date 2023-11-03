import tijeras from "../../assets/img/tijeras.png"
import logo from "../../assets/img/LOGO NEGATIVO PNG.png"
import { NavLink } from "react-router-dom"
import "./Header.scss"


const Header = () => {
    return (

        <header>
            <div className="navFlex">
                <img src= {logo} className="logoWalter" alt=""/> 
                <ul className="ulFlex">
                    <NavLink to="/"><li ><img src={tijeras} className="tijeras" alt=""/> HOME</li></NavLink>
                    <NavLink to="/nosotros"><li><img src={tijeras} className="tijeras" alt=""/>NOSOTROS</li></NavLink>
                    <NavLink to="/services"><li><img src={tijeras} className="tijeras" alt=""/>SERVICIOS</li></NavLink>
                    <NavLink to="/galeria"><li><img src={tijeras} className="tijeras" alt=""/>GALERIA</li></NavLink>
                    <a href="#footer"><li><img src={tijeras} className="tijeras" alt=""/>CONTACTO</li></a>
                </ul> 
                <div className="sub"></div>
                <div className="sub1"></div>
                <div className="sub2"></div>
            </div>

      </header>
      

    )
}

export default Header