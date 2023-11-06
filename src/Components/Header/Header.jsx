import tijeras from "../../assets/img/tijeras.png"
import logo from "../../assets/img/LOGO NEGATIVO PNG.png"
import { NavLink } from "react-router-dom"
import "./Header.scss"
import Traductor from "../TraductorSelect/Traductor"
import { useTranslation } from "react-i18next"

const Header = () => {

    const { t } = useTranslation()

    return (

        <header>
            <div className="navFlex">
                <img src= {logo} className="logoWalter" alt=""/> 
                <ul className="ulFlex">
                    <NavLink to="/"><li ><img src={tijeras} className="tijeras" alt=""/>{t("Header.inicio")}</li></NavLink>
                    <NavLink to="/nosotros"><li><img src={tijeras} className="tijeras" alt=""/>{t("Header.nosotros")}</li></NavLink>
                    <NavLink to="/services"><li><img src={tijeras} className="tijeras" alt=""/>{t("Header.servicios")}</li></NavLink>
                    <NavLink to="/galeria"><li><img src={tijeras} className="tijeras" alt=""/>{t("Header.galeria")}</li></NavLink>
                    <a href="#footer"><li><img src={tijeras} className="tijeras" alt=""/>{t("Header.contacto")}</li></a>
                </ul> 
                <Traductor/>
                <div className="sub"></div>
                <div className="sub1"></div>
                <div className="sub2"></div>
            </div>

      </header>
      

    )
}

export default Header