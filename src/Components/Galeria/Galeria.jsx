import "./Galeria.scss"
import { RViewer, RViewerTrigger } from "react-viewerjs";
import Menu from "../Header/Menu"

const Galeria = () => {
    let imagenes = [
        "/salon/1.jpg",
        "/salon/2.jpg",
        "/salon/3.jpg",
        "/salon/4.jpg",
        "/salon/5.jpg",
        "/salon/30.jpg",
        "/salon/7.jpg",
        "/salon/8.jpg",
        "/salon/23.jpg",
        "/salon/10.jpg",
        "/salon/11.jpg",
        "/salon/12.jpg",
        "/salon/29.jpg",
        "/salon/30.jpg",
    ]
    let imagenesClientes = [
        "/clientes/1.jpg",
        "/clientes/2.jpg",
        "/clientes/3.jpg",
        "/clientes/4.jpg",
        "/clientes/5.jpg",
        "/clientes/6.jpg",
        "/clientes/7.jpg",
        "/clientes/8.jpg",
        "/clientes/9.jpg",
        "/clientes/10.jpg",
        "/clientes/11.jpg",
        "/clientes/12.jpg",
        "/clientes/13.jpg",
        "/clientes/14.jpg",
    ]
    let imagenesStaff = [
        "/staff/7.jpg",
        "/staff/1.jpg",
        "/staff/5.jpg",
        
        "/staff/4.jpg",
        "/staff/2.jpg",
        "/staff/6.jpg",
        
    ]
    return (
        <div className="animation">
            
            <Menu/>
            <h2 className="subtitleGallery">Clientes</h2>
             <RViewer imageUrls={imagenesClientes}>
                <div className="flexImg">
                    {imagenesClientes.map((imagen, index)=> {
                        return (
                            <RViewerTrigger index={index}>
                                <div >
                                     <img src={imagen} alt="" />
                                </div>
                            </RViewerTrigger>
                                )
                    }) }
                </div>
             </RViewer> 
             <h1 className="titleGallery">Salon Boutique</h1>
            <RViewer imageUrls={imagenes}>
                <div className="flexImg">
                    {imagenes.map((imagen, index)=> {
                        return (
                            <RViewerTrigger index={index}>
                                <div >
                                     <img src={imagen} alt="" />
                                </div>
                            </RViewerTrigger>
                                )
                    }) }
                </div> 
            </RViewer>
             <h2 className="subtitle3Gallery">Nuestra Familia</h2>
             <RViewer imageUrls={imagenesStaff}>
                <div className="flexImg">
                    {imagenesStaff.map((imagen, index)=> {
                        return (
                            <RViewerTrigger index={index}>
                                <div >
                                     <img src={imagen} alt="" />
                                </div>
                            </RViewerTrigger>
                                )
                    }) }
                </div>
             </RViewer>
        </div>
    )
}

export default Galeria