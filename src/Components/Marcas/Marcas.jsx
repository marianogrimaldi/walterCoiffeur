import "./Marcas.scss"
import marca1 from "../../assets/img/sponsor/gama.png"
import marca2 from "../../assets/img/sponsor/lapuisLogo.png"
import marca3 from "../../assets/img/sponsor/logoopi.png"
import marca4 from "../../assets/img/sponsor/lorealpng.png"
import marca5 from "../../assets/img/sponsor/sebastian.png"
import marca6 from "../../assets/img/sponsor/swarckLogo.png"
import marca7 from "../../assets/img/sponsor/wella.png"


const Marcas = () => {
    return (
        <div className="flexMarcas">
            <img src={marca1} alt="" />
            <img src={marca2} alt="" />
            <img src={marca3} alt="" />
            <img src={marca4} alt="" />
            <img src={marca5} alt="" />
            <img src={marca6} alt="" />
            <img src={marca7} alt="" />
        </div>
    )
}

export default Marcas