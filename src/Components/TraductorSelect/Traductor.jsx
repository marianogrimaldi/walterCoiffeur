
import React,{useState} from "react";
import { useTranslation } from 'react-i18next';
import España from "../../assets/img/esp.png"
import Inglaterra from "../../assets/img/ing.png"

import "./Traductor.scss"


const Traductor = () =>{
    const { t, i18n } = useTranslation();
    const cambiar = (lan)=>{
        localStorage.setItem("lang",lan);
        i18n.changeLanguage(lan);
        setLanguage (lan)
    }
    const [language, setLanguage] = useState ("es") 
    return (
        
        <div className="flags">
            
            <img onClick={()=>{cambiar("es")}} className={language === "es" ? "flagSelected":""} src={España}  alt="" />
            <img onClick={()=>{cambiar("en")}} className={language === "en" ? "flagSelected":""} src={Inglaterra}  alt="" />

            
           
        </div>
        
    )
}

export default Traductor