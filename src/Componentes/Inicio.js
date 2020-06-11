import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "../estilos/inicio.css";
import M from "materialize-css"

export default function Inicio (){

    useEffect(() => {
        var elem = document.querySelector('.carousel');
        M.Carousel.init(elem,{
            indicators:true,
        });
        setInterval(()=>{
            M.Carousel.getInstance(elem).next();
        },3000);
        
    },[])

    return(
        <div style={{marginTop:"5em", marginBottom:"4em"}}>
            <div className="carousel carousel-slider">
            <a href="https://forms.gle/gEyKeQjQbs9wqsXTA" className="carousel-item" target="_blank" rel="noopener noreferrer"><img src={require('../img/12.png')} alt="1"/></a>
                <Link to="/servicios" className="carousel-item"><img src={require('../img/23.png')} alt="1"/></Link>
                <Link to="/nosotros" className="carousel-item"><img src={require('../img/33.png')} alt="1"/></Link>
                <Link to="/trabaja" className="carousel-item"><img src={require('../img/43.png')} alt="1"/></Link>
            </div>
         </div>
    );
}