import logo from "../../assets/img/LOGO NEGATIVO PNG.png"
import "./Header.scss"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Menu = () => {

    const { t } = useTranslation()

    return (
        <header>
            <label htmlFor="menu" className="nav__label">
                    <img src={logo} alt="" className="nav__img" />
                </label>
                <input type="checkbox" id="menu" className="nav__imput" />
            <ul className="ulFlex">
                <NavLink to="/"><li > {t("Header.inicio")}</li></NavLink>
                <NavLink to="/nosotros"><li>{t("Header.nosotros")}</li></NavLink>
                <NavLink to="/services"><li>{t("Header.servicios")}</li></NavLink>
                <NavLink to="/galeria"><li>{t("Header.galeria")}</li></NavLink>
                <a href="#footer"><li>{t("Header.contacto")}</li></a>
            </ul> 

  </header>
    )
}

export default Menu