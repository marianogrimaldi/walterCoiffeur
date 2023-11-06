import imgFooter from "../../assets/img/footerImg.jpg"

import logowpp from "../../assets/img/wppDorado.png"
import logoface from "../../assets/img/faceDorado.png"
import logoinsta from "../../assets/img/instaDorado.png"
import map from "../../assets/img/map.png"
import Marcas from "../Marcas/Marcas"
import { useTranslation } from "react-i18next"

import "./footer.scss"

const Footer = () => {

    const { t } = useTranslation()

    return(

        <footer id="footer">
            <Marcas/>
            <img src={imgFooter} className="iFooter"  alt="" />
            <div className="flexPadreFooter">
                <div className="flexTitleRedes">
                    <h2>{t("Footer.salon")} - Walter Coiffeur</h2>
                        <div className="logosRedes">
                            <a href="https://api.whatsapp.com/send?phone=5493406645956" target="blank"><img src={logowpp} className="logoR" alt="" /></a>
                            <a href="https://www.facebook.com/walter.coiffeur.9/about" target="blank"><img src={logoface} className="logoR" alt="" /></a>
                            <a href="https://www.instagram.com/walter_coiffeur/" target="blank"><img src={logoinsta} className="logoR" alt="" /></a>
                        </div>
                        <div className="mapFlex">
                            <a href="https://www.google.com/maps/place/Peluqueria+Walter+Coiffeur/@-31.9023525,-61.8581075,17z/data=!4m6!3m5!1s0x95ca59cd5530557b:0x31ce4f707cf062fa!8m2!3d-31.9019791!4d-61.8567557!16s%2Fg%2F11gnp68c7z" target="blank"><img src={map} className="map" alt="" /></a>
                            <p>SAN JORGE - {t("Footer.diasSJ")}</p>
                        </div>
                        <div className="mapFlex">
                            <a href="https://www.google.com/maps/place/Blvd.+Eva+Peron+47,+El+Trebol,+Santa+Fe/@-32.1937871,-61.7023621,18z/data=!4m5!3m4!1s0x95ca3fff86384b83:0xb12e7934f412d0ca!8m2!3d-32.1940053!4d-61.7023356"target="blank"><img src={map} className="map" alt="" /></a>    
                            <p>EL TREBOL - {t("Footer.diasET")}</p>
                        </div>
                        <p className="cel">{t("Footer.cel")}: 3406 645956</p>
                </div>
            
            </div>
            
        </footer>


    )
}

export default Footer