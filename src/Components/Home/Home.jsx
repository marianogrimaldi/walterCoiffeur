import "./Home.scss"
import tijeras from "../../assets/img/tijeras.png"
import Menu from "../Header/Menu"
import ojos from "../../assets/img/ojos.jpg"

const Home = () => {
    return (
        <div className="animation">
            <Menu/>
            <div className="verticalLines"></div>
            <div className="verticalLines2"></div>
            <div className="verticalLines3"></div>
            <div className="verticalLines4"></div>
            <div className="verticalLines5"></div>
            <h1 className="titleHome">Walter Coiffeur</h1>
            <h2 className="subTitleHome"> Salon Boutique</h2>
            <h3 className="textHome">Bienvenidos a una experiencia única...</h3>
            <div className="text">
                <p >UN LUGAR DIFERENTE </p>
                <p >CALIDAD Y ESTILO </p>

                <p>STAFF DE LUJO </p>
            </div>
            <div className="contTij">
                <img src={tijeras} className="tijHome" alt="" />
            </div>
           
            



        </div>
    )
}

export default Home