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
            interval:3000
        });        
    },[])

    return(

        /*<div>
            <div className="row">
                <div className="col s12">
                    <div className="carousel carousel-slider">
                        <div className="carousel-item" style={{backgroundImage=URL}}>
                            <a style={{width:"100%"}} href="https://forms.gle/gEyKeQjQbs9wqsXTA" target="_blank" rel="noopener noreferrer"><img  src={require('../img/1.png')} alt="1"/></a>
                        </div>
                        <div className="carousel-item">
                            <Link style={{width:"100%"}} to="/servicios" ><img src={require('../img/2.png')} alt="1"/></Link>
                        </div>
                        <div className="carousel-item">
                            <Link style={{width:"100%"}} to="/nosotros" ><img src={require('../img/3.png')} alt="1"/></Link>  
                        </div>
                        <div className="carousel-item">
                            <Link style={{width:"100%"}} to="/trabaja" ><img src={require('../img/4.png')} alt="1"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/
        <div>
        
                 <div style={{marginTop:"1em"}}>
                    <div className="slider slider1 hide-on-med-and-up">
                        <ul className="slides">
                            <li>
                                <a href="https://forms.gle/gEyKeQjQbs9wqsXTA" target="_blank" rel="noopener noreferrer"><img style={{opacity:0.6}} className="center-align" src={require('../img/Exito.jpg')} alt="1"/></a>
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

                    <div className="slider slider2 hide-on-small-only">
                        <ul className="slides">
                            <li>
                                <a href="https://forms.gle/gEyKeQjQbs9wqsXTA" target="_blank" rel="noopener noreferrer"><img style={{opacity:0.6}} style={{opacity:0.6}} className="center-align" src={require('../img/Exito.jpg')} alt="1"/></a>
                                <div className="caption center-align pink-text text-lighten-5">
                                <h3>Es el momento de compartir tu talento con el mundo</h3>
                                <h4 className="light">Permitenos conocerte y nosotros nos encargamos del resto</h4>
                                </div>
                            </li>
                            <li>
                                <Link to="/servicios"><img style={{opacity:0.3}} src={require('../img/building.jpg')} alt="1"/></Link>
                                <div className="caption left-align blue-text text-darken-4">
                                <h3>Crecimiento</h3>
                                <h4 className="light">El crecimiento de una organización depende</h4>
                                <h4 className="light">del crecimiento de sus colaboradores</h4>
                                </div>
                            </li>
                            <li>
                                <Link to="/nosotros"><img style={{opacity:0.5}} src={require('../img/startup.jpg')} alt="1"/></Link>
                                <div className="caption right-align pink-text text-darken-1">
                                <h3>Talento</h3>
                                <h4 className="light">El talento adecuado genera</h4>
                                <h4 className="light">organizaciones eficientes</h4>
                                </div>
                            </li>
                            <li>
                                <Link to="/trabaja"><img style={{opacity:0.4}} src={require('../img/handshake.jpg')} alt="1"/></Link>
                                <div className="caption center-align orange-text text-lighten-4">
                                <h3>Conecta</h3>
                                <h4 className="light">Genera ganancias ayudando a conectar a la gente con las ofertas laborales</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                 </div>

            <div className="row">
                <div>

                </div>
            </div>
        </div>

    );
}