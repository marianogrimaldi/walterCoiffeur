import "./Home.scss"
import tijeras from "../../assets/img/tijeras.png"
import Menu from "../Header/Menu"
import { useTranslation } from "react-i18next"


const Home = () => {

    const { t } = useTranslation()

    return (
        <div className="animation">
            <Menu/>
            <div className="verticalLines"></div>
            <div className="verticalLines2"></div>
            <div className="verticalLines3"></div>
            <div className="verticalLines4"></div>
            <div className="verticalLines5"></div>
            <h1 className="titleHome">Walter Coiffeur</h1>
            <h2 className="subTitleHome">{t("Home.salon")}</h2>
            <h3 className="textHome">{t("Home.welcome")}</h3>
            <div className="text">
                <p >{t("Home.lugar")}</p>
                <p >{t("Home.calidad")}</p>
                <p>{t("Home.staff")}</p>
            </div>
            <div className="contTij">
                <img src={tijeras} className="tijHome" alt="" />
            </div>
           
            



        </div>
    )
}

export default Home