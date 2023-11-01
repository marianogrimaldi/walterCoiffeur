
import imgService from "../../assets/img/LOGO NEGATIVO PNG.png"
import "./service.scss"
const Services = () => {
    return (

        <section className="animation">
            <article>
                <h1>Todos nuestros servicios son premium</h1>
                
                <div className="gridService">
                    <div id="1">
                        <h2 >CORTES</h2>
                        <p>Damas</p>
                        <p>Caballeros</p>
                        <p>Niños - Bebes</p>
                    </div>
                    <div>
                        <img src={imgService}  alt="" />
                    </div>
                    
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div id="2">
                        <h2 >TRABAJOS DE COLORACION</h2>
                        <p>Coloración con amoniaco </p>
                        <p>Coloración sin amoniaco</p>
                        <p>Coloración semipermanente (baño de color)</p>
                        <p>COLORACION SEMIPERMATE PARA CABALLEROS</p>
                        <p>Glousing (activador de color)</p> 
                    </div>
                    <div id="3">
                        <h2 >TRABAJOS TECNICOS DE COLORACION</h2>
                        <p>Reflejos con gorro</p>
                        <p>Reflejos con papel</p>
                        <p>Reflejos parte superior</p>
                        <p>Reflejos media cabeza</p>
                        <p>Reflejos de raiz </p>
                        <p>Reflejos con super aclarante</p>
                        <p>Iluminaciones</p>
                        <p>Balayage</p>
                        <p>Coutering</p>
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div id="4">
                        <h2 >TRABAJOS TECNICOS</h2>
                        <p>Alisado</p>
                        <p>Alisado de flequillo en bacha</p>
                        <p>Alisado de flequillo con plancha</p>
                        <p>Extensiones</p>
                        <p>Cortinas de pelo</p>
                        <p>Pelucas (colocación, lavado y corte)</p>
                    </div>
                    <div id="5">
                        <h2 >TRATAMIENTOS</h2>
                        <p>Higiene capilar</p>
                        <p>Botox</p>
                        <p>Shock de keratina</p>
                        <p>Splash keratinico </p>
                        <p>Tratamiento de la fibra capilar <br /> o nutrición profunda (baño de crema) </p>
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div id="6">
                        <h2 >PEINADOS</h2>
                        <p>Styling (acomodado)</p>
                        <p>Brushing</p>
                        <p>Recogido</p>
                        <p>Semirecogido</p>
                        <p>Social</p>
                        <p>Novia</p>
                        <p>Quinceañera</p>
                        <p>Graduada</p>
                    </div>
                    <div id="7" >
                    <h2>MAQUILLAJE</h2>
                        <p>Novia</p>
                        <p>Quinceañera</p>
                        <p>Graduadas</p>
                        <p>Social</p>
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div id="8" >
                        <h2>BELLEZA DE MANO</h2>
                        <p>Solo arreglar</p>
                        <p>Solo pintar</p>
                        <p>Esmalte tradicionales</p>
                        <p>Esmalte semipermanente </p>
                        <p>Retirado de esmalte semipermanente  </p>
                        <p>Niñas  </p>
                    </div>
                    <div id="9">
                        <h2>BELLEZA DE PIE</h2>
                        <p>Solo arreglar</p>
                        <p>Solo pintar</p>
                        <p>Esmalte Tradicionales </p>
                        <p>Esmalte Semipermanente </p>
                        <p>Retirado de esmalte semipermanente </p>
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                    <div id="10">
                        <h2>PESTAÑAS</h2>
                        <p>Lifting</p>
                        <p>Tinte</p>
                    </div>
                    <div id="11">
                        <h2>CEJAS</h2>
                        <p>Perfilado</p>
                        <p>Tinte</p>
                        <p>Laminado</p>
                        <p>Microblanding </p>
                    </div>
                    <div>
                        <img src={imgService} alt="" />
                    </div>
                </div>
                <div id="12" className="adicionales">
                        <h2>ADICIONALES</h2>
                        <p>Nos trasladamos a tu hogar o localidad</p>
                        <p>Trabajos fuera de hora, feriados y domingos</p>
                        <p>Asesoramiento y ventas de productos </p>
                        <p>Gift card (tarjetas para regalar)  </p>
                        <p>Asesoramiento personalizado  </p>
                        <p>Turnos a tu medida  </p>
                        <p>Presupuestos y tiempo estimado de permanencia en el salón </p>
                    </div>
            </article>
        </section>

    )
}

export default Services