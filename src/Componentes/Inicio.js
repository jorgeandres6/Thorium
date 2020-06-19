import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "../estilos/inicio.css";
import M from "materialize-css"
import './Inicio.css'

export default function Inicio (){

    /*useEffect(() => {
        var elem = document.querySelector('.carousel');
        M.Carousel.init(elem);
        setInterval(()=>{
            M.Carousel.getInstance(elem).next();
        },3000);
        
    },[])*/

    useEffect(() => {
        var elem = document.querySelector('.slider1');
        M.Slider.init(elem,{
            height:200,
            interval:3000
        });        
    },[])

    useEffect(() => {
        var elem = document.querySelector('.slider2');
        M.Slider.init(elem,{
            height:600,
            interval:5000
        });        
    },[])

    return(

        
            <div>
                 <div style={{marginTop:"5em", marginBottom:"4em"}}>
                    <div className="slider slider1 hide-on-med-and-up grey">
                        <ul className="slides">
                            <li>
                                <Link to="/contacto2"><img style={{opacity:0.6}} className="center-align" src={require('../img/Exito.jpg')} alt="1"/></Link>
                                <div className="caption center-align pink-text text-lighten-5">
                                <h5>Es el momento de compartir tu talento con el mundo</h5>
                                <h6 className="light">Permitenos conocerte y nosotros nos encargamos del resto</h6>
                                </div>
                            </li>
                            <li>
                                <Link to="/servicios"><img style={{opacity:0.3}} src={require('../img/building.jpg')} alt="1"/></Link>
                                <div className="caption left-align blue-text text-darken-3">
                                <h5>Crecimiento</h5>
                                <h6 className="light">El crecimiento de una organización depende del crecimiento de sus colaboradores</h6>
                                </div>
                            </li>
                            <li>
                                <Link to="/nosotros"><img style={{opacity:0.5}} src={require('../img/startup.jpg')} alt="1"/></Link>
                                <div className="caption right-align pink-text text-darken-1">
                                <h5>Talento</h5>
                                <h6 className="light">El talento adecuado genera organizaciones eficientes</h6>
                                </div>
                            </li>
                            <li>
                                <Link to="/trabaja"><img style={{opacity:0.4}} src={require('../img/handshake.jpg')} alt="1"/></Link>
                                <div className="caption center-align orange-text text-lighten-4">
                                <h5>Conecta</h5>
                                <h6 className="light">Genera ganancias ayudando a conectar a la gente con las ofertas laborales</h6>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="slider slider2 hide-on-small-only grey">
                        <ul className="slides">
                            <li>
                                <Link to="/contacto2"><img style={{opacity:0.6}} style={{opacity:0.6}} className="center-align" src={require('../img/Exito.jpg')} alt="1"/></Link>
                                <div className="caption center-align pink-text text-lighten-5">
                                <h2>Es el momento de compartir tu talento con el mundo</h2>
                                <h3 className="light">Permitenos conocerte y nosotros nos encargamos del resto</h3>
                                </div>
                            </li>
                            <li>
                                <Link to="/servicios"><img style={{opacity:0.3}} src={require('../img/building.jpg')} alt="1"/></Link>
                                <div className="caption left-align blue-text text-darken-4">
                                <h2>Crecimiento</h2>
                                <h3 className="light">El crecimiento de una organización depende</h3>
                                <h3 className="light">del crecimiento de sus colaboradores</h3>
                                </div>
                            </li>
                            <li>
                                <Link to="/nosotros"><img style={{opacity:0.5}} src={require('../img/startup.jpg')} alt="1"/></Link>
                                <div className="caption right-align pink-text text-darken-1">
                                <h2>Talento</h2>
                                <h3 className="light">El talento adecuado genera</h3>
                                <h3 className="light">organizaciones eficientes</h3>
                                </div>
                            </li>
                            <li>
                                <Link to="/trabaja"><img style={{opacity:0.4}} src={require('../img/handshake.jpg')} alt="1"/></Link>
                                <div className="caption center-align orange-text text-lighten-4">
                                <h2>Conecta</h2>
                                <h3 className="light">Genera ganancias ayudando a conectar a la gente con las ofertas laborales</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </div>
        </div>

    );
}