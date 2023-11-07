
import imgService from "../../assets/img/LOGO NEGATIVO PNG.png"
import "./service.scss"
import Menu from "../Header/Menu"
import { useTranslation } from "react-i18next"

const Services = () => {

    const { t } = useTranslation()

    return (

        <section className="animation">
            <article>
                <Menu/>
                <h1>{t("Servicios.titulo")}</h1>
                
                <div className="gridService">
                    <div id="1">
                        <h2 >{t("Servicios.1")}</h2>
                        <p>{t("Servicios.1-1")}</p>
                        <p>{t("Servicios.1-2")}</p>
                        <p>{t("Servicios.1-3")}</p>
                    </div>
                    <div>
                        <img src={imgService}  alt="" />
                    </div>
                    
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div id="2">
                        <h2 >{t("Servicios.2")}</h2>
                        <p>{t("Servicios.2-1")}</p>
                        <p>{t("Servicios.2-2")}</p>
                        <p>{t("Servicios.2-3")}</p>
                        <p>{t("Servicios.2-4")}</p>
                        <p>{t("Servicios.2-5")}</p> 
                    </div>
                    <div id="3">
                        <h2 >{t("Servicios.3")}</h2>
                        <p>{t("Servicios.3-1")}</p>
                        <p>{t("Servicios.3-2")}</p>
                        <p>{t("Servicios.3-3")}</p>
                        <p>{t("Servicios.3-4")}</p>
                        <p>{t("Servicios.3-5")}</p>
                        <p>{t("Servicios.3-6")}</p>
                        <p>{t("Servicios.3-7")}</p>
                        <p>{t("Servicios.3-8")}</p>
                        <p>{t("Servicios.3-9")}</p>
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div id="4">
                        <h2 >{t("Servicios.4")}</h2>
                        <p>{t("Servicios.4-1")}</p>
                        <p>{t("Servicios.4-2")}</p>
                        <p>{t("Servicios.4-3")}</p>
                        <p>{t("Servicios.4-4")}</p>
                        <p>{t("Servicios.4-5")}</p>
                        <p>{t("Servicios.4-6")}</p>
                    </div>
                    <div id="5">
                        <h2 >{t("Servicios.5")}</h2>
                        <p>{t("Servicios.5-1")}</p>
                        <p>{t("Servicios.5-2")}</p>
                        <p>{t("Servicios.5-3")}</p>
                        <p>{t("Servicios.5-4")}</p>
                        <p>{t("Servicios.5-5")}<br />{t("Servicios.5-6")}</p>
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div id="6">
                        <h2 >{t("Servicios.6")}</h2>
                        <p>{t("Servicios.6-1")}</p>
                        <p>{t("Servicios.6-2")}</p>
                        <p>{t("Servicios.6-3")}</p>
                        <p>{t("Servicios.6-4")}</p>
                        <p>{t("Servicios.6-5")}</p>
                        <p>{t("Servicios.6-6")}</p>
                        <p>{t("Servicios.6-7")}</p>
                        <p>{t("Servicios.6-8")}</p>
                    </div>
                    <div id="7" >
                    <h2>{t("Servicios.7")}</h2>
                        <p>{t("Servicios.7-1")}</p>
                        <p>{t("Servicios.7-2")}</p>
                        <p>{t("Servicios.7-3")}</p>
                        <p>{t("Servicios.7-4")}</p>
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div id="8" >
                        <h2>{t("Servicios.8")}</h2>
                        <p>{t("Servicios.8-1")}</p>
                        <p>{t("Servicios.8-2")}</p>
                        <p>{t("Servicios.8-3")}</p>
                        <p>{t("Servicios.8-4")}</p>
                        <p>{t("Servicios.8-5")}</p>
                        <p>{t("Servicios.8-6")}</p>
                    </div>
                    <div id="9">
                        <h2>{t("Servicios.9")}</h2>
                        <p>{t("Servicios.9-1")}</p>
                        <p>{t("Servicios.9-2")}</p>
                        <p>{t("Servicios.9-3")}</p>
                        <p>{t("Servicios.9-4")}</p>
                        <p>{t("Servicios.9-5")}</p>
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div id="10">
                        <h2>{t("Servicios.10")}</h2>
                        <p>{t("Servicios.10-1")}</p>
                        <p>{t("Servicios.10-2")}</p>
                    </div>
                    <div id="11">
                        <h2>{t("Servicios.11")}</h2>
                        <p>{t("Servicios.11-1")}</p>
                        <p>{t("Servicios.11-2")}</p>
                        <p>{t("Servicios.11-3")}</p>
                        <p>{t("Servicios.11-4")} </p>
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                </div>
                <div id="12" className="adicionales">
                        <h2>{t("Servicios.12")}</h2>
                        <p>{t("Servicios.12-1")}</p>
                        <p>{t("Servicios.12-2")}</p>
                        <p>{t("Servicios.12-3")}</p>
                        <p>{t("Servicios.12-4")}</p>
                        <p>{t("Servicios.12-5")}</p>
                        <p>{t("Servicios.12-6")}</p>
                        <p>{t("Servicios.12-7")}</p>
                    </div>
            </article>
        </section>

    )
}

export default Services